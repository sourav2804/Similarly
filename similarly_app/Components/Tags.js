// ==============================================================
// This file handles the Tags and its view style.
// ==============================================================

import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Tags= (props)=> {
    return(

        <View style= {styles.tags}>
            <Text >{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
   
    tags:{
    backgroundColor:'#cbd4b2',
    padding:20,
    
    borderRadius:10,
    flexDirection:'row',
    // justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20,
    //marginRight:2,
    flexWrap:'wrap',
    // marginLeft:0
    },          
});

export default Tags;