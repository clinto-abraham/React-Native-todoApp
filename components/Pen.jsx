import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NewPage from './NewPage';

export default function Pen () {
    const pencil = "✎";
    const pressHandler = (clicked) => {
        return (<View><NewPage /></View>);
    }
    return (
    <View style={Styles.edit}>
      <TouchableOpacity onPress={() => pressHandler()}>
        <Text style={Styles.pen}>{pencil}</Text>
      </TouchableOpacity>
    </View>
    );
}

const Styles = StyleSheet.create({
    edit:{
        flex: 1,
    },
    pen:{
        color: '#8f4068',
        fontSize: 120,
        paddingHorizontal: 100,
    }
})