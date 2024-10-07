import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { Colors } from "../../constants/Colors";
import ButtonSignup from "../../components/ButtonSignup";
import { useFormData } from "./formHandler";

const Name = () => {
  const { data, updateData } = useFormData();

  const isDisabled = !data.name || data.name.trim() === "";

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View>
          <Text style={styles.heading}>Nice to see you! What’s your name?</Text>
        </View>
        <View>
          <TextInput 
            placeholder="Name..." 
            style={styles.inputText} 
            autoFocus 
            value={data.name} 
            onChangeText={(value) => { updateData('name', value) }} 
          />
        </View>
        <View>
          <ButtonSignup page={"age"} isDisabled={isDisabled} /> 
        </View>
      </View>
    </View>
  );
};

export default Name; 

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 34,
  },
  logo: {
    position: "absolute",
    right: 40,
    top: 50,
  },
  heading: {
    fontSize: 32,
    marginTop: 131,
    fontFamily: "latoBold",
  },
  inputText: {
    fontFamily: "latoBold",
    fontSize: 32,
    textAlign: "center",
    textDecorationLine: "none",
    color: "grey",
  },
});
