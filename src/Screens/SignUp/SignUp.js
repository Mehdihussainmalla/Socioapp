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


const SignUp = ({navigation}) => {

    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmpassword]= useState();
    const { register } = useContext(AuthContext);

    const handleSignup = () => {

    if (email === "") {
      console.log('please enter email')
    }

    else if (!emailRegex.test(email)) {
      console.log('Invalid email')
    }

    else if (password === "") {
      console.log('please enter password')
    }

    else if (password.length<8) {
      console.log('please enter correct password')
    }

    else if (!strongRegex.test(password)) {
      console.log('please enter valid password')
    }
    else {
        navigation.navigate(navigationStrings.HOME,register(email,password))
        //  alert("error occurred")
        }
    }

    
    return (
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
                }} > SignUp Here</Text>
            </View>
            <View style={{
                // alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(30),
                marginRight: moderateScaleVertical(30),
                marginTop: moderateScaleVertical(45),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    input={{ fontSize: textScale(13), color: colors.blackB }}
                    placeholder='please enter email' />
            </View>
            <View style={{

                borderWidth: 0.4,
                marginLeft: moderateScaleVertical(30),
                marginRight: moderateScaleVertical(30),
                marginTop: moderateScaleVertical(12),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    input={{ fontSize: textScale(13), color: colors.black }}
                    placeholder='please enter password' />
            </View>
            <View style={{
                // alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(30),
                marginRight: moderateScaleVertical(30),
                marginTop: moderateScaleVertical(12),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => setConfirmpassword(confirmPassword)}
                    input={{ fontSize: textScale(13), color: colors.black }}
                    placeholder='confirm password' />
            </View>
            <ButtonComp
            //  onPress={()=>navigation.navigate(navigationStrings.LOGIN,register(email,password))}
            onPress={handleSignup}
            
                btnStyle={{ marginTop: moderateScaleVertical(50) }}
                ButtonText='SignUp' />
            <ButtonComp 
            onPress={()=>navigation.navigate(navigationStrings.LOGIN)}
            btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with Google' />
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with facebook' />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default SignUp;
