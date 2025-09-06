import { StyleSheet, Text, View } from "react-native"
import { APP_COLOR } from "../shared/config/ColorConstanst";
import MyButton from "../shared/customUI/MyButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";


const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.Line1Text}>Welcome to</Text>
                <Text style={styles.Line2Text}>FoodHub</Text>
                <Text style={styles.Line3Text}>Your favourite food delivery fast at your door</Text>
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.containerRowBtn}>
                    <MyButton 
                    title="Google"
                    icon={<AntDesign name="google" size={24} color="black" />}
                    PressableStyle={styles.customPressable}
                    PressableTxtStyle={styles.customPressableTxt}
                    />
                    <MyButton 
                    title="Facebook"
                    icon={<Entypo name="facebook" size={24} color="black" />}
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
                <View style={{alignItems:'center', marginTop:20}}>
                    <Text>Chưa có tài khoản? Đăng ký</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerText:{
        flex: 3,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:20
    },
    containerBtn:{
        flex: 2,
        paddingHorizontal:30
    },
    containerRowBtn:{
        flexDirection:'row',
        gap:30,
        justifyContent:'center'
    },
    Line1Text:{
        fontSize:60,
        fontWeight:'bold'
    },
    Line2Text:{
        fontSize:60,
        fontWeight:'bold',
        color:APP_COLOR.ORANGE,
    },
    Line3Text:{
        fontSize:26,
    },
    customPressable:{
        marginVertical:25,
        backgroundColor:'white',
        borderRadius:15
    },
    containerEmailBtn:{
        marginTop:5,
        marginHorizontal:25
    },
    customPressableEmail: {
        paddingHorizontal: 30,
        alignSelf: 'stretch',
        backgroundColor:'black',
        justifyContent:'center',
        borderRadius:15
    },
    customPressableTxt:{
        textTransform:'uppercase',
        fontSize:16
    },
    customPressableEmailTxt:{
        color:'white',
        fontSize:16
    },
})

export default WelcomeScreen