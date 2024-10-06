const { View, Text, StyleSheet, ActivityIndicator } = require("react-native");
import { router } from "expo-router";
import Logo from "../../components/Logo";
import { useFormData } from "./formHandler";
import { useEffect } from "react";
import { FIREBASE_AUTH, REALTIME_DB } from "../../firebase";
import { ref, set } from "firebase/database";


const done = () => {
    const { data } = useFormData();
    
    useEffect(() => {
      const UploadData = async () => {
        try {
          await set(ref(REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser.uid), data);

          console.log("Submission success.")
          router.push("/home");
        }
        catch (error) {
          console.error("Submission failed : ", error)
        }
      };

      UploadData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo/>
            </View>
            <View>
                <Text style={styles.heading}>Done!</Text>
                <Text>Sit back and relax while we're making a personalized plan for you. Thank you!</Text>
            </View>
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} color={"#696868"}/>
            </View>
        </View>
    );
};

export default done;

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
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "65%"
    }
  });