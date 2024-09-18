import { View, Text, Image } from "react-native";
import React from "react";

const ArrowBack = ({ width = 32, height = 32 }) => {
  const img = require("../assets/images/arrow.png");
  return (
    <View>
      <Image
        source={img}
        style={{
          width: width,
          height: height,
        }}
      />
    </View>
  );
};

export default ArrowBack;
