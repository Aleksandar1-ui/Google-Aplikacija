import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={require('./../../assets/ilina.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}><Text style={styles.boldText}>Име:</Text> Илина</Text>
        <Text style={styles.profileText}><Text style={styles.boldText}>Презиме:</Text> Карапанчевска</Text>
        <Text style={styles.profileText}><Text style={styles.boldText}>Години:</Text> 18</Text>
        <Text style={styles.profileText}><Text style={styles.boldText}>Датум на раѓање:</Text> 01 август, 2005</Text>
        <Text style={styles.profileText}><Text style={styles.boldText}>Место на живеење:</Text> Ресен, Македонија</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily:'raleway'
  },
  boldText: {
    fontFamily:'raleway-bold'
  },
});
