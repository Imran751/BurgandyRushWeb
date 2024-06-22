import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { CartContext } from '../contexts/CartContext';
import { FontAwesome } from 'react-native-vector-icons';

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.Price.replace('$', '')); // Ensure Price is a number
      return sum + (price * item.quantity);
    }, 0);
  };

  const shippingCharge = 5.00; // Define a constant shipping charge
  const taxRate = 0.0;
  const total = calculateTotal();
  const tax = total * taxRate;
  const grandTotal = total + shippingCharge + tax;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.Image} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          {item.Price} {item.Units}
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
          <FontAwesome name="minus" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.removeButton}>
        <FontAwesome name="trash" size={24} color="#ff6347" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Shopping Cart</Text>
      </View>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Total: ${total.toFixed(2)}</Text>
            <Text style={styles.summaryText}>Shipping: ${shippingCharge.toFixed(2)}</Text>
            <Text style={styles.summaryText}>Grand Total: ${grandTotal.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6347",
    marginTop:30,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 5,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 7,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    borderRadius: 5,
    padding: 2,
  },
  quantityButton: {
    paddingHorizontal: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#fff',
  },
  removeButton: {
    paddingHorizontal: 10,
    marginStart: 7,
  },
  summary: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cart;
