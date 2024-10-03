import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { StyleSheet } from "react-native";

const Calander = ({ day, tgl, active }) => {
  return (
    <View style={[styles.container, active ? styles.active : styles.inActive]}>
      <Text style={{ fontFamily: "latoBold", textTransform: "uppercase" }}>
        {day}
      </Text>
      <Text style={{ fontFamily: "latoBold", textTransform: "uppercase" }}>
        {tgl}
      </Text>
    </View>
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

  inActive: {
    backgroundColor: Colors.greenSecondary,
  },
});

export default Calander;
