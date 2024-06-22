import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { CartContext } from '../contexts/CartContext';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <Image source={product.Image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>

      <View style={styles.ratingBox}>
        <View style={styles.ratingStar}>
          <FontAwesome name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
          <Text style={styles.review}>{product.Review}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.Price}</Text>
          <Text style={styles.units}>{product.Units}</Text>
        </View>
      </View>

      <Text style={styles.description}>{product.Description}</Text>

      <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 180,
  },
  review: {
    fontSize: 14,
    color: '#777',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 6,
  },
  units: {
    fontSize: 12,
    color: '#777',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 26,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  cartButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cartButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductDetail;
