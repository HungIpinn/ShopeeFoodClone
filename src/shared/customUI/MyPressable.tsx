import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';

interface IProps {
    title?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
}

const MyPressable = (props:IProps) => {
    const { title, onPress, style, textStyle, disabled } = props;
    return (
    <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
            style,
            pressed && { opacity: 0.6 } 
        ]}
    >
        {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
    </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
});

export default MyPressable;