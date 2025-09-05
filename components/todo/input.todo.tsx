import MineButton from "../button/mine.button";
import { useState } from "react";
import {TextInput, View,Button, StyleSheet, Alert } from "react-native";


interface IProps  {
    addTodo :(v:string) => void;
}

const InputTodo = (props: IProps) => {
    const {addTodo} = props;
    const [name, setName] = useState<string>('');
    const handleClickMe = ()=>{
        if(!name){
            Alert.alert('emty');
            return;
        }
        addTodo(name);
        setName('');
    }
    return (
    <View>
            <TextInput 
            value = {name}
            onChangeText={e => {setName(e); console.log(e);}}
            autoCapitalize = "none"
            maxLength={12}
            autoCorrect = {false}
            style = {styles.todoList}/>
            <MineButton name='hello' onPress={(handleClickMe)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todoList:{
        borderColor :'violet',
        borderWidth : 1,
        padding: 10,
        borderRadius: 5,
        marginBottom:20
    }
})

export default InputTodo;