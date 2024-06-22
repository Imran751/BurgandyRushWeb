import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const AboutUs = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>About Us</Text>
      </View>

      <Text style={styles.text}>
        Welcome to BurgundiRush, your number one source for all things fashion.
        We're dedicated to providing you the very best of products, with an
        emphasis on quality, customer service, and uniqueness.
      </Text>

      <Image
        source={require("../../Assets/Images/Banners/ban1.png")} // Make sure to adjust the path to your image
        style={styles.image}
      />

      <Text style={styles.subHeader}>Our Story</Text>
      <Text style={styles.text}>
        Founded in 2023 by Jane Doe, BurgundiRush has come a long way from its
        beginnings in a small home office. When Jane first started out, her
        passion for eco-friendly and high-quality fashion drove her to start her
        own business.
      </Text>

      <Text style={styles.text}>
        We now serve customers all over the world and are thrilled that we're
        able to turn our passion into our own website.
      </Text>

      <Text style={styles.subHeader}>Our Mission</Text>
      <Text style={styles.text}>
        Our mission is to provide our customers with the best shopping
        experience possible. We aim to offer products that are not only stylish
        but also sustainable and affordable.
      </Text>

      <Text style={styles.subHeader}>Our Values</Text>
      <Text style={styles.text}>At BurgundiRush, we believe in:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Quality</Text>
        <Text style={styles.listItem}>• Sustainability</Text>
        <Text style={styles.listItem}>• Customer Satisfaction</Text>
        <Text style={styles.listItem}>• Innovation</Text>
      </View>

      <Text style={styles.text}>
        We hope you enjoy our products as much as we enjoy offering them to you.
        If you have any questions or comments, please don't hesitate to contact
        us.
      </Text>

      <Text style={styles.text}>
        Sincerely,
        {"\n"}Jane Doe, Founder
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  list: {
    marginLeft: 20,
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 20,
  },
});

export default AboutUs;
