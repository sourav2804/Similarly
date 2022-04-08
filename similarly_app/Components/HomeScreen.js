import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  FlatList,
  keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { getDatabase, onValue,ref, set } from "firebase/database";
import db from '../Firebase/firebase';
import Tags from "./Tags";



export default function HomeScreen({ navigation }) {
  const [tags, setTags] = useState();
  const [tagItems, setTagItems] = useState([]);
  var count;
  const handelAddTags = () => {
    if(tags!=null){
    setTagItems([...tagItems, tags]);
    writeTagToDatabase(tags);
    setTags(null);
    }
  };
  function writeTagToDatabase(tags) {
    //const tagItemRef = ref(db, "/");
    const tagTableRef = ref(db, "/tagTable/");
    let length=0 ;
    onValue(tagTableRef, (snapshot) => {
      const data = snapshot.val();
      length = data.length;

      console.log('length',length);

      
    });
    console.log('path','tagTable/'+length);
  
      set(ref(db, 'tagTable/'+length), {
        'tagItem':tags
      });
    // console.log('its working here')
  }

  const removeTags = (index) => {
    let tagItemsCopy = [...tagItems];
    tagItemsCopy.splice(index, 1);
    setTagItems(tagItemsCopy);
  };
  return (
    // This is the whole container of the homescreen
    <View style={styles.container}>
      {/* This is the CreateTag area in HomeScreen */}

      <View style={styles.createTagArea}>
        <TextInput
          style={styles.input}
          placeholder="Eg: Take a Walk "
          value={tags}
          onChangeText={(inputText) => {
            setTags(inputText);
          }}
        />

        <TouchableOpacity onPress={() => handelAddTags()}>
          <View style={styles.createWrapper}>
            <Text> CREATE TAG</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* This is the myTagArea section in homescreen */}

      <View style={styles.myTagArea}>
        <Text style={styles.sectionTitle}>My Tags</Text>
        {/* <View style={styles.tagStyle}> */}
          {/* This is where the tasks will go */}

          {/* {tagItems.map((item, index) => {
            return ( */}

          <FlatList
            style={styles.tagStyle}
            data={tagItems}
            keyExtractor={(item)=> item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Tags text={item} />
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
          {/* //   ); */}
          {/* // })} */}
        {/* </View> */}
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

  tagStyle: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 10,
    alignSelf:'center'
  },
});
