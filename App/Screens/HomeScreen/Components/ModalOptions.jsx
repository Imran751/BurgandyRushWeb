import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ModalOptions = ({ onClose }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("Profile");
    onClose(); // Close the modal after navigating
  };

  const handlePrivacyPress = () => {
    navigation.navigate("PrivacyPolicy");
    onClose(); // Close the modal after navigating
  };

  const handleAboutPress = () => {
    navigation.navigate("AboutUs");
    onClose(); // Close the modal after navigating
  };

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image
          source={require("../../../Assets/Images/close1.png")}
          style={styles.closeButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.option} onPress={handleProfilePress}>
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handlePrivacyPress}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleAboutPress}>
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    minWidth: 300,
    position: "relative",
    marginBottom: 400,
  },
  option: {
    paddingVertical: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    top: 15, // Adjust this value according to the actual position
    right: 15, // Adjust this value according to the actual position
    zIndex: 1, // Ensure the close button is on top
    padding: 5,
  },
  closeButtonImage: {
    width: 30,
    height: 30,
  },
});

export default ModalOptions;
