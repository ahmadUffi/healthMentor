import { View, Text } from "react-native";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <View style={{ padding: 35, paddingLeft: 20, paddingRight: 20 }}>
      {children}
    </View>
  );
};

export default Wrapper;
