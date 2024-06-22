import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart items and favorite products from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@cart_items");
        if (jsonValue !== null) {
          setCartItems(JSON.parse(jsonValue));
        }
        const favoriteProductsValue = await AsyncStorage.getItem(
          "@favorite_products"
        );
        if (favoriteProductsValue !== null) {
          setFavoriteProducts(JSON.parse(favoriteProductsValue));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage", error);
      } finally {
        setLoading(false);
      }
    };
    loadCartItems();
  }, []);

  // Save cart items to AsyncStorage whenever cartItems state changes
  useEffect(() => {
    const saveCartItems = async () => {
      try {
        const jsonValue = JSON.stringify(cartItems);
        await AsyncStorage.setItem("@cart_items", jsonValue);
      } catch (error) {
        console.error("Error saving cart items to AsyncStorage", error);
      }
    };
    if (!loading) {
      saveCartItems();
    }
  }, [cartItems, loading]);

  // Save favorite products to AsyncStorage whenever favoriteProducts state changes
  useEffect(() => {
    const saveFavoriteProducts = async () => {
      try {
        const jsonValue = JSON.stringify(favoriteProducts);
        await AsyncStorage.setItem("@favorite_products", jsonValue);
      } catch (error) {
        console.error("Error saving favorite products to AsyncStorage", error);
      }
    };
    if (!loading) {
      saveFavoriteProducts();
    }
  }, [favoriteProducts, loading]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleFavorite = (itemId) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId]
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        favoriteProducts,
        toggleFavorite,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
