import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { carousel } from "../../../LocalDatabases/Carousel";

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      <Text style={styles.header}>News & Views</Text>
      <View
        ref={carouselRef}
        style={styles.carouselContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {carousel.map((item) => (
          <View key={item.id} style={styles.carouselItem}>
            <Image source={item.Image} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 16,
    marginLeft: 16,
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "hidden", // Hide scrollbar
    maxWidth: "100%", // Ensure it takes full width
    paddingLeft: 8, // Adjust padding as needed
    paddingBottom: 8, // Adjust padding as needed
    cursor: "grab", // Change cursor when grabbing
  },
  carouselItem: {
    width: 367,
    height: 182,
    borderRadius: 10,
    marginLeft: 10,
  },
  image: {
    width: 367,
    height: 182,
    marginBottom: 8,
    borderRadius: 15,
  },
});

export default CarouselComponent;
