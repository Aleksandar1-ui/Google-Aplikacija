import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigacija from './Aplikacija/Navigacii/TabNavigacija';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { KontekstZaLokacijaNaKosrisnik } from './Aplikacija/Kontekst/KontekstZaLokacijaNaKorisnik';

export default function App() {
  const [lokacija, setLokacija] = useState(null);
  const [porakaZaGreshka, setPorakaZaGreshka] = useState(null);
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
        setPorakaZaGreshka('Дозвола за пристап до локациите е забранета');
        return;
      }
      let lokacija = await Location.getCurrentPositionAsync({});
      setLokacija(lokacija);
      console.log(lokacija)
    })();
  },[]);
  return (
    <View style={styles.container}>
      <KontekstZaLokacijaNaKosrisnik.Provider value={{lokacija,setLokacija}}>
        <NavigationContainer>
          <TabNavigacija/>
        </NavigationContainer>
      </KontekstZaLokacijaNaKosrisnik.Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
