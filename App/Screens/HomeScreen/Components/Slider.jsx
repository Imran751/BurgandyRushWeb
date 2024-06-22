import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";

export default function Slider({ sliderList }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: Colors.BLACK,
          fontFamily: "outfit",
          paddingLeft: 20,
          paddingTop: 30,
        }}
      >
        Our SEERVICES..{" "}
      </Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: item?.img }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 330,
    margin: 10,
    borderRadius: 20,
    marginTop: 20,
  },
});
