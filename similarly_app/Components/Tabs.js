// This is the bottom tab nagigator file
// This file is importer into every page on the app
// This file create a bottom tab navigator in the app
// that lets the user navigate between different pages/screens.

import * as React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from './HomeScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'




const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
   
    <Tab.Navigator
      screenOptions={{
        // headerShown:false,
        
        tabBarShowLabel:false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          left: 5,
          right: 5,
          elevation:0 ,
          backgroundColor:"white",
          borderRadius:20,
          height:60,
          
          ...styles.shadow,
        }
      }}
      
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen} options= {{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center',}}>
            <Image 
            source={require ('../assets/Icons/home.png')}
            resizeMode ="contain"
            style= {{
              height:30,
              width:30,
              tintColor : focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style= {{
              color : focused ? '#e32f45' : '#748c94',
              fontSize:12
            }}>Home</Text>
          </View>
        )
      }} />
      <Tab.Screen name='ExploreScreen' component={ExploreScreen} options= {{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center',}}>
            <Image 
            source={require ('../assets/Icons/explore.png')}
            resizeMode ="contain"
            style= {{
              height:30,
              width:30,
              tintColor : focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style= {{
              color : focused ? '#e32f45' : '#748c94',
              fontSize:12
            }}>Explore</Text>
          </View>
        )
      }} />
      {/* <Tab.Screen name='ProfileScreen' component={ProfileScreen} options= {{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center',}}>
            <Image 
            source={require ('../assets/Icons/profile.png')}
            resizeMode ="contain"
            style= {{
              height:30,
              width:30,
              tintColor : focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style= {{
              color : focused ? '#e32f45' : '#748c94',
              fontSize:12
            }}>Profile</Text>
          </View>
        )
      }}/> */}
    </Tab.Navigator>
  );

}


const styles = StyleSheet.create({

  shadow:{
      shadowColor: 'cadetblue',
      shadowOffset:{
        height:10,
        width:0,
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5,
  }
});
