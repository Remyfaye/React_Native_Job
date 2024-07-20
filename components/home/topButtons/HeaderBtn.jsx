import React from "react";
import { Text, View } from "react-native";
import CustomBtn from "../../onboarding/CustomBtn";
import TopButton from "./TopButton";

const HeaderBtn = () => {
  return (
    <View
      style={{
        padding: 15,
        borderWidth: 0.2,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TopButton text="All stocks" secondary />
      <TopButton text="All stocks" />
      <TopButton text="All stocks" />
    </View>
  );
};

export default HeaderBtn;
