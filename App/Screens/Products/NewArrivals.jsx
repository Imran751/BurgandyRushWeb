import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { products } from "../../LocalDatabases/Products";

const ITEM_WIDTH = 180; // Width of each product item
const ITEM_MARGIN = 16; // Margin between each product item

const NewArrivals = () => {
  const navigation = useNavigation();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const carouselRef = useRef(null);
  const pan = useRef(new Animated.ValueXY()).current;
  const [startX, setStartX] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const toggleFavorite = (item) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(item.id)
        ? prevFavorites.filter((id) => id !== item.id)
        : [...prevFavorites, item.id]
    );
  };

  const handlePress = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const handleMouseDown = (evt) => {
    setStartX(evt.nativeEvent.pageX);
    setScrollOffset(carouselRef.current?.getBoundingClientRect().left || 0);
    pan.setValue({ x: 0, y: 0 }); // Reset animated value
  };

  const handleMouseMove = (evt) => {
    const diffX = evt.nativeEvent.pageX - startX;
    pan.setValue({ x: diffX, y: 0 });
  };

  const handleMouseUp = (evt) => {
    const diffX = evt.nativeEvent.pageX - startX;
    const itemsPerPage = 1; // Adjust this number based on your item width and spacing
    const targetIndex =
      Math.round((scrollOffset - diffX) / (ITEM_WIDTH + ITEM_MARGIN)) *
      (ITEM_WIDTH + ITEM_MARGIN);

    Animated.timing(pan, {
      toValue: { x: 0, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start();

    carouselRef.current.scrollTo({
      x: targetIndex,
      y: 0,
      animated: true,
    });
  };

  const handleMouseLeave = (evt) => {
    handleMouseUp(evt);
  };

  const renderProductItem = ({ item }) => {
    const isFavorite = favoriteProducts.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => handlePress(item)}
        activeOpacity={0.8}
      >
        <Animated.View
          style={[styles.touchable, { transform: [{ translateX: pan.x }] }]}
          onStartShouldSetResponder={() => true}
          onResponderGrant={handleMouseDown}
          onResponderMove={handleMouseMove}
          onResponderRelease={handleMouseUp}
          onResponderTerminate={handleMouseLeave}
        >
          <Image source={item.Image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.ratingBox}>
            <View style={styles.ratingStar}>
              <FontAwesome
                name="star"
                size={16}
                color="#FFD700"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.review}>{item.Review}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.Price}</Text>
              <Text style={styles.units}>{item.Units}</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Arrivals</Text>
      <ScrollView
        ref={carouselRef}
        style={styles.scrollContainer}
        className="web-carousel"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      >
        {products.map((item) => (
          <View key={item.id} style={styles.productItem}>
            {renderProductItem({ item })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  flatListContent: {
    paddingHorizontal: ITEM_MARGIN / 2,
    paddingBottom: 16,
  },
  productItem: {
    width: ITEM_WIDTH,
    marginRight: ITEM_MARGIN,
  },
  touchable: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    textAlign: "center",
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between",
  },
  ratingStar: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  review: {
    fontSize: 14,
    color: "#777",
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  units: {
    fontSize: 12,
    color: "#777",
    marginLeft: 4,
  },
  scrollContainer: {
    height: "100%",
  },
});

export default NewArrivals;
