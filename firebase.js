// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvdsiuA6H0_1oYNRYyfMQTiDZubRgAnpE",
  authDomain: "healthmentor-test.firebaseapp.com",
  databaseURL: "https://healthmentor-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthmentor-test",
  storageBucket: "healthmentor-test.appspot.com",
  messagingSenderId: "110878155204",
  appId: "1:110878155204:web:740813341de0a73c628491"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const REALTIME_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});