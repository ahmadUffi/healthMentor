import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Logo from "../../components/Logo";
import ButtonSignup from "../../components/ButtonSignup";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";
import { router } from "expo-router";
import { useFormData } from "./formHandler";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleAuth = async () => {
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            router.push("/home");
        }
        catch (error) {
            if (error.code === "auth/invalid-credential") {
                try {
                    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
                    router.push("/signup/name");
                }
                catch (error) {
                    if (error.code === "auth/email-already-in-use") {
                        Alert.alert('Wrong Credentials.', 'Your email or password is incorrect.')
                    }
                    else {
                        console.error("Submission failed : ", error);
                    }
                }
            }
            else {
                console.error("Log in failed : ", error);
            }
        }
    }

    // Check if email and password are filled to enable/disable the button
    const isDisabled = !email || !password; // Disable if either field is empty

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo/>
            </View>
            <View>
                <Text style={styles.heading}>Log in</Text>
                <Text style={styles.text}>Log in to an existing account.</Text>
            </View>
            <View style={{
                height: "74%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <View style={{ paddingTop: "5%" }}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Type your email"
                        onChangeText={setEmail}
                        textContentType="emailAddress"
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Type your password"
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <ButtonSignup isSignUp={false} callback={handleAuth} isDisabled={isDisabled} /> 
                </View>
            </View>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    text: {
        color: "#192126",
        margin: "2%",
        fontFamily: "latoReguler"
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
