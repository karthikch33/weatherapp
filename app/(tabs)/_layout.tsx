import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.primary
    }}>
        <Tabs.Screen name='home' 
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({color="skyblue"})=><Entypo name="home" size={24} color="skyblue" />
        }}
        />
        <Tabs.Screen name='explore'
        options={{
            tabBarLabel:"Explore",
            tabBarIcon:({color="skyblue"})=><MaterialIcons name="explore" size={24} color="skyblue" />
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            tabBarLabel:"Profile",
            tabBarIcon:({color="skyblue"})=><AntDesign name="profile" size={24} color="skyblue" />
        }}
        />
    </Tabs>
  )
}