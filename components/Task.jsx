import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const Task = () => {
  const img = require("../assets/images/task.png");

  return (
    <View style={styles.completed.container}>
      <View>
        <Image source={img} />
      </View>
      <View style={styles.completed.text}>
        <Text style={{ fontFamily: "latoBold" }}>Warm Up</Text>
        <Text>7:20 AM - 7:30 AM</Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.black,
            padding: 8,
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.greenSecondary,
              fontFamily: "latoBold",
              letterSpacing: 0.3,
            }}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  completed: {
    container: {
      display: "flex",
      flexDirection: "row",
      width: 320,
      height: 125,
      backgroundColor: Colors.greenSecondary,
      borderRadius: 10,
      overflow: "hidden",
      marginRight: 23,
    },

    text: {
      display: "flex",
      justifyContent: "space-evenly",
      marginLeft: 12,
    },
  },
});

export default Task;
