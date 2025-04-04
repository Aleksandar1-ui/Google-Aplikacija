import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
export default function TabNavigation() {
    const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeNavigation} 
      options={{
        tabBarLabel: 'Почетна',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search}
       options={{
        tabBarLabel: 'Пребарај',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Fav" component={Fav}
       options={{
        tabBarLabel: 'Омилени',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        tabBarLabel: 'Профил',
        tabBarIcon: ({ color, size }) => (
          
          <FontAwesome name="user-circle-o" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  )
}