import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { FIREBASE_AUTH, REALTIME_DB } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { child, get, ref } from "firebase/database";

export default function Index() {
  const [user, setUser] = useState(null);
  const [isBioFilled, setBioFilled] = useState(false);
  const [loading, setLoading] = useState(true);

  // does a double check in case that the user has signed up with email, but hasn't filled their bio 
  const doubleCheck = async () => {
    try {
      const snapshot = await get(child(ref(REALTIME_DB), `users/${FIREBASE_AUTH.currentUser.uid}`));
      if (snapshot.exists()) {
        setBioFilled(true);
      } else {
        setBioFilled(false);
      }
    } catch (error) {
      console.error("Checking bio error", error);
    }
    return isBioFilled;
  };

  // use this to sign out, cuz there's no sign out button for now
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
      else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
    // signOut(FIREBASE_AUTH);
  }, []);

  if (loading) {
    return <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}><ActivityIndicator size={"large"} color={"#696868"}/></View>
  }
  if (user) {
    if (doubleCheck()) {
      return <Redirect href={"/home"}/>;
    }
    return <Redirect href={"/signup/name"}/>;
  }
  return <Redirect href={"/signup/login"}/>;
}
