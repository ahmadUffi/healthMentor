import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Bio = ({ title, value }) => {
  return (
    <View
      style={{
        marginVertical: 14,
        display: "flex",
        gap: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "latoReguler",
          fontSize: 20,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "rgba(25, 33, 38, .03)",
          padding: 18,
          borderRadius: 8,
          borderWidth: 0.3,
        }}
      >
        <Text style={{ fontSize: 16, opacity: 0.6 }}>{value}</Text>
      </View>
    </View>
  );
};

export default Bio;

const styles = StyleSheet.create({});
