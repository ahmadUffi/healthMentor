import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const Meals = ({ text, time, schedule, imageUri }) => {
  return (
    <View
      style={[
        styles.container,
        schedule == "completed" ? styles.cardActive : styles.cardInactive,
      ]}
    >
      <View>
        <Image
          source={{ uri: imageUri }}
          style={{ width: "100%", height: 140 }}
          alt="source"
        />
      </View>
      <View style={styles.text}>
        <Text
          style={[
            schedule == "completed" ? styles.activeColor : styles.inactiveColor,
          ]}
        >
          Wram Up
        </Text>
        <Text
          style={[
            schedule == "completed" ? styles.activeColor : styles.inactiveColor,
            styles.time,
          ]}
        >
          7:20 AM - 7:30 AM
        </Text>
        <TouchableOpacity
          style={[
            styles.btn,
            schedule == "completed" ? styles.btnActive : styles.btnInActive,
          ]}
        >
          <Text
            style={[
              styles.btnText,
              schedule == "completed"
                ? styles.btnTextActive
                : styles.btnTextInActive,
            ]}
          >
            {schedule}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 170,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 23,
  },

  text: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 7,
    marginLeft: 12,
  },

  cardActive: {
    backgroundColor: Colors.greenSecondary,
  },

  cardInactive: {
    backgroundColor: Colors.black,
  },

  inactiveColor: {
    color: "white",
    fontFamily: "latoBold",
    fontSize: 16,
  },
  activeColor: {
    color: Colors.black,
    fontFamily: "latoBold",
    fontSize: 16,
  },

  time: {
    fontSize: 14,
    fontFamily: "latoBold",
  },

  btn: {
    width: "50%",
    padding: 6,
    backgroundColor: Colors.black,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  btnActive: {
    backgroundColor: Colors.black,
  },
  btnInActive: {
    backgroundColor: "white",
  },

  btnText: {
    fontFamily: "latoBold",
    letterSpacing: 0.3,
    fontSize: 12,
    textTransform: "capitalize",
  },

  btnTextActive: {
    color: Colors.greenSecondary,
  },
  btnTextInActive: {
    color: Colors.black,
  },
});

export default Meals;
