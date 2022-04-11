// For more Features to implement in the future.
// Excluded as of now for CS 855 final project submission.

import  React from 'react';
import { StyleSheet, Text, View, Pressable, Image,FlatList } from "react-native";

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.profileArea}>
      <Text 
      style={{fontSize:30,padding:20 }}
      >
        Profile Settings
        </Text>
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileArea: {
    flex: 3,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
});