import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MyTextInput from '@/shared/customUI/MyTextInput';
import { responsiveFontSize, scale } from '@/shared/helpers/ScaleHelper';
import SocailMeidaButton from '@/shared/customUI/SocailMeidaButton';
import MyButton from '@/shared/customUI/MyButton';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { loginUser, TestJson } from '@/Redux/Slices/Auth/authThunk';
import { logout } from '@/Redux/Slices/Auth/authSlice';

const SignUpScreen = () => {
    const dispatch = useAppDispatch();
    const authData = useAppSelector((state) => state.auth);
    console.log("<<<<< Hung Log:", authData);
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.txtRegister}>Đăng ký tài khoản</Text>
                <MyTextInput 
                title='Họ tên'
                />
                <MyTextInput 
                title='Email'
                />
                <MyTextInput 
                secureTextEntry={true}
                title='Password'
                />
                <MyButton
                PressableStyle={styles.btnRegister}
                title='Đăng ký'
                PressableTxtStyle={styles.txtResiger}
                onPress={() => dispatch(loginUser({ username: 'hung', password: '123' }))} 
                />
                <MyButton
                PressableStyle={styles.btnRegister}
                title='Đăng xuất'
                PressableTxtStyle={styles.txtResiger}
                onPress={() => dispatch(TestJson({ username: 'foo', password: 'bar', id: 1 }))}
                />
                <SocailMeidaButton
                TextInLine='Đăng ký với'
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        gap:scale(15),
        marginHorizontal:scale(10),
    },
    txtRegister:{
        fontSize:responsiveFontSize(24),
        fontWeight:'bold',
        marginTop:scale(20)
    },
    btnRegister:{
        marginHorizontal:scale(40),
        borderRadius:15,
        justifyContent:'center',
        marginVertical:scale(20)
    },
    txtResiger:{
        fontSize:responsiveFontSize(16),
        fontWeight:'bold',
        color:'white'
    }
})

export default SignUpScreen