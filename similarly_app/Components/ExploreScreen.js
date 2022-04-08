import { initializeApp } from "firebase/app";
import { getDatabase, ref,set, onValue, get, child } from "firebase/database";
import db from '../Firebase/firebase';
import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

import Tags from "./Tags";

export default function ExploreScreen({ navigation }) {
  const [tagItems, setTagItems] = useState([]);

 
  const tagTableRef = ref(db, "/tagTable/");
 
   useEffect (()=>{
    onValue(tagTableRef, (snapshot) => {
      const data = snapshot.val();
      // setTagItems([...tagItems, data]);
      setTagItems( data);

      console.log(data);
    });
  },[]);
 
//  console.log(tagItems);

  return (
    <View style={styles.container}>
      <View style={styles.exploreTagArea}>

      <FlatList
            style={styles.tagStyle}
            data={tagItems}
            keyExtractor={(item)=> item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Tags text={item.tagItem} />
                <TouchableOpacity  onPress={() => removeTags()}>
                  <Image
                    source={require("../assets/Icons/delete.png")}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      marginBottom: 20,
                      marginTop: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
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
  tagStyle: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 10,
    alignSelf:'center'
  },


  myTagArea: {
    flex: 6,
    backgroundColor: "lightsteelblue",
    marginBottom: 70,
  },

  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "powderblue",
    borderWidth: 1,
  },
  createWrapper: {
    backgroundColor: "lightblue",
    height: 40,
    width: 87,
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 140,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  createTagArea: {
    flex: 2,
    backgroundColor: "lightslategrey",
  },

 

});
