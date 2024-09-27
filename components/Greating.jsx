import { View, Text } from "react-native";
import React from "react";
import Logo from "./Logo";

const Greating = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 120,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontFamily: "latoBold" }}>
          Good Morning 🔥
        </Text>
        <Text style={{ fontSize: 24, fontFamily: "latoBlack" }}>
          Welcome Ahmad Uffi
        </Text>
      </View>
      <View>
        <Logo />
      </View>
    </View>
  );
};

export default Greating;
