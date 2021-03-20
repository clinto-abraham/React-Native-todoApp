import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddToDo({submit}){
    const [text, settext] = useState('');

    const changeHandler = (val) => {
        settext(val);
    };

    return (
        <View>
            <TextInput 
              style={Styles.input}
              placeholder='Add your notes here..' 
              onChangeText={changeHandler}
            />
            <Button 
              title='add notes' 
              color='coral' 
              onPress={()=> submit(text)} />   

        </View> //()=> submitHandler(state)
    );
}

const Styles = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderColor: '#ddd',
        color: '#ef8d32',
        padding: 10,
        margin: 25,
        paddingVertical: 6,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

// const submitHandler = () => {
    //     // console.log(state);
    //     // setstate(state);
    // };