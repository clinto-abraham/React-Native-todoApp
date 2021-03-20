import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AddToDo from './addToDo';

export default function Content ({onPress}) {
    const [list, setList] = useState([
        {name:'To make coffee', key:'1'},
        {name:'To read newspaper', key:'2'},
        {name:'To eat chocolates', key:'3'},
        ]);


    const submitHandler = (text) => {
          
        setList((prevToDos)=> {
            return [
              { 
                name: text, 
                key: Math.random().toString()
              },
              ...prevToDos
            ];
        });
    };

    const longPressHandler = (key) => {
      console.log(key);
      setList((pressed)=> {
        return pressed.filter(item => item.key === key);
      });
    };

    const pressHandler = (key) => {
      console.log(key);
      return setList((list) => {  
         return list.filter(item => item.key !== key);       // it deletes the component clicked
        });
    };       // this function passes useState to another file as props (onPress)

    return ( 
    <View>
     <AddToDo 
        submit={submitHandler} 
     /> 

     <View >
      <FlatList 
        keyExtractor={(item) => (item.id)}
        data={list} 
        renderItem={ ({item}) => (
            <TouchableOpacity 
              key={list.key}
              onPress={()=> pressHandler(item.key)} 
              onLongPress={() => longPressHandler(item.key)}>
                <Text 
                  key={list.key} 
                  style={styles1.container}
                > {item.name}</Text> 
            </TouchableOpacity>
        )}
      /> 
     </View>

    </View>
    );
}

const styles1 = StyleSheet.create({
    container : {
        flex: 3,
        backgroundColor: '#fff9b0',
        color: '#ffab73',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        padding:20,
        borderColor: '#a7c5eb',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 2,
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 24,
      },

});

// setList(prevValue => {
          //        return !prevValue;
          //      });              
          // inside submitHandler()