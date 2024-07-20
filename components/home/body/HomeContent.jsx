import React from "react";
import { FlatList, Text, View } from "react-native";
import { data } from "../../../constants";
import CardItem from "./CardItem";

const HomeContent = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem item={item} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default HomeContent;
