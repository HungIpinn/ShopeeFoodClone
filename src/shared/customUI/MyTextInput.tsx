import { View, TextInput, StyleSheet, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { APP_COLOR } from '@/shared/config/ColorConstanst';
import { responsiveFontSize, scale } from '@/shared/helpers/ScaleHelper';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    title:string,
    placeholder?:string,
    secureTextEntry?:boolean,
    keyboardType?: 'default' | 'email-address' | 'numeric'  | 'phone-pad',
    textInputStyle?:StyleProp<TextStyle>,
    textInputFocusStyle?:StyleProp<TextStyle>,
}

const MyTextInput = (props:IProps) => {
    const {title, placeholder, secureTextEntry=false, keyboardType='default', textInputStyle, textInputFocusStyle} = props;
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const [isSelected, setIsSelected] = React.useState<boolean>(false);
    return (
        <View >
            <Text style={styles.text}>{title}</Text>
            <View style={[styles.inputWrapper,isFocused&&{borderColor:APP_COLOR.ORANGE}]}>
                <TextInput 
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry && !isSelected}
                style={styles.input}
                onBlur={()=>{
                    setIsFocused(false)
                }}
                onFocus={()=>setIsFocused(true)}
                />
                {secureTextEntry &&
                    <Ionicons 
                    name={isSelected?'eye':'eye-off'}
                    size={scale(20)} 
                    style={styles.icon}
                    onPress={()=>{
                        setIsSelected(!isSelected)
                    }}
                    />
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingVertical: scale(10),
        height:scale(40),
    },
    text:{
        fontSize:responsiveFontSize(16),
        fontWeight:'medium',
        marginBottom:scale(5),  
    },
    eye:{
        position:'absolute',
        right:scale(5),
        top:scale(9),
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: scale(10),
    },
    icon: {
        marginLeft: scale(8),
    },
})

export default MyTextInput