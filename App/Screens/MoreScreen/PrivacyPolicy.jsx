import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const PrivacyPolicy = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Privacy Policy</Text>
      </View>

      <Text style={styles.date}>Last updated: June 20, 2024</Text>

      <Text style={styles.subHeader}>Introduction</Text>
      <Text style={styles.text}>
        Welcome to BurgundiRush. We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about this privacy notice, or our practices with regards to
        your personal information, please contact us at
        privacy@burgundirush.com.
      </Text>

      <Text style={styles.subHeader}>Information We Collect</Text>
      <Text style={styles.text}>
        We collect personal information that you provide to us when you register
        on the app, place an order, subscribe to our newsletter, or use certain
        other app features. This includes:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Name</Text>
        <Text style={styles.listItem}>• Email address</Text>
        <Text style={styles.listItem}>• Mailing address</Text>
        <Text style={styles.listItem}>• Phone number</Text>
        <Text style={styles.listItem}>• Payment information</Text>
      </View>

      <Text style={styles.subHeader}>How We Use Your Information</Text>
      <Text style={styles.text}>
        We use the information we collect in the following ways:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• To process and manage your orders</Text>
        <Text style={styles.listItem}>• To manage your account</Text>
        <Text style={styles.listItem}>• To improve our app and services</Text>
        <Text style={styles.listItem}>
          • To send periodic emails regarding your order or other products and
          services
        </Text>
      </View>

      <Text style={styles.subHeader}>Sharing Your Information</Text>
      <Text style={styles.text}>
        We do not sell, trade, or otherwise transfer to outside parties your
        Personally Identifiable Information unless we provide users with advance
        notice. This does not include website hosting partners and other parties
        who assist us in operating our app, conducting our business, or serving
        our users, so long as those parties agree to keep this information
        confidential.
      </Text>

      <Text style={styles.subHeader}>Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </Text>
      <Text style={styles.text}>Email: privacy@burgundirush.com</Text>
      <Text style={styles.text}>
        Address: 123 Burgundi Lane, Shopville, ST 56789
      </Text>
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
  date: {
    fontSize: 14,
    marginBottom: 20,
    paddingLeft: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    paddingLeft: 20,
  },
  list: {
    marginLeft: 20,
    marginBottom: 20,
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 20,
  },
});

export default PrivacyPolicy;
