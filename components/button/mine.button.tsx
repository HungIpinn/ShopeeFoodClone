import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

interface IProps{
    name:string,
    onPress:()=>void
}

const MineButton = (props:IProps) =>{
    return (
        <Pressable 
            style={({pressed})=>({
                alignSelf:'flex-start',
                opacity:pressed===true?0.5:1
            })}
            onPress={()=>props.onPress()}>
            <View style={styles.btnContainer}>
                <AntDesign name="shoppingcart" size={30} color="green" />
                <Text style={styles.text}>{props.name}</Text>
            </View>
       </Pressable>
    )
}

const styles = StyleSheet.create({
    text:{
        textTransform:'uppercase'
    },
    btnContainer:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'green',
        paddingVertical:5,
        paddingHorizontal:10,
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        alignSelf:'flex-start'
    }
})

export default MineButton;