import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';


const Login = () => {
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
                marginLeft: moderateScaleVertical(20),
                marginRight: moderateScaleVertical(20),
                marginTop: moderateScaleVertical(45),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent input={{ fontSize: textScale(15), color: colors.blackB }} placeholder='please enter email' />
            </View>
            <View style={{
                alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(20),
                marginRight: moderateScaleVertical(20),
                marginTop: moderateScaleVertical(20),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent input={{ fontSize: textScale(15), color: colors.black }}
                    placeholder='please enter password' />
            </View>
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(50) }} ButtonText='Login' />
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(20) }} ButtonText='Login with Google' />
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(20) }} ButtonText='Login with facebook' />
        </SafeAreaView>

        // </Wrappercontainer>
    );
};


const styles = StyleSheet.create({

});


export default Login;
