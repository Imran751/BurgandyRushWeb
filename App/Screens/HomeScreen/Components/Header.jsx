import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dummyUsersData } from "../../../LocalDatabases/DummyUser";
import { cartImage } from "../../../LocalDatabases/CartImage";
import ModalOptions from "./ModalOptions"; // Import the ModalOptions component

const UserComponent = () => {
  const navigation = useNavigation();
  const user = dummyUsersData[0];

  const [showModal, setShowModal] = useState(false);

  const handleUserPress = () => {
    navigation.navigate("Profile", { userId: user.id });
  };

  const handleHamburgerPress = () => {
    setShowModal(true); // Show modal when hamburger icon is pressed
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleUserPress}>
        <View style={styles.userInfo}>
          <Image source={user.Image} style={styles.userImage} />
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.name}>{user.Name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={showModal ? handleCloseModal : handleHamburgerPress}
        style={styles.cartView}
      >
        <Image
          source={
            showModal
              ? require("../../../Assets/Images/close1.png")
              : require("../../../Assets/Images/hamburger.png")
          }
          style={styles.hamburgerImage}
        />
      </TouchableOpacity>

      {/* Modal for Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={handleCloseModal}
      >
        <ModalOptions onClose={handleCloseModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    // marginTop: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartView: {
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: "center",
  },
  welcome: {
    fontSize: 16,
    color: "#888",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  hamburgerImage: {
    width: 30,
    height: 30,
  },
});

export default UserComponent;
