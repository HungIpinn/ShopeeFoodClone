import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { scale } from "@/shared/helpers/ScaleHelper";

interface IProps{
    title?: string,
    LineStyle?: StyleProp<ViewStyle>,
    TxtStyle?: StyleProp<TextStyle>,
    ContainerStyle?: StyleProp<ViewStyle>,
}

const TextBetweenLine = (props:IProps) => {
    const {title,LineStyle,TxtStyle,ContainerStyle} = props;
    return (
        <View style={[styles.container,ContainerStyle]}>
            <View style={[styles.Line,LineStyle]}/>
            <Text style={[styles.text,TxtStyle]}>
                {title}
            </Text>
            <View style={[styles.Line,LineStyle]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Line: {
        flex: 1,                 // line tự giãn
        height: scale(1),
        backgroundColor: 'black',
    },
    text: {
        fontSize: scale(16),
        color: 'black',
        marginHorizontal: scale(10), // khoảng cách giữa line và text
    },
});

export default TextBetweenLine