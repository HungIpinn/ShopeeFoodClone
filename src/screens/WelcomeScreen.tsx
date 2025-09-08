import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { APP_COLOR } from "../shared/config/ColorConstanst";
import MyButton from "../shared/customUI/MyButton";
import bg from '@/assets/auth/BackgroundWelcome.png'
import { responsiveFontSize, scale } from "@/shared/helpers/ScaleHelper";
import LinearGradient from "react-native-linear-gradient";
import MyPressable from "@/shared/customUI/MyPressable";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/type";
import SocailMeidaButton from "@/shared/customUI/SocailMeidaButton";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Welcome'
>;

const WelcomeScreen = () => {
    
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
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
                    <View style={styles.containerBtn}>
                        <SocailMeidaButton
                        TextInLine='Đăng nhập với'
                        />
                        <View style={styles.containerEmailBtn}>
                                        <MyButton 
                                        title="Sign in with Email"
                                        PressableStyle={styles.customPressableEmail}
                                        PressableTxtStyle={styles.customPressableEmailTxt}
                                        />
                                    </View>
                        <View style={styles.containerTextFooter}>
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
    containerBtn:{
            flex: 0.33,
            paddingHorizontal:scale(22),
    },
    containerText:{
        flex: 0.67,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:scale(20),
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
    backgroundImage:{
        flex:1,
    },
    LinearGradient:{
        flex:1
    },
    containerTextFooter:{
        alignItems:'center', 
        marginTop:scale(20), 
        flexDirection:'row', 
        justifyContent:'center', 
        gap:scale(5)
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
    customPressableEmailTxt:{
        color:'white',
        fontSize:responsiveFontSize(15)
    },
})

export default WelcomeScreen