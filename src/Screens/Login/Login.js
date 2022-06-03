import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';


const Login = ({ navigation, route }) => {
    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
    // console.log(route?.params,"route data")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = useContext(AuthContext);

    const handleLogin = () => {

        if (email === "") {
            console.log('please enter email')
        }

        else if (!emailRegex.test(email)) {
            console.log('Invalid email')
        }

        else if (password === "") {
            console.log('please enter password')
        }

        else if (password.length < 8) {
            console.log('please enter correct password')
        }

        else if (!strongRegex.test(password)) {
            console.log('please enter valid password')
        }
        else {
            login(email, password)
            alert("login Sucessfully")
        }
    }
    return (
        // <Wrappercontainer>
        <SafeAreaView style={{ height: "100%", width: "100%", }}>
            <View style={{
                marginTop: moderateVerticalScale(50),
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Text style={{
                    color: colors.blue
                    , fontSize: textScale(20)
                }}>Welcome to Social App</Text>
            </View>
            <View style={{
                marginTop: moderateVerticalScale(50),
                justifyContent: 'center', alignItems: "center"
            }}>
                <Text style={{
                    color: colors.blue,
                    fontSize: textScale(20)
                }} > Login</Text>
            </View>
            <View style={{
                alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(30),
                marginRight: moderateScaleVertical(30),
                marginTop: moderateScaleVertical(45),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    input={{ fontSize: textScale(15), color: colors.blackB }}
                    placeholder='please enter email' />
            </View>
            <View style={{
                alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(30),
                marginRight: moderateScaleVertical(30),
                marginTop: moderateScaleVertical(20),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    input={{
                        fontSize: textScale(15),
                        color: colors.black
                    }}
                    placeholder='please enter password' />
            </View>
            <ButtonComp
                onPress={handleLogin}
                // onPress={()=>navigation.navigate(navigationStrings.HOME,login(email,password))}
                btnStyle={{ marginTop: moderateScaleVertical(50) }}
                ButtonText='Login' />
            <ButtonComp
                btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with Google' />
            <ButtonComp
                btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with facebook' />
                <View style={{backgroundColor:"red",marginTop:moderateScaleVertical(10), 
                flexDirection:"row",justifyContent:"center",
                marginHorizontal:moderateScaleVertical(27)}}>
                    <Text style={{fontSize:textScale(12), paddingHorizontal:15}}>New here</Text>
                    <Text>create account</Text>
                </View>
        </SafeAreaView>

        // </Wrappercontainer>
    );
};


const styles = StyleSheet.create({

});


export default Login;
