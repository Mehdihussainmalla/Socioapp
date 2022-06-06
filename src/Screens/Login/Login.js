import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useContext, useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image

} from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';


const Login = ({ navigation, route }) => {
    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
    // console.log(route?.params,"route data")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, googleLogin,facebookLogin } = useContext(AuthContext);
    const [hide, setHide] = useState();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '196889429419-ukv9i2e4229oj3frq0nm2btuamemk46u.apps.googleusercontent.com',
        });
    }, [])
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

        // else if (password.length < 8) {
        //     console.log('please enter correct password')
        // }

        else if (!strongRegex.test(password)) {
            console.log('please enter valid password')
        }
        else {
            login(email, password)

        }
    }
    return (
        <Wrappercontainer>
            <SafeAreaView style={styles.container}>
                <View style={styles.headtext}>
                    <Text style={{
                        color: colors.blue
                        , fontSize: textScale(20)
                    }}>Welcome to Social App</Text>
                </View>
                <View style={styles.descview}>
                    <Text style={styles.desctext} > Login</Text>
                </View>
                <View style={styles.mainview}>
                    <TextInputComponent
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        input={{ fontSize: textScale(10), color: colors.blackB }}
                        placeholder='please enter email' />
                </View>
                <View style={styles.passwiew}>


                    <TextInputComponent
                        value={password}
                        secureTextEntry={hide}
                        onChangeText={(password) => setPassword(password)}
                        input={{
                            fontSize: textScale(10),
                            color: colors.black
                        }}
                        placeholder='please enter password' />
                    <View style={{ paddingRight: 10, }}>
                        {hide ?
                            <TouchableOpacity onPress={() => setHide(false)}>
                                <Image style={{ marginTop: 8, }}
                                    source={imagePath.show_eye} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => setHide(true)}>
                                <Image style={{ marginTop: 8, }}
                                    source={imagePath.hide_eye} />
                            </TouchableOpacity>}

                    </View>
                </View>
                <ButtonComp
                    onPress={handleLogin}
                    // onPress={()=>navigation.navigate(navigationStrings.HOME,login(email,password))}
                    btnStyle={{ marginTop: moderateScaleVertical(50) }}
                    ButtonText='Login' />
                <ButtonComp onPress={() => googleLogin()}
                    btnIcon={imagePath.google_icon}
                    btnStyle={{ marginTop: moderateScaleVertical(20) }}
                    ButtonText='Login with Google' />
                <ButtonComp onPress={()=>facebookLogin()}
                    btnIcon={imagePath.facebook_icon}
                    btnStyle={{ marginTop: moderateScaleVertical(20) }}
                    ButtonText='Login with facebook' />
                <View style={{
                    marginTop: moderateScaleVertical(10),
                    flexDirection: "row", justifyContent: "center",
                    marginHorizontal: moderateScaleVertical(27)
                }}>
                    <Text style={styles.bottomdesc}>New here?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
                        activeOpacity={0.5}>
                        <Text style={styles.belowdesctext}>create account</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </Wrappercontainer>
    );
};


export default Login;
