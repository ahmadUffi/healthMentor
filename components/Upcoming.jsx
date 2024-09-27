import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const Upcoming = () => {
  return (
    <View style={{}}>
      <ImageBackground
        style={{
          //   height: 143,
          borderRadius: 12,
          overflow: "hidden",
          padding: 25,
        }}
        source={require("../assets/images/upcomingImg.png")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>Upcoming Activity</Text>
          <Text style={styles.activiie}>Morning Joging</Text>
          <Text style={styles.describe}>
            Run for 15 minutes in a steady pace
          </Text>
          <Text style={styles.time}>7:30 AM - 7:45 AM</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    gap: 5,
  },
  header: {},
  header: {
    fontSize: 16,
    fontFamily: "latoBold",
    color: "white",
  },
  activiie: {
    fontSize: 24,
    fontFamily: "latoBlack",
    color: "white",
  },
  describe: {
    fontSize: 12,
    fontFamily: "latoReguler",
    color: "white",
  },
  time: { fontSize: 12, fontFamily: "latoBold", color: "white" },
});
export default Upcoming;
