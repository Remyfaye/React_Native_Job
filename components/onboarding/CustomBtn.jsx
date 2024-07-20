import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants";

const CustomBtn = ({ text, signup, home }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/(tabs)/home")}
      style={
        signup
          ? {
              height: 50,
              borderRadius: 50,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.primary,
              marginVertical: 16,
              marginHorizontal: 20,
            }
          : {
              height: 50,
              borderRadius: 50,
              backgroundColor: colors.primary,
              marginHorizontal: 20,
            }
      }
    >
      <Text
        style={
          !signup
            ? { margin: "auto", fontSize: 16, color: "white" }
            : {
                borderColor: colors.primary,

                margin: "auto",
                fontSize: 16,
                color: colors.primary,
              }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
