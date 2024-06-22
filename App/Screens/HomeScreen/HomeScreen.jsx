import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Carousel from "./Components/Carousel";
import Products from "../Products/Products";
import Search from "./Components/Search";
import NewArrvals from "../Products/NewArrivals";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Search />
        <Category />
        <Carousel />
        <NewArrvals />
        <Products navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    width: "48%", // Adjusted for two columns with space in between
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
    marginBottom: 4,
  },
  review: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
});

export default HomeScreen;
