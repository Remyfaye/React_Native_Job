import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import HeaderBtn from "../../components/home/topButtons/HeaderBtn";
import HomeContent from "../../components/home/body/HomeContent";
import MenuItems from "../../components/home/body/MenuItems";
import icons from "../../constants/icons";

const home = () => {
  const category = [
    "Canned Goods",
    "Grains and Pasta",
    "Frozen food",
    "Baby products",
  ];
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 23,
          textAlign: "center",
        }}
      >
        Home
      </Text>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Text style={{ fontWeight: "600" }}>{item}</Text>
        )}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 10 }}
        style={{
          borderWidth: 0.3,
          padding: 10,
          marginTop: 10,
        }}
      />
      <HeaderBtn />
      <ScrollView></ScrollView>
      <HomeContent />
      <MenuItems />
      <Image
        style={{ position: "absolute", bottom: 0, right: 0 }}
        source={icons.button}
      />
    </SafeAreaView>
  );
};

export default home;
