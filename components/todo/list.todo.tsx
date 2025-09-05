import { Alert, FlatList, StyleSheet,Text,TouchableOpacity,View } from "react-native";

interface IProps{
    todoList: ITodo[];
    deleteTodo: (id:number)=>void;
}

const ListTodo = (props:IProps) => {
    const {todoList,deleteTodo} = props;
    const handleDeleteToto = (id:number)=>{
        deleteTodo(id)
    }
    return (
        <View>
            <FlatList
            style={styles.flatListTodo}
            data = {todoList}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity style={styles.todo} onPress={()=>handleDeleteToto(item.id)}>
                        <Text >{item.name}</Text>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    todo:{
        fontSize:30,
        backgroundColor:'pink',
        marginBottom:20,
        padding:10
    },
    flatListTodo:{
        marginTop:20,
        borderColor:'red',
        borderWidth:1
    }
})
export default ListTodo;