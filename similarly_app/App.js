import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.createTagArea}>
        <Text>sim</Text>
      </View>
      <View style={styles.myTagArea}>
        <Text>sim</Text>
      </View>
      <View style={styles.BottomNavigationBar}>
        <View style={styles.navigationButtons}>
          <Pressable style={styles.iconStyle}>
            <Image source={require("./Icons/home.png")} />
          </Pressable>
        </View>
        <View style={styles.navigationButtons}>
          <Pressable style={styles.iconStyle}>
            <Image source={require("./Icons/explore.png")} />
          </Pressable>
        </View>
        <View style={styles.navigationButtons}>
          <Pressable style={styles.iconStyle}>
            <Image source={require("./Icons/profile.png")} />
          </Pressable>
        </View>
      </View>
    </View>

    // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BottomNavigationBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-around",
    alignItems: "center",
  },
  myTagArea: {
    flex: 6,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  createTagArea: {
    flex: 3,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationButtons: {
    flex: 3,
    alignItems: "center",
  },
  iconStyle: {
    // justifyContent:"space-evenly",
    resizeMode: "contain",
  },
});
