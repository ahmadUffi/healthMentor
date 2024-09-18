import { View, Text, Dimensions } from "react-native";
import React from "react";
import Logo from "./Logo";
import ArrowBack from "./ArrowBack";

const { width, height } = Dimensions.get("window");

const HeaderSign = () => {
  return (
    <View
      style={{
        width: width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 170,
        padding: 30,
        alignItems: "center",
      }}
    >
      <ArrowBack />
      <Logo />
    </View>
  );
};

export default HeaderSign;
