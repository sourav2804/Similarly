import * as React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.createTagArea}>
      <Text>Create Tag</Text>
    </View>
    <View style={styles.myTagArea}>
      <Text>My Tags</Text>
    </View>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  myTagArea: {
    flex: 6,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  createTagArea: {
    flex: 3,
    backgroundColor: "lightslategrey",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
