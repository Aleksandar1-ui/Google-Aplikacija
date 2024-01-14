import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { KontekstZaLokacijaNaKosrisnik } from '../../Kontekst/KontekstZaLokacijaNaKorisnik';

export default function GoogleMapPogled() {
    const[mapRegion, setmapRegion] = useState([]);
    const {lokacija,setLokacija} = useContext(KontekstZaLokacijaNaKosrisnik)

    useEffect(() => {
        if(lokacija)
        {
            setmapRegion({
                latitude: lokacija.coords.latitude,
                longtitude: lokacija.coords.longtitude,
                latitudeDelta: 0.0522,
                longtitudeDelta: 0.0421,
            })
        }
    },[])
   
  return (
    <View style={{marginTop:20}}>
        <Text style={{fontSize:20, marginBottom:10, fontWeight:"600"}}>
            Места во близина
        </Text>
        <View style={{borderRadius:20, overflow:'hidden'}}>
            <MapView style={{
             width:Dimensions.get('screen').width*0.89,
             height:Dimensions.get('screen').height*0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region = {mapRegion}
            >
            </MapView>
        </View>
    </View>
  )
}