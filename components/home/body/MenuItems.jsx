import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { menu } from "../../../constants";

const MenuItems = () => {
  return (
    <ScrollView
      style={{
        height: 330,
        width: 200,
        backgroundColor: "#FCFCFC",
        position: "absolute",
        top: 200,
        right: 10,
        paddingVertical: 20,
        borderRadius: 10,
      }}
    >
      {menu.map((item) => (
        <View
          key={item.name}
          style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              //   backgroundColor: "red",
            }}
            source={{
              uri: item.image,
            }}
            // source={item.image}
          />
          <Image source={item.image} />
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;
