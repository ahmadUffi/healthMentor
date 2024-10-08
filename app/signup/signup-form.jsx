import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Logo from "../../components/Logo";
import ButtonSignup from "../../components/ButtonSignup";
import { useState } from "react";
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";
import { router } from "expo-router";
import { useFormData } from "./formHandler";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("");
    const isDisabled = !email || !password || !conPass === "";

    const handleRegister = async () => {
        if (password != conPass) {
            Alert.alert("Password Mismatch", "Please re-type your passsword correctly. Make sure that both passwords are the same.")
            return;
        }
        try {
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            router.push("/signup/name");
        }
        catch (error) {
            Alert.alert("Sign Up Failed", "Error code : " + error.code)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo/>
            </View>
            <View>
                <Text style={styles.heading}>Hi there,{"\n"}nice to see you!</Text>
                <Text style={styles.text}>Sign up using an email and password</Text>
            </View>
            <View style={{
                height: "69%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <View style={{ paddingTop: "5%" }}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput style={styles.formInput} placeholder="Type your email" onChangeText={setEmail} textContentType="emailAddress"></TextInput>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.formInput} placeholder="Type your password" onChangeText={setPassword} secureTextEntry={true}></TextInput>
                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput style={styles.formInput} placeholder="Re-type your password" onChangeText={setConPass} secureTextEntry={true}></TextInput>
                </View>
                <View>
                    <ButtonSignup page={"notEmpty"} isSignUp={true} callback={handleRegister} isDisabled={isDisabled}/>
                </View>
            </View>
        </View>
    )
};

export default SignUp;

const styles = StyleSheet.create({
    text: {
        color: "#192126",
        margin: "2%",
        fontFamily : "latoReguler"
    },
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
    formContainer: {
        paddingTop: 32
    },
    formInput: {
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#1D243310",
        height: 54,
        margin: "1%",
        fontFamily: "latoReguler"
    }
  });