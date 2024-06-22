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
import { CartContext } from "../contexts/CartContext";
import { products } from "../../LocalDatabases/Products";

const Favorite = ({ navigation }) => {
  const { favoriteProducts, toggleFavorite } = useContext(CartContext);

  const handlePress = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
  };

  const renderFavoriteItem = ({ item }) => {
    const isFavorite = favoriteProducts.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => handlePress(item)}
      >
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleToggleFavorite(item.id)}
        >
          <FontAwesome
            name={isFavorite ? "heart" : "heart-o"}
            size={24}
            color={isFavorite ? "red" : "#000"}
          />
        </TouchableOpacity>
        <Image source={item.Image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  // Filter products based on favoriteProducts array
  const favoriteProductsData = products.filter((item) =>
    favoriteProducts.includes(item.id)
  );

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>My Favorites</Text>
      </View>
      {favoriteProductsData.length > 0 ? (
        <FlatList
          data={favoriteProductsData}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noFavoritesText}>
          You haven't added any favorites yet.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 16,
    // paddingTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6347",
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  flatListContent: {
    paddingBottom: 16,
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
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
    height: 200,
    marginBottom: 8,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});

export default Favorite;
