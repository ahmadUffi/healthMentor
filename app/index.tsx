import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      {/* {user ? <Redirect href={"/home"}/> : <Redirect href={"/signup/login"}/>} */}
      <Redirect href={"/schedule"} />
      {/* Mocking the user for demonstration purposes */}
    </View>
  );
}
