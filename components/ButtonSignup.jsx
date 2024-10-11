import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

const ButtonSignup = ({
  page = "",
  isSignUp = true,
  callback = () => {},
  isDisabled = true,
}) => {
  const handlePress = () => {
    if (!isDisabled) {
      if (isSignUp) {
        router.push("/signup/" + page);
      } else {
        callback();
      }
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        disabled={isDisabled} // Disable the button based on the isDisabled prop
        style={{
          height: 59,
          backgroundColor: isDisabled ? "#808080" : Colors.greenSecondary, // Change background color if disabled
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: isDisabled ? Colors.darkGray : "#000", // Change text color if disabled
            fontSize: 20,
            textAlign: "center",
            lineHeight: 59,
            fontFamily: "latoBold",
          }}
        >
          {isSignUp || page ? "Next" : "Log in"}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSignUp ? (
          <Text style={{ marginVertical: 12 }}>

            Already have an account?
            <Text
              style={{ color: Colors.greenPrimary }}
              onPress={() => router.push("signup/login")}
            >
              {" "}
              Log in here.
            </Text>
          </Text>
        ) : (
          <Text style={{ marginVertical: 12 }}>
            New to the app?

            <Text
              style={{ color: Colors.greenPrimary }}
              onPress={() => router.push("signup/signup-form")}
            >
              {" "}
              Sign up here.
            </Text>

          </Text>
        )}
      </View>
    </View>
  );
};

export default ButtonSignup;
