import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Pocetna from '../Ekrani/Pocetna';
import Fav from '../Ekrani/Fav';
import Prebaruvanje from '../Ekrani/Prebaruvanje';
import Profil from '../Ekrani/Profil';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

export default function TabNavigacija() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
        <Tab.Screen name="Pochetna" component={Pocetna}
        options={{
          tabBarLabel:'Почетна',
          tabBarIcon:({boja,golemina}) => (
            <Ionicons name="home" color={boja} size={golemina} />
          ),
        }} />
        <Tab.Screen name="Omileni" component={Fav}
        options={{
          tabBarLabel:'Омилени',
          tabBarIcon:({boja,golemina}) => (
            <Ionicons name="ios-heart" color={boja} size={golemina} />
          ),
        }}
        />
        <Tab.Screen name="Prebaruvanje" component={Prebaruvanje}
        options={{
          tabBarLabel:'Пребарување',
          tabBarIcon:({boja,golemina}) => (
            <Ionicons name="search" color={boja} size={golemina} />
          ),
        }}
        />
        <Tab.Screen name="Profil" component={Profil}
        options={{
          tabBarLabel:'Профил',
          tabBarIcon:({boja,golemina}) => (
            <FontAwesome name="user-circle-o" color={boja} size={golemina} />
          ),
        }}
        />
    </Tab.Navigator>
  )
}