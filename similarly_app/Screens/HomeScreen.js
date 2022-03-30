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
import Tags from "../component/Tags";

export default function HomeScreen({ navigation }) {
  const [tags, setTags] = useState();
  const [tagItems, setTagItems] = useState([]);

  const handelAddTags = () => {
    setTagItems([...tagItems, tags]);
    setTags(null);
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
        <View style={styles.tagStyle}>
          {/* This is where the tasks will go */}

          {tagItems.map((item, index) => {
            return <Tags key={index} text={item} />;
          })}
        </View>
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
  },
  createTagArea: {
    flex: 3,
    backgroundColor: "lightslategrey",
  },

  tagStyle: {
    paddingTop: 40,
    paddingHorizontal: 20,
    marginTop: 1,
  },
});
