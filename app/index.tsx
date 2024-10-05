import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../firebase";

export default function Index() {
  // const [user, setUser] = useState(false);
  
  // useEffect(() => {
  //   if (FIREBASE_AUTH.currentUser) {
  //     setUser(true);
  //   }
  // }, []);
  
  return (
    <Redirect href={"/signup/login"} />
  );
}
