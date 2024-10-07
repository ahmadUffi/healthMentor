import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

const ButtonSignup = ({ page = "", isSignUp = true, callback = () => {}}) => {
  const handlePress = () => {
    if (isSignUp) {
      router.push("/signup/" + page)
    }
    else {
      callback();
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
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
          {isSignUp ? ("Next") : ("Log in")}
        </Text>
      </TouchableOpacity>
      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {isSignUp ? (
          <Text style={{ marginVertical: 12}}>
            Already have an account?
            <Text style={{ color: Colors.greenPrimary }} onPress={ () => router.push("signup/login") }> Log in here.</Text>
          </Text>
        ) : (
          <Text style={{ marginVertical: 12}}>
            New to the app?
            <Text style={{ color: Colors.greenPrimary }} onPress={ () => router.push("signup/name") }> Sign up here.</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default ButtonSignup;
