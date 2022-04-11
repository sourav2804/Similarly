// This the the Firebase database file.
// In this file I am configuring firebase 
// and fetching realtime database refference

import { initializeApp } from "firebase/app";
import { getDatabase, ref,set, onValue, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  Button,
} from "react-native";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc_vqMgBw3HLGjWR8XdW3bGFenPxXNXCA",
  authDomain: "similarly-7dae7.firebaseapp.com",
  projectId: "similarly-7dae7",
  storageBucket: "similarly-7dae7.appspot.com",
  messagingSenderId: "507810508489",
  appId: "1:507810508489:web:c868dfaa4deb4906ff2718",
  measurementId: "G-DHVY0MMK0E",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

export default db;