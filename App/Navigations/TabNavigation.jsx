import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { CartProvider, CartContext } from "../Screens/contexts/CartContext";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import Cart from "../Screens/CartScreen/Cart";
import Checkout from "../Screens/Checkouts/Checkout";
import ProductDetail from "../Screens/Products/ProductDetail";
import SettingsScreen from "../Screens/MoreScreen/Settings";
import Favorite from "../Screens/Products/Favorite";
import PrivacyPolicy from "../Screens/MoreScreen/PrivacyPolicy";
import AboutUs from "../Screens/MoreScreen/AboutUs";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import NoPage from "../Screens/MoreScreen/NoPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="NoPage" component={NoPage} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <CartProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home_Stack"
          component={MyHomeStack}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Home
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={({ navigation }) => ({
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Cart
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <CartIconWithBadge cartColor={color} cartSize={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={({ navigation }) => ({
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Favorite
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <FavoriteIconWithBadge
                favoriteColor={color}
                favoriteSize={size}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Settings
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="gear" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </CartProvider>
  );
};

const CartIconWithBadge = ({ cartColor, cartSize }) => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total quantity of items in cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <FontAwesome name="shopping-cart" size={cartSize} color={cartColor} />
      {totalItems > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </View>
  );
};

const FavoriteIconWithBadge = ({ favoriteColor, favoriteSize }) => {
  const { favoriteProducts } = useContext(CartContext);

  // Calculate the total number of favorite products
  const totalFavorites = favoriteProducts.length;

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <FontAwesome name="heart" size={favoriteSize} color={favoriteColor} />
      {totalFavorites > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalFavorites}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#FF6347",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});

export default TabNavigation;
