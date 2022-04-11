// In this file I fetch the stored tag data from firebase
// and display it in a flatlist view within explore screen
// ==============================================================

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import db from "../Firebase/firebase";
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
  ImageBackground,
} from "react-native";

import Tags from "./Tags";

// ==============================================================
// This is the  default function of this file
// which contains a flatlist view that displays all
// the user tags fetched from database.
// This file is also connected to bottom tab navigator
// that navigates between different screens
// ==============================================================

export default function ExploreScreen({ navigation }) {
  const [tagItems, setTagItems] = useState([]);

  const tagTableRef = ref(db, "/tagTable/");

  // ==============================================================
  // useEffect hook was used to execute
  // the code inside only when the app renders
  // ==============================================================
  useEffect(() => {
    onValue(tagTableRef, (snapshot) => {
      const data = snapshot.val();
      // setTagItems([...tagItems, data]);
      setTagItems(data);

      //console.log(data);
    });
  }, []);

  let upVotePressed = false;

// ==============================================================
   // upVote function was used to keep track of 
   // the UpVote counts on a particular tag.
   // Everytime this function is called, 
   // the upvote count of a particular tag gets updated.
// ==============================================================

  const upVote = (tagId, tagItem) => {
    //console.log('upVotePressed before',upVotePressed)
    upVotePressed = !upVotePressed;
    //console.log('upVotePressed after',upVotePressed)
    let upVoteCount;

    const tagTableRef = ref(db, "/tagTable/" + tagId + "/upVoteCount");
    //let length=0 ;

// ==============================================================
    // Firebase function that allows to 
    // get hold of a value in the database table.
// ==============================================================
    onValue(tagTableRef, (snapshot) => {
      // const data = snapshot.val();
      upVoteCount = snapshot.val();
      //length = data.length;
      // console.log('length',length);
      console.log("upVoteCount", upVoteCount);
      //upVoteCount=data;
    });
    if (upVotePressed) {
      upVoteCount++;
    } else {
      upVoteCount--;
    }

    //console.log(upVoteCount, "upVoteCount after snap");

// ==============================================================
   // Firebase function that allows to change
   //  a database value at a particular path.
// ==============================================================
    set(ref(db, "tagTable/" + tagId), {
      tagItem: tagItem,
      tagId: tagId,
      upVoteCount: upVoteCount,
    });
  };

// ==========================================================================
   // This function is used to fetch the UpVote count of a particular tag 
   //and render it in a view so the user can see the UpVote count of any Tags
// ==========================================================================
  const showUpVote = (tagId) => {
    const tagTableRef = ref(db, "/tagTable/" + tagId + "/upVoteCount");
    let count;
    onValue(tagTableRef, (snapshot) => {
      count = snapshot.val();
    });

    return (
      <View style={styles.showUpVote}>
        <Text style={styles.showUpVoteText}>❤️ {count}</Text>
      </View>
    );
  };

  let count = 0;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/wallpaper/explore.jpg")}
        resizeMode="cover"
        style={styles.exploreTagArea}
      >
        {/* <View style={styles.exploreTagArea}> */}

        <FlatList
          style={styles.tagStyle}
          data={tagItems}
          //numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Tags text={item.tagItem} />
              <TouchableOpacity
                onPress={() => upVote(item.tagId, item.tagItem)}
              >
                {/* <Image
                    source={require("../assets/Icons/delete.png")}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      marginBottom: 20,
                      marginTop: 10,
                    }}
                  /> */}
                {showUpVote(item.tagId)}
              </TouchableOpacity>
            </View>
          )}
        />
      </ImageBackground>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  exploreTagArea: {
    // flex: 3,
    // backgroundColor: "lightsteelblue",
    // // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 70,
    flex: 3,
    //backgroundColor: "lightslategrey",
    paddingBottom: 70,
    justifyContent: "center",
  },
  tagStyle: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 10,
    alignSelf: "center",
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    marginTop: 2,
  },
  showUpVote: {
    height: 40,
    width: 40,
    marginBottom: 20,
    marginTop: 10,
  },
  showUpVoteText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingRight: 2,
    marginRight: 2,
    marginBottom: 2,
    marginTop: 2,
    color: "white",
  },
});
