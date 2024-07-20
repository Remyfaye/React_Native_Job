import React from "react";
import { Image, Text, View } from "react-native";
import { colors } from "../../../constants";

const CardItem = ({ item }) => {
  return (
    <View
      style={{
        marginVertical: 5,
        padding: 15,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "white",
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        // borderWidth: 0.2,
        shadowColor: "#171717",
      }}
    >
      <Image
        style={{
          width: 90,
          height: 90,
          //   backgroundColor: "grey",
          borderWidth: 0.2,
          borderRadius: 50,
        }}
        source={{
          uri: item.image,
        }}
        // source={item.image}
      />
      <View style={{ flexDirection: "row", gap: 30 }}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ width: 13, height: 13 }}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/5e2b/f3da/83828f8ca1c987c048f328ef3a5d8c74?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKomsRS8igHzeV7JtZpnqriuUwpBHwro~U8rUQShsniKbB5T7KJmAcrnOt5GopMgNyh-ElvbZGMGbc~YmGNTsd62J8AnlnkFqY1ZGedWcb0rOV06r-IGRa1x5rpGrBs7BBN1ZQ7gibXWnOM5quPl4o7UUAesriga4SFZS9WaBvVHxD6yke99SgDwopqeW1-ZMRDuyEJ5qtrTH-UQ~f8k5gJNv2YtZTARhp~Qz47~DLl-cBocrxQ2QROD70CY5aVIWN~L84aZqm-f4lGQb87vag2LcCCE4le4982Fl65JVGyJnjpmbXS-WCeaayZ-Ae5hLeLfrr7mw3VqAEJl-KVJZw__",
              }}
            />

            <Text
              style={{
                fontSize: 18,
                textDecorationLine: "underline",
                textTransform: "capitalize",
                color: colors.primary,
              }}
            >
              {item.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ color: "grey" }}>per price </Text>
            <Text style={{ fontSize: 17 }}>N{item.price}</Text>
          </View>
        </View>
        <View
          style={{
            padding: 7,
            backgroundColor: "lightgrey",
            height: 30,
            borderRadius: 10,
          }}
        >
          <Text style={{}}>multiple brands</Text>
        </View>
        <Image
          style={{ marginRight: 20, width: 20, height: 20 }}
          source={{
            uri: "https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png",
          }}
        />
      </View>
    </View>
  );
};

export default CardItem;
