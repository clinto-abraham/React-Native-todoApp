import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback,Keyboard, View } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import Pen from './components/Pen';


export default function App() {
  
  return (
    <React.Fragment>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed');
    }}>
    <View style={styles.container}>
      <Header /> 
      <Content />
      <Pen />
      
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9b0',
  },
  
});
