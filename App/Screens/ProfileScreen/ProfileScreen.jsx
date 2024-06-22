import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { dummyUsersData } from "../../LocalDatabases/DummyUser";
import { FontAwesome } from "react-native-vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({ ...dummyUsersData[0] });

  const scrollViewRef = useRef(null);

  const handleEdit = () => {
    setEditing(true);
    scrollToTop();
  };

  const handleSave = () => {
    setEditing(false);
    dummyUsersData[0] = { ...userData }; // Update the dummy data with the new values
  };

  const handleLogout = () => {
    // Implement logout functionality
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
      </View>
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image source={userData.Image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          {editing ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                value={userData.Name}
                onChangeText={(text) =>
                  setUserData({ ...userData, Name: text })
                }
                placeholder="Name"
              />
              <TextInput
                style={styles.input}
                value={userData.DateofBirth}
                onChangeText={(text) =>
                  setUserData({ ...userData, DateofBirth: text })
                }
                placeholder="Birthdate"
              />
              <TextInput
                style={styles.input}
                value={userData.Email}
                onChangeText={(text) =>
                  setUserData({ ...userData, Email: text })
                }
                placeholder="Email"
              />
              <TextInput
                style={styles.input}
                value={userData.ShippingAddress}
                onChangeText={(text) =>
                  setUserData({ ...userData, ShippingAddress: text })
                }
                placeholder="Shipping Address"
              />
              <TextInput
                style={styles.input}
                value={userData.MailingAddress}
                onChangeText={(text) =>
                  setUserData({ ...userData, MailingAddress: text })
                }
                placeholder="Mailing Address"
              />
              <TextInput
                style={[styles.input, styles.aboutInput]}
                value={userData.About}
                onChangeText={(text) =>
                  setUserData({ ...userData, About: text })
                }
                placeholder="About"
                multiline={true}
                numberOfLines={4}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.name}>{userData.Name}</Text>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Birthdate:</Text>
                <Text style={styles.text}>{userData.DateofBirth}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{userData.Email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Shipping Address:</Text>
                <Text style={styles.text}>{userData.ShippingAddress}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Mailing Address:</Text>
                <Text style={styles.text}>{userData.MailingAddress}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>About:</Text>
                <Text style={styles.text}>{userData.About}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={handleEdit}
                >
                  <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.logoutButton}
                  onPress={handleLogout}
                >
                  <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
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
  scrollView: {
    width: "100%",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginTop: 20,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    width: 150,
  },
  text: {
    fontSize: 16,
    color: "#666",
    flex: 2,
  },
  editContainer: {
    marginTop: 20,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  aboutInput: {
    height: 80,
  },
  saveButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  editButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
