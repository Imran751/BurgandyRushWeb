import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { categories } from "../../../LocalDatabases/Category";

const Categories = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Set "All" category as the default selected category
    const defaultCategory = categories.find(
      (category) => category.name === "All"
    );
    setSelectedCategory(defaultCategory);
  }, []);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category); // Update selected category state
    console.log("Category pressed:", category);
    // Implement your logic here when a category is pressed
    // Example: navigation.navigate('CategoryDetail', { categoryId: category.id });
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust sensitivity as needed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Categories</Text>
      </View>
      <div
        ref={carouselRef}
        style={styles.scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <View style={styles.categoryList}>
          {categories.map((item) => (
            <View
              key={item.id}
              className="categoryItem"
              onClick={() => handleCategoryPress(item)}
              style={[
                styles.categoryContainer,
                {
                  backgroundColor:
                    selectedCategory && selectedCategory.id === item.id
                      ? "#FF6347"
                      : item.color,
                  borderColor:
                    selectedCategory && selectedCategory.id === item.id
                      ? "#000"
                      : "transparent",
                },
              ]}
            >
              <Image source={item.Image} style={styles.image} />
              <Text
                style={[
                  styles.name,
                  {
                    color:
                      selectedCategory && selectedCategory.id === item.id
                        ? "#FFF"
                        : "#000",
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-start",
    // padding: 20,
  },
  headerContainer: {
    alignSelf: "flex-start",
    paddingLeft: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 16,
  },
  scrollContainer: {
    overflowX: "hidden", // Hide the scrollbar
    maxWidth: "100%", // Ensure it takes full width
    position: "relative", // Ensure relative positioning for children to scroll
    cursor: "grab", // Change cursor to indicate grabbable content
    touchAction: "none", // Prevent default touch actions
  },
  categoryList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap", // Prevent wrapping to ensure horizontal layout
    justifyContent: "flex-start", // Start items from the beginning
    padding: 8, // Padding inside the scroll container
  },
  categoryContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: "transparent",
    cursor: "pointer",
    transition: "background-color 0.3s, border-color 0.3s",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 6, // Adjust spacing between image and text
  },
  name: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Categories;
