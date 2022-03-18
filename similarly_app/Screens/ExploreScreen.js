import * as React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function ExploreScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.exploreTagArea}>
      <Text style={{fontSize:30,padding:20 }}>
        Explore Tags
        </Text>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  exploreTagArea: {
    flex: 3,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

