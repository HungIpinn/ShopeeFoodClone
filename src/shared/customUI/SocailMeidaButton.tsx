import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import TextBetweenLine from '@/shared/customUI/TextBetweenLine'
import { responsiveFontSize, scale } from '@/shared/helpers/ScaleHelper'
import MyButton from '@/shared/customUI/MyButton'
import fb from '@/assets/auth/FB.png'
import gg from '@/assets/auth/Gmail.png'

const SocailMeidaButton = () => {
  return (
    <View>
        <TextBetweenLine  
        ContainerStyle={{paddingHorizontal:scale(50)}}
        TxtStyle={{fontSize:responsiveFontSize(16), fontWeight:'bold'}}
        title="Đăng nhập với"
        />
        <View>
            <View style={styles.containerRowBtn}>
                <MyButton 
                title="Google"
                icon={<Image source={gg} style={{width:scale(25),height:scale(25)}}/>}
                PressableStyle={[styles.customPressable,{paddingHorizontal:scale(15)}]}
                PressableTxtStyle={styles.customPressableTxt}
                />
                <MyButton 
                title="Facebook"
                icon={<Image source={fb} style={{width:scale(24),height:scale(24)}} />}
                PressableStyle={styles.customPressable}
                PressableTxtStyle={styles.customPressableTxt}
                />
            </View>
        </View>
    </View>
  )
}

export default SocailMeidaButton

const styles = StyleSheet.create({
    containerRowBtn:{
        flexDirection:'row',
        gap:scale(30),
        justifyContent:'center'
    },
    customPressable:{
        marginVertical:scale(20),
        backgroundColor:'white',
        borderRadius:15
    },
    customPressableTxt:{
        textTransform:'uppercase',
        fontSize:responsiveFontSize(15)
    },
})