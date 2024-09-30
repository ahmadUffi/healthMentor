import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

const ButtonSignup = ({ page, data }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/signup/" + page, params: data})}
        style={{
          height: 59,
          backgroundColor: Colors.greenSecondary,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            textAlign: "center",
            lineHeight: 59,
            color: "#000",
            fontFamily: "latoBold",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
      <Text style={{ marginVertical: 12, textAlign: "center" }}>
        Already have an account?
        <Text style={{ color: Colors.greenPrimary }}> Login here.</Text>
      </Text>
    </View>
  );
};

export default ButtonSignup;
