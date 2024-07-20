import React from "react";
import { Text, View } from "react-native";
import CustomBtn from "./CustomBtn";

const OnboardingButtons = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <CustomBtn text="Home" />
      <CustomBtn text="sign Up" signup />
    </View>
  );
};

export default OnboardingButtons;
