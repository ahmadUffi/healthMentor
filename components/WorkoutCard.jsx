import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const WorkoutCard = ({ imageUri, title, time, status, page }) => {
  return (
    <View style={{ marginRight: 25 }}>
      <TouchableOpacity onPress={() => router.push("/" + page)}>
        <View
          style={[
            styles.customBox,
            status ? styles.cardActive : styles.cardInactive,
          ]}
        >
          <Image
            source={{ uri: imageUri }}
            style={{
              width: 80,
              height: 80,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 12,
            }}
          >
            <Text
              style={[
                styles.tex13,
                status ? styles.inactiveColor : styles.activeColorW,
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                styles.tex10,
                status ? styles.inactiveColor : styles.activeColorW,
              ]}
            >
              {time}
            </Text>
            <View
              style={[
                styles.box,
                status ? styles.activeBGColor : styles.inactiveBGColor,
              ]}
            >
              <Text
                style={[
                  styles.tex,
                  status ? styles.activeColor : styles.inactiveColor,
                ]}
              >
                {status ? "Completed" : "Upcoming"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  customBox: {
    fontSize: 15,
    fontFamily: "latoBold",
    width: 240,
    height: 120,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },

  cardInactive: {
    backgroundColor: "#192126",
    color: "white",
  },
  cardInactive: {
    backgroundColor: "#192126",
    color: "white",
  },
  activeColor: {
    color: "#BBF246",
  },
  activeColorW: {
    color: "white",
  },
  inactiveColor: {
    color: "#192126",
  },
  activeBGColor: {
    backgroundColor: "#192126",
  },
  inactiveBGColor: {
    backgroundColor: "white",
  },
  tex: {
    fontSize: 8,
    fontFamily: "latoReguler",
  },
  tex10: {
    fontSize: 10,
    fontFamily: "latoBold",
  },
  tex13: {
    fontSize: 13,
    fontFamily: "latoReguler",
  },
  box: {
    width: 50,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
});

export default WorkoutCard;
