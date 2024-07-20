import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import icons from "../../constants/icons";

const OnbordingText = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20, height: 190 }}>
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <Image style={{}} source={icons.one} />
          <Image style={{}} source={icons.spingo} />
          {/* <Text style={{ fontSize: 20, width: "66%" }}>
            Welcome to SPINGO! Your ultimate Business Companion
          </Text> */}
        </View>

        <Text
          style={{
            fontSize: 16,
            color: "grey",
            marginTop: 10,
          }}
        >
          Streamline your business operations and maximize efficiency with our
          all-in-one platform
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnbordingText;
