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
    backgroundColor:'green',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
    flexWrap:'wrap',
    marginLeft:0
    },          
});

export default Tags;