import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Pen from './Pen';

export default function NewPage (){
    return (
        <View>
            <Header />
            <Pen />
        </View>
    )
}