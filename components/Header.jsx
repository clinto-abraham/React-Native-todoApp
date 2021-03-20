import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (<View>
      <Text style={styles.header}> To Do List </Text>
    </View>);
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'coral',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        justifyContent: 'center',
        padding:28,
        width: '100%',
        alignItems: 'center',
      },

})