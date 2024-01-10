import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Boi from '../../Spodeleni/Boi'

export default function Zaglavie() {
  return (
    <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',gap:10,alignItems:'center'}}>
      <Image source ={require('./../../../assets/logo.png')} style={stilovi.logo} />
      <View>
        <TextInput placeholder='Prebaruvanje' style={stilovi.prebaraj}/>
      </View>
      <Image source={require('./../../../assets/mesto.jpg')} style={stilovi.slikaKorisnik}/>
    </View>
  )
}
const stilovi = StyleSheet.create({
    logo:{
        width:50,
        height:50
    },
    prebaraj:{
        borderWidth:1,
        borderColor:Boi.crna,
        padding:4,
        borderRadius:50,
        paddingLeft:10,
        width:Dimensions.get('screen').width*0.6
    },
    slikaKorisnik:{
        width:50,
        height:50,
        borderRadius:100
    }
})