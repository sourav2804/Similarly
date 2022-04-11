// ========================================================================
   // In this file I implemented a textinput section 
   // where the user can type in the Tags they want to create 
   // and upon tapping the Create Tag button the Tag data will be 
   // saved in the firebase database and the user will be prompted with an 
  // alert that will give a feedback about successfull Tag Creation.
// ========================================================================


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
  Alert,
  ImageBackground,
} from "react-native";

import { getDatabase, onValue, ref, set } from "firebase/database";
import db from "../Firebase/firebase";
import Tags from "./Tags";
// ==============================================================
// This function contains several views that displays 
// the text input section and Create Tag button.
// This file is also connected to bottom tab navigator
// that navigates between different screens
// ==============================================================
export default function HomeScreen({ navigation }) {
  const [tags, setTags] = useState();
  const [tagItems, setTagItems] = useState([]);
  var count;
// ======================================================================
// This fucntion appends new tags to the tagItems array and also 
// store the new data to database by calling writeTagToDatabase function.
// ======================================================================
  const handelAddTags = () => {
    if (tags != null) {
      setTagItems([...tagItems, tags]);
      writeTagToDatabase(tags);
      setTags(null);
      showAlert();
    }
  };
// ========================================================
// This fucntion adds new tags to  the firebase database 
// ========================================================
  function writeTagToDatabase(tags) {
    const tagTableRef = ref(db, "/tagTable/");
    let length = 0;
// ==============================================================
    // Firebase function that allows to 
    // get hold of a value in the database table.
// ==============================================================
    onValue(tagTableRef, (snapshot) => {
      const data = snapshot.val();
      length = data.length;

      console.log("length", length);
      console.log("Data", data);
    });
    // console.log('path','tagTable/'+length);

// ==============================================================
   // Firebase function that allows to change
   //  a database value at a particular path.
// ==============================================================
    set(ref(db, "tagTable/" + length), {
      tagItem: tags,
      tagId: length,
      upVoteCount: 0,
    });
    // console.log('its working here')
  }

  // const removeTags = (index) => {
  //   let tagItemsCopy = [...tagItems];
  //   tagItemsCopy.splice(index, 1);
  //   setTagItems(tagItemsCopy);
  // };

// ==============================================================
   // showAlert shows a alert message to the user with an 
   // Ok button to dismiss the alert.
// ==============================================================
  const showAlert = () =>
    Alert.alert("Tag Created", "View Explore Page to see Tags", [
      { text: "OK" },
    ]);

  return (
    // This is the whole container of the homescreen
    <View style={styles.container}>

<ImageBackground
  source={require("../assets/wallpaper/explore.jpg")}
  resizeMode="cover" 
  style={styles.createTagArea}
>   
      {/* This is the CreateTag area in HomeScreen */}

      {/* <View style={styles.createTagArea}> */}
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
            <Text style={{fontWeight:"bold",color:'black',alignSelf:'center'}}> CREATE TAG</Text>
          </View>
        </TouchableOpacity>

      </ImageBackground>

      {/* </View> */}
      

      {/* This is the myTagArea section in homescreen */}

      {/* <View style={styles.myTagArea}>
        <Text style={styles.sectionTitle}>My Tags</Text> */}
      {/* <View style={styles.tagStyle}> */}
      {/* This is where the tasks will go */}

      {/* {tagItems.map((item, index) => {
            return ( */}

      {/* <FlatList
            style={styles.tagStyle}
            data={tagItems}
            keyExtractor={(item)=> item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Tags text={item} /> */}
      {/* <TouchableOpacity  onPress={() => removeTags()}>
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
            )} */}
      {/* /> */}
      {/* //   ); */}
      {/* // })} */}
      {/* </View> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  myTagArea: {
    flex: 4,
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
    backgroundColor: "#d4fae7",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignContent:"center",
    alignSelf:"center",
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
    //margin:10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  createTagArea: {
    flex: 3,
    //backgroundColor: "lightslategrey",
    paddingBottom: 10,
    justifyContent: "center",
  },

  tagStyle: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
