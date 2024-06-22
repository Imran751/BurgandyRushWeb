import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Checkout = ({ navigation }) => {
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigation.navigate('Home'); // Assuming 'Home' is the main screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <Text style={styles.message}>This is a placeholder for the checkout process.</Text>
      <TouchableOpacity style={styles.orderButton} onPress={handlePlaceOrder}>
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
  },
  orderButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  orderButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Checkout;
