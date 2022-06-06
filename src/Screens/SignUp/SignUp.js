import React, { useContext, useState } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image

} from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import wrappercontainer from '../../Components/wrappercontainer';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';


const SignUp = ({ navigation }) => {

    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmpassword] = useState();
    const { register } = useContext(AuthContext);
    const [hide, setHide] = useState();
    const [hideIcon, setHideIcon] = useState();

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

        else if (password.length < 8) {
            console.log('please enter correct password')
        }

        else if (!strongRegex.test(password)) {
            console.log('please enter valid password')
        }
        else if (confirmPassword === "") {
            console.log("confirm password")

        }
        // else if (password==confirmPassword){
        //     console.log("password doesnot match")

        // }
        else {
            if (password === confirmPassword)
                navigation.navigate(navigationStrings.HOME, register(email, password))
            //  alert("error occurred")
        }
    }


    return (
        <Wrappercontainer>
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
                    // backgroundColor: colors.greyA
                }}>
                    <TextInputComponent
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        input={{ fontSize: textScale(10), color: colors.blackB }}
                        placeholder='please enter email' />
                </View>
                <View style={{

                    borderWidth: 0.4,
                    marginLeft: moderateScaleVertical(30),
                    marginRight: moderateScaleVertical(30),
                    marginTop: moderateScaleVertical(12),
                    flexDirection: "row",
                    justifyContent: "space-between"
                    // backgroundColor: colors.greyA
                }}>
                    <TextInputComponent
                        value={password}
                        secureTextEntry={hide}
                        onChangeText={(password) => setPassword(password)}
                        input={{ fontSize: textScale(10), color: colors.black }}
                        placeholder='please enter password' />
                    {hide ? <TouchableOpacity onPress={() => setHide(false)}
                        style={{ paddingRight: 10 }}>
                        <Image style={{ marginTop: 8 }}
                            source={imagePath.show_eye} />
                    </TouchableOpacity> :
                        <TouchableOpacity style={{ paddingRight: 10 }}
                            onPress={() => setHide(true)}>
                            <Image style={{ marginTop: 8 }} source={imagePath.hide_eye} />
                        </TouchableOpacity>
                    }
                </View>
                <View style={{
                    // alignItems: 'center',
                    borderWidth: 0.5,
                    marginLeft: moderateScaleVertical(30),
                    marginRight: moderateScaleVertical(30),
                    marginTop: moderateScaleVertical(12),
                    flexDirection: "row",
                    justifyContent: "space-between"
                    // backgroundColor: colors.greyA
                }}>
                    <TextInputComponent
                        value={confirmPassword}
                        secureTextEntry={hideIcon}
                        onChangeText={(confirmPassword) => setConfirmpassword(confirmPassword)}
                        input={{ fontSize: textScale(10), color: colors.black }}
                        placeholder='confirm password' />

                    {hideIcon ? <TouchableOpacity onPress={() => setHideIcon(false)}
                        style={{ paddingRight: 10 }}>
                        <Image style={{ marginTop: 8 }}
                            source={imagePath.show_eye} />
                    </TouchableOpacity> :
                        <TouchableOpacity style={{ paddingRight: 10 }}
                            onPress={() => setHideIcon(true)}>
                            <Image style={{ marginTop: 8 }} source={imagePath.hide_eye} />
                        </TouchableOpacity>
                    }
                </View>
                <ButtonComp
                    onPress={handleSignup}
                    btnStyle={{ marginTop: moderateScaleVertical(90), }}
                    ButtonText='SignUp' />

                <View style={{
                    marginTop: moderateScaleVertical(10),
                    flexDirection: "row", justifyContent: "center",
                    marginHorizontal: moderateScaleVertical(27)
                }}>
                    <Text style={{
                        fontSize: textScale(12),
                        paddingHorizontal: 10
                    }}>already user?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        activeOpacity={0.5}>
                        <Text style={{
                            fontSize: textScale(12),
                            color: colors.blue
                        }}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Wrappercontainer>
    );
};


const styles = StyleSheet.create({

});


export default SignUp;
