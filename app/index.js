import React from "react";
import { Image, Text, View } from "react-native";
import OnbordingText from "../components/onboarding/OnbordingText";
import OnboardingButtons from "../components/onboarding/OnboardingButtons";
import icons from "../constants/icons";

const index = () => {
  return (
    <View style={{ height: 100, backgroundColor: "red" }}>
      <Image
        style={{ width: 500, height: 500 }}
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/9360/9126/4478099d69eb2b9b0aa821d2c9c43b0b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eiZCyk6zl3ltESEUunMKK-NaZhJ8zo5jV1R1Bi29LoNnqNfHECVNNdT45tDD~iVz6eXNSe1rYDaXfDmBORdRHZ0VlPwD2H1j1ywfsPa~YZyz904jk5KsiAM8q3uQKyvfaUhj~JhkMMI2LxeP9VNZpzakl45mfzsv0w5N1kUqb3TgDZHXLqK9tV9uG88PYF0nLMi8Ed~9ldcFvYYAEtGTWPJYRGZ4Ryl4dbzxmTBvdAhSPWQ27Tx3JJGBBHlpmh2IE9L2PZrMUMKG86rMrkC~sgisWPHeKD5eXOcSIbTlnZxsM98FcYYHTBRommTDPsy1sAjX4jtjysEvd3AlakwlfA__",
        }}
      />
      {/* <Image
        style={{ position: "static", right: 0, bottom: 20, left: "5%" }}
        source={icons.line}
      /> */}

      <OnbordingText />
      <OnboardingButtons />
    </View>
  );
};

export default index;
