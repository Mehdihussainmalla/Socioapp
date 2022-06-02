import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { AuthContext } from '../../navigation/AuthProvider';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';


const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { register } = useContext(AuthContext);
    // console.log(register, "register is")
    return (
        // <Wrappercontainer>
        // < > 
        // <View style={{flex:1, backgroundColor:'red', justifyContent:'center'}}>
        // <Text>Hello</Text>
        // </View>

        // </>
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
                }} > SignUp </Text>
            </View>
            <View style={{
                // alignItems: 'center',
                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(20),
                marginRight: moderateScaleVertical(20),
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

                borderWidth: 0.5,
                marginLeft: moderateScaleVertical(20),
                marginRight: moderateScaleVertical(20),
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
                marginLeft: moderateScaleVertical(20),
                marginRight: moderateScaleVertical(20),
                marginTop: moderateScaleVertical(12),
                backgroundColor: colors.greyA
            }}>
                <TextInputComponent
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    input={{ fontSize: textScale(13), color: colors.black }}
                    placeholder='confirm password' />
            </View>
            <ButtonComp
                onPress={() => register(email, password)}
                btnStyle={{ marginTop: moderateScaleVertical(50) }}
                ButtonText='Login' />
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with Google' />
            <ButtonComp btnStyle={{ marginTop: moderateScaleVertical(20) }}
                ButtonText='Login with facebook' />
        </SafeAreaView>

        // </Wrappercontainer>
    );
};


const styles = StyleSheet.create({

});


export default SignUp;
