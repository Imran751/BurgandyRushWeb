import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";

export default function SmallSlider({ smallSliderList }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: Colors.BLACK,
          fontFamily: "outfit",
          paddingLeft: 20,
          paddingTop: 30,
        }}
      >
        Meet our DOCTORS..{" "}
      </Text>
      <FlatList
        data={smallSliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item?.img }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 300,
    margin: 10,
    borderRadius: 20,
  },
});
