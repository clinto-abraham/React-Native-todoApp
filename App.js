import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import Pen from './components/Pen';


export default function App() {
  
  return (
    <React.Fragment>
    <View style={styles.container}>
      <Header /> 
      <Content />
      <Pen />
      
      <StatusBar style="auto" />
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9b0',
  },
  
});
