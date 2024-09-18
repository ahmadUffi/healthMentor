import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Logo = ({ width = 70, height = 80 }) => {
  const logo = require("../assets/images/logo.png");
  return (
    <View>
      <View>
        <Image
          source={logo}
          style={{
            width: width,
            height: height,
          }}
        />
      </View>
    </View>
  );
};

export default Logo;
