import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    switch (screen) {
      case "ProfileSettings":
        navigation.navigate("Profile");
        break;
      case "PrivacySettings":
        navigation.navigate("PrivacyPolicy");
        break;
      case "AppInfo":
        navigation.navigate("AboutUs");
        break;
      default:
        navigation.navigate("NoPage");
        break;
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
      </View>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("ProfileSettings")}
      >
        <Text style={styles.itemText}>Profile Information</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("SecuritySettings")}
      >
        <Text style={styles.itemText}>Security</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("NotificationSettings")}
      >
        <Text style={styles.itemText}>Notifications</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("AppPreferences")}
      >
        <Text style={styles.itemText}>App Preferences</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("PrivacySettings")}
      >
        <Text style={styles.itemText}>Privacy</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("PaymentSettings")}
      >
        <Text style={styles.itemText}>Payment Methods</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("OrderHistory")}
      >
        <Text style={styles.itemText}>Order History</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("Support")}
      >
        <Text style={styles.itemText}>Support</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("Legal")}
      >
        <Text style={styles.itemText}>Legal</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("AppInfo")}
      >
        <Text style={styles.itemText}>About</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation("Feedback")}
      >
        <Text style={styles.itemText}>Feedback</Text>
        <FontAwesome
          name="angle-right"
          size={24}
          color="#ccc"
          style={styles.arrow}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 18,
  },
  arrow: {
    marginLeft: "auto",
  },
});

export default SettingsScreen;
