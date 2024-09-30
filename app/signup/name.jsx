import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingViewBase,
  TextInput,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { Colors } from "../../constants/Colors";
import ButtonSignup from "../../components/ButtonSignup";

const name = () => {
  const [name, setName] = useState('');
  const handleChange = (value) => {
    setName(value);
  }

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
          <TextInput placeholder="Name..." style={styles.inputText} autoFocus value={name} onChangeText={handleChange} />
        </View>
        <View>
          <ButtonSignup page={"age"} data={name} />
        </View>
      </View>
    </View>
  );
};

export default name;

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
    // marginTop: "50%",
    textDecorationLine: "none",
    color: "grey",
  },
});
