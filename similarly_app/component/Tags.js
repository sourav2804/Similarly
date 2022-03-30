import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Tags= (props)=> {
    return(

        <View style= {styles.tags}>
            <View style={styles.itemLeft}>
            <Text style={styles.tagText}>{props.text}</Text>
            </View>
            <View style={styles.deleteButton}></View>
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
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        marginLeft:10
    },
    deleteButton:{
        width:22,
        height:22,
        borderColor:'powderblue',
        borderWidth:2,
        borderRadius:5,
    },
    tagText:{
        maxWidth:"90%",
    },
   
            
});

export default Tags;