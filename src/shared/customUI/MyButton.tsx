import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { APP_COLOR } from '@/shared/config/ColorConstanst';

interface IProps{
    title?: string,
    PressableStyle?: StyleProp<ViewStyle>,
    PressableTxtStyle?: StyleProp<TextStyle>,
    icon?: ReactNode
}

const MyButton = (props:IProps) => {
    const {title,PressableStyle,icon,PressableTxtStyle} = props;
    return (
        <Pressable 
            style={({pressed})=>
                [{opacity:pressed===true?0.5:1},
                styles.btnContainer,PressableStyle]}>
            {icon}
            <Text style={[styles.btnText,PressableTxtStyle]}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: APP_COLOR.ORANGE, 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center', 
        //alignSelf:'flex-start',
        flexDirection:'row',
        gap:10
    },
    btnText:{
        fontSize:18,
    }
})
export default MyButton;