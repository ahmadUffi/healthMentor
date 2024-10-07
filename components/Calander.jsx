import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { StyleSheet } from "react-native";

const Calander = ({ day, tgl, active }) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.container, active ? styles.active : styles.inActive]}
      >
        <Text
          style={[
            styles.text,
            active ? styles.textActive : styles.textInActive,
          ]}
        >
          {day}
        </Text>
        <Text
          style={[
            styles.text,
            active ? styles.textActive : styles.textInActive,
          ]}
        >
          {tgl}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  active: {
    backgroundColor: Colors.black,
  },

  text: {
    fontFamily: "latoBold",
    textTransform: "uppercase, ",
  },

  inActive: {
    backgroundColor: Colors.greenSecondary,
  },

  textActive: {
    color: "white",
  },
  textInActive: {
    color: Colors.black,
  },
});

export default Calander;
