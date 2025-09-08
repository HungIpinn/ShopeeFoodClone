import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { APP_COLOR } from '@/shared/config/ColorConstanst';
import { responsiveFontSize, scale } from "@/shared/helpers/ScaleHelper";

interface IProps{
    title?: string,
    PressableStyle?: StyleProp<ViewStyle>,
    PressableTxtStyle?: StyleProp<TextStyle>,
    icon?: ReactNode,
    onPress?: () => void,  
}

const MyButton = (props:IProps) => {
    const {title,PressableStyle,icon,PressableTxtStyle,onPress} = props;
    return (
        <Pressable 
            onPress={onPress}
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
        padding: scale(10), 
        borderRadius: 5, 
        alignItems: 'center', 
        //alignSelf:'flex-start',
        flexDirection:'row',
        gap:scale(10)
    },
    btnText:{
        fontSize:responsiveFontSize(16),
    }
})
export default MyButton;