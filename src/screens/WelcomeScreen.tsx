import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { APP_COLOR } from "../shared/config/ColorConstanst";
import MyButton from "../shared/customUI/MyButton";
import bg from '@/assets/auth/BackgroundWelcome.png'
import fb from '@/assets/auth/FB.png'
import gg from '@/assets/auth/Gmail.png'
import { responsiveFontSize, scale } from "@/shared/helpers/ScaleHelper";
import LinearGradient from "react-native-linear-gradient";
import TextBetweenLine from "@/shared/customUI/TextBetweenLine";
import MyPressable from "@/shared/customUI/MyPressable";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return(
        <ImageBackground 
            style={styles.backgroundImage}
            source={bg}
            >
            <LinearGradient
                style={styles.LinearGradient}
                colors={['rgba(0,0,0,0.0)','rgba(92, 92, 92, 0.1)', 'rgba(190, 190, 190, 0.5)']}
                >
                <View style={styles.container}>
                    <View style={styles.containerText}>
                        <Text style={styles.Line1Text}>Welcome to</Text>
                        <Text style={styles.Line2Text}>FoodHub</Text>
                        <Text style={styles.Line3Text}>Your favourite food delivery fast at your door</Text>
                    </View>
                    <TextBetweenLine  
                        ContainerStyle={{paddingHorizontal:scale(50)}}
                        TxtStyle={{fontSize:responsiveFontSize(16), fontWeight:'bold'}}
                        title="Đăng nhập với"
                        />
                    <View style={styles.containerBtn}>
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
                        <View style={styles.containerEmailBtn}>
                            <MyButton 
                            title="Sign in with Email"
                            PressableStyle={styles.customPressableEmail}
                            PressableTxtStyle={styles.customPressableEmailTxt}
                            />
                        </View>
                        <View style={{alignItems:'center', marginTop:scale(20), flexDirection:'row', justifyContent:'center', gap:scale(5)}}>
                            <Text>Chưa có tài khoản?</Text>
                            <MyPressable
                                onPress={(() => navigation.navigate('SignUp'))}
                                title="Đăng ký"
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerText:{
        flex: 0.67,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:scale(20),
    },
    containerBtn:{
        flex: 0.33,
        paddingHorizontal:scale(22),
    },
    containerRowBtn:{
        flexDirection:'row',
        gap:scale(30),
        justifyContent:'center'
    },
    Line1Text:{
        fontSize:responsiveFontSize(60),
        fontWeight:'bold'
    },
    Line2Text:{
        fontSize:responsiveFontSize(60),
        fontWeight:'bold',
        color:APP_COLOR.ORANGE,
    },
    Line3Text:{
        fontSize:responsiveFontSize(26),
    },
    customPressable:{
        marginVertical:scale(20),
        backgroundColor:'white',
        borderRadius:15
    },
    containerEmailBtn:{
        marginHorizontal:scale(25)
    },
    customPressableEmail: {
        paddingHorizontal: scale(30),
        alignSelf: 'stretch',
        backgroundColor:'black',
        justifyContent:'center',
        borderRadius:15,
        borderWidth:scale(2),
        borderColor:'#ccc'
    },
    customPressableTxt:{
        textTransform:'uppercase',
        fontSize:responsiveFontSize(15)
    },
    customPressableEmailTxt:{
        color:'white',
        fontSize:responsiveFontSize(15)
    },
    backgroundImage:{
        flex:1,
    },
    LinearGradient:{
        flex:1
    }
})

export default WelcomeScreen