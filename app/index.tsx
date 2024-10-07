import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { FIREBASE_AUTH, REALTIME_DB } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { child, get, ref } from "firebase/database";

export default function Index() {
  
  const [user, setUser] = useState(null);
  // does a double check in case that the user has signed up with email, but hasn't filled their bio 
  const doubleCheck = () => {
    let isBioFilled : boolean;
    get(child(ref(REALTIME_DB), `users/${FIREBASE_AUTH.currentUser.uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        isBioFilled = true;
      }
      else {
        isBioFilled = false;
      }
    })
    .catch((error) => {
      console.error("Checking bio error", error);
    })
    return isBioFilled;
  };

  // use this to sign out, cuz there's no sign out button for now

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser(null)
      }
    });

    console.log(user)
    return () => unsubscribe();

    // signOut(FIREBASE_AUTH);
  }, []);

  if (user) {
    if (doubleCheck()) {
      return <Redirect href={"/home"}/>;
    }
    return <Redirect href={"/signup/name"}/>;
  }
  return <Redirect href={"/signup/login"}/>;

}
