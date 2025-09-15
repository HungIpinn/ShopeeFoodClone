/* eslint-disable react-hooks/exhaustive-deps */
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import OtpInput from '@/shared/components/Otp'
import { APP_COLOR } from '@/shared/config/ColorConstanst'
import { responsiveFontSize, scale } from '@/shared/helpers/ScaleHelper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { loginUser } from '@/Redux/Slices/Auth/authThunk'
import LoadingOverlay from '@/shared/components/LoadingOverlay'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation/type'

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Otp'
>;

const OtpScreen = () => {
    const dispatch = useAppDispatch();
    const authData = useAppSelector((state) => state.auth);
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    useEffect(()=>{
        if(authData.IsSuccess)
        {
            Keyboard.dismiss();
            navigation.replace('Root', {
            screen: 'Tabs',
            params: { screen: 'Orders' },
            });
        }
    },[authData.IsSuccess])

const OnfilledSucces = (val:string) =>{
    dispatch(loginUser({username:'hung',password:val}))
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'height' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // tuỳ chỉnh
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.textAuth}>Xác thực tài khoản</Text>
                <OtpInput
                inputStyle={styles.input}
                focusStyle={styles.focusStyle}
                numberOfDigits={6}
                onTextChange={(val) => console.log("Đang nhập:", val)}
                onFilled={(val) => OnfilledSucces(val)}
                />
            </View>
            </TouchableWithoutFeedback>   
        </KeyboardAvoidingView>
        <LoadingOverlay visible={authData.loading}/>
    </SafeAreaView>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        marginHorizontal:scale(10),
    },
    input:{
        width:scale(50),
        height:scale(60)
    },
    textAuth:{
        fontSize:responsiveFontSize(20),
        fontWeight:'bold',
    },
    focusStyle:{
        borderColor:APP_COLOR.ORANGE,
        width:scale(50),
        height:scale(60)
    },
})