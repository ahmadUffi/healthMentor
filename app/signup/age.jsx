import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import HeaderSign from "../../components/HeaderSign";
import ButtonSignup from "../../components/ButtonSignup";

const { width, height } = Dimensions.get("window");

const age = ({ data }) => {
  return (
    <View style={{ position: "relative" }}>
      <View style={{ position: "absolute", top: 0, zIndex: 23 }}>
        <HeaderSign />
      </View>
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.Heading}>How old are you?</Text>
        <View>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            inputMode="numeric"
            style={styles.textInput}
            maxLength={2}
            autoFocus={true}
          />
          <Text style={styles.subText}>Years Old</Text>
        </View>
        <View style={styles.wrapBtn}>
          <ButtonSignup page={"gender"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    padding: 30,
  },
  Heading: {
    fontSize: 32,
    marginTop: 131,
    fontFamily: "latoBold",
  },

  textInput: {
    fontSize: 42,
    textAlign: "center",
    fontFamily: "latoBold",
  },
  subText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "latoBold",
    opacity: 0.8,
  },
});

export default age;
