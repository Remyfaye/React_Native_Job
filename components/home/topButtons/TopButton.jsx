import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../../constants";

const TopButton = ({ text, secondary }) => {
  return (
    <TouchableOpacity
      style={
        secondary
          ? {
              width: 120,
              height: 45,
              backgroundColor: colors.secondary,
              marginHorizontal: 5,
              borderRadius: 50,
            }
          : {
              width: 120,
              height: 45,
              backgroundColor: colors.primary,
              marginHorizontal: 5,
              borderRadius: 50,
            }
      }
    >
      <Text
        style={
          secondary
            ? { margin: "auto", color: colors.primary }
            : {
                margin: "auto",
                color: "white",
              }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TopButton;
