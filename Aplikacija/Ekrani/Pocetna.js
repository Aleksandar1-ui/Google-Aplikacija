import { View, Text } from 'react-native'
import React from 'react'
import Zaglavie from '../Komponenti/Pocetna/Zaglavie'
import GoogleMapPogled from '../Komponenti/Pocetna/GoogleMapPogled'

export default function Pocetna() {
  return (
    <View style={{padding:20}}>
      <Zaglavie/>
      <GoogleMapPogled/>
    </View>
  )
}