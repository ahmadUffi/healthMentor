import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const Task = ({ text, time, schedule, Kcal }) => {
  const img = require("../assets/images/task.png");

  return (
    <View style={[styles.container]}>
      <View>
        <Image source={img} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.text}>Wram Up</Text>
        <Text style={styles.time}>7:20 AM - 7:30 AM</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 23 }}>
          <TouchableOpacity style={[styles.btn]}>
            <Text style={[styles.btnText]}>{schedule}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]}>
            <Text style={[styles.btnText]}>{Kcal}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 125,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 23,
    backgroundColor: Colors.black,
  },

  textWrap: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: 12,
  },

  text: {
    color: "white",
    fontFamily: "latoBold",
    fontSize: 16,
  },

  time: {
    color: "white",
    fontFamily: "latoBold",
    fontSize: 14,
    fontFamily: "latoBold",
  },

  btn: {
    backgroundColor: Colors.black,
    padding: 8,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  btnText: {
    fontFamily: "latoBold",
    letterSpacing: 0.3,
    fontSize: 14,
    textTransform: "capitalize",
    color: Colors.black,
  },
});

export default Task;
