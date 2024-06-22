import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { products } from "../../LocalDatabases/Products";
import { CartContext } from "../contexts/CartContext";

const Products = ({ navigation }) => {
  const { toggleFavorite, favoriteProducts } = useContext(CartContext);

  const handlePress = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const renderProductItem = ({ item }) => {
    const isFavorite = favoriteProducts.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => handlePress(item)}
      >
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => toggleFavorite(item.id)}
        >
          <FontAwesome
            name={isFavorite ? "heart" : "heart-o"}
            size={24}
            color={isFavorite ? "red" : "#000"}
          />
        </TouchableOpacity>
        <Image source={item.Image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>

        {/* Additional product details */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 4,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 8,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default Products;
