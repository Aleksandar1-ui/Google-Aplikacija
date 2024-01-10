import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigacija from './Aplikacija/Navigacii/TabNavigacija';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigacija/>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
