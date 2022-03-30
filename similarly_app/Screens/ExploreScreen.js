import * as React from 'react';
import { StyleSheet, Text, View, Pressable, Image,FlatList,Button } from "react-native";

export default function ExploreScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.exploreTagArea}>
      
      <FlatList
      numColumns={1}
      data= {'66666666666'}
      renderItem={ ()=> (
      <View>
      <Text style={{fontSize:30,padding:20 }}>
      Explore Tags
      </Text>
      <Button title='delete'
       onPress={()=>{ deleteTag}}
       />
      </View>
      )
    }
      />
      
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
    // alignItems: "center",
    justifyContent: "center",
  },
});

