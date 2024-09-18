import { Link, router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const backgroundImage = require("../../assets/images/onboarding.png");

  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
      </View>
      <View>
        <Text style={styles.headline}>Wherever you are</Text>
        <Text style={styles.headlineBottom}>health is number one</Text>
      </View>

      <View>
        <Text style={styles.subtext}>
          There is no instant way to a healthy life
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.navigate("/signup/name")}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    height: height * 0.65,
    overflow: "hidden",
  },
  backgroundImage: {
    width: width,
    height: height * 0.65,
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    marginTop: 30,
    fontSize: 28,
    textAlign: "center",
    fontFamily: "latoBlack",
    fontWeight: "ultralight",
  },
  headlineBottom: {
    marginTop: 15,
    fontSize: 28,
    textAlign: "center",
    fontFamily: "latoBlack",
    fontWeight: "ultralight",
    marginTop: -5,
  },

  subtext: {
    marginTop: 24,
    textAlign: "center",
    color: "grey",
  },

  btn: {
    backgroundColor: "#192126",
    padding: 20,
    marginTop: 50,
    width: 200,
    margin: "auto",
    borderRadius: 99,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "latoBold",
  },
});
