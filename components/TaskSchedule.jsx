import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const Task = ({ title, time, schedule, Kcal, imgUri, subtitle }) => {
  return (
    <View style={[styles.container]}>
      <View>
        <Image
          source={{ uri: imgUri }}
          style={{ width: 150, height: "100%", resizeMode: "cover" }}
        />
      </View>
      <View style={styles.textWrap}>
        {subtitle && <Text style={styles.subtext}>{subtitle}</Text>}
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
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
    height: 135,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 23,
    backgroundColor: Colors.black,
  },

  textWrap: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: 12,
    gap: 5,
  },

  text: {
    color: "white",
    fontFamily: "latoBold",
    fontSize: 18,
    flexWrap: "wrap",
    width: "80%",
  },
  subtext: {
    color: "white",
    fontFamily: "latoBold",
    fontSize: 14,
    flexWrap: "wrap",
    Width: "100%",
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
