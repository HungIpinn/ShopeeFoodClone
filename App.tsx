/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';
import { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const randomInt = (min:number, max:number)=>{
    return Math.floor(Math.random() * (max-min+1)) + min
  }

  const addTodo = (name:string) =>{
    const todo = {id:randomInt(1,1000000), name} as ITodo
    setTodoList([...todoList,todo])
  }

  const deleteTodo = (id:number)=>{
    const filterTodo = todoList.filter(x=>x.id!==id);
     setTodoList(filterTodo)
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style= {styles.container}>
        <InputTodo 
          addTodo={addTodo}
        />
        <ListTodo 
          deleteTodo = {deleteTodo}
          todoList={todoList}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop:100
  }
});

export default App;
