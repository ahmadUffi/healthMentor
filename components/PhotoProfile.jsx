import { View, Text, Image } from "react-native";
import React from "react";

const PhotoProfile = () => {
  const img = require("../assets/images/task.png");
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 24,
      }}
    >
      <View
        style={{
          width: 130,
          height: 130,
          borderRadius: 99,
          overflow: "hidden",
          marginVertical: 23,
        }}
      >
        <Image
          source={img}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>

      <Text style={{ fontSize: 26, fontFamily: "latoBlack" }}>Ahmad Uffi</Text>
    </View>
  );
};

export default PhotoProfile;
