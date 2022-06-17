import React, { useState, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import RNRestart from 'react-native-restart'
import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,

} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';
import strings, { changeLanguage } from '../../constants/lang';
import Modal from "react-native-modal"
import actions from '../../redux/actions';
import auth from "@react-native-firebase/auth"
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const Login = ({ navigation }) => {
    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
    // console.log(route?.params,"route data")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [hide, setHide] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    useEffect(() => {
        GoogleSignin.configure();
    }, [])

    const data = [email, password];
    const handleLogin = () => {

        if (email === "") {

            // console.log('please enter email')
        }

        else if (!emailRegex.test(email)) {
            showMessage({
                message: "Please enter email",
                type: "danger",
            })
        }
        else if (!strongRegex.test(password)) {
            showMessage({
                message: "Please enter password",
                type: "danger",
            })
        }
        else {
            actions.signIn(email, password)
            //  login(email, password)

        }
    }
    //................language change................//
    const onchangeLange = (key, data) => {
        console.log(key, "key is>", data, "ddidd")
        changeLanguage(key);
        RNRestart.Restart();

    }
    //..........google login.........//
    const googlelogin = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            // console.log(idToken, "user info is >>")
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            actions.loginData(googleCredential)
            showMessage({
                message: "login sucessfully",
                type: "success"
            })
        } catch (error) {
            console.log("error in goolge login")
            showMessage({
                message: "failed in gooogle authentication"
            })
        }
    }

    //................facebook login .............//
    const facebookLogin = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            await auth().signInWithCredential(facebookCredential);
            actions.loginData(facebookCredential)

        } catch (error) {

            console.log("error occurred during facebook login", error)
        }
    }

    return (
        <Wrappercontainer>
            <SafeAreaView style={styles.container}>

                <View style={{ alignItems: "flex-end", alignContent: "flex-end", flexDirection: "column" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: colors.backgroundGreyB }}
                        activeOpacity={0.5}
                        onPress={handleModal}>
                        <Text style={{
                            color: colors.black,
                            fontWeight: "400",
                            fontSize: textScale(13),
                        }}>
                            {strings.CHANGE_LANGUAGE}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={isModalVisible}>

                    <View style={{ height: "50%", }}>
                        <ScrollView>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('ur')}
                                style={{

                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(20), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.URDU}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => onchangeLange('hi')}
                                activeOpacity={0.5}
                                style={{
                                    // marginTop: moderateScaleVertical(5),
                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(20), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.HINDI}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('ar')}
                                style={{
                                    // marginTop: moderateScaleVertical(5),
                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(20), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.ARABIC}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('sp')}
                                style={{
                                    // marginTop: moderateScaleVertical(5),
                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(20), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.SPANISH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('en')}
                                style={{
                                    marginTop: moderateScaleVertical(1),
                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(20), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.ENGLISH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('fr')}
                                style={{
                                    // marginTop: moderateScaleVertical(),
                                    paddingVertical: moderateScaleVertical(6)
                                }}>
                                <Text style={{
                                    fontSize: textScale(18), color: colors.white,
                                    alignSelf: "center"
                                }}>
                                    {strings.FRENCH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleModal}
                                activeOpacity={0.5}
                                style={{ alignContent: "flex-end", alignItems: "flex-end", }}>
                                <Text style={{
                                    color: colors.redD,
                                    fontSize: textScale(14), fontWeight: "500"
                                }}>{strings.CLOSE}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </Modal>

                <View style={styles.descview}>
                    <Text style={styles.desctext} >{strings.LOGIN}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <TextInputComponent
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            input={{
                                fontSize: textScale(14),
                                color: colors.blackB,
                                borderWidth: 0.9, paddingHorizontal: moderateScaleVertical(10),
                            }}
                            placeholder={strings.ENTER_EMAIL} />
                    </View>

                    <View style={styles.passwiew}>
                        <TextInputComponent
                            value={password}
                            secureTextEntry={hide}
                            onChangeText={(password) => setPassword(password)}
                            input={{

                                fontSize: textScale(14),
                                color: colors.black
                            }}
                            placeholder={strings.ENTER_PASSWORD} />
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
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: moderateScaleVertical(10),
                        paddingVertical: moderateScaleVertical(10),

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.PHONELOGIN)}
                            activeOpacity={0.5}>
                            <Text style={{
                                color: colors.blue, paddingHorizontal: 30
                            }}>{strings.PHONE_LOGIN}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.FORGETPASSWORD)}
                            activeOpacity={0.5}
                            style={styles.forgetstyle}>
                            <Text style={styles.forgettext}>{strings.FORGOT_PASSWORD}?</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonComp
                        onPress={handleLogin}
                        // onPress={()=>navigation.navigate(navigationStrings.HOME,login(email,password))}
                        btnStyle={{ marginTop: moderateScaleVertical(50) }}
                        ButtonText={strings.LOGIN} />

                    <ButtonComp
                        onPress={() => googlelogin()}
                        // onPress={handleGoogle}
                        btnIcon={imagePath.google_icon}
                        btnStyle={{ marginTop: moderateScaleVertical(20) }}
                        ButtonText={strings.GOOGLE_LOGIN} />


                    <ButtonComp
                        onPress={() => facebookLogin()}
                        btnIcon={imagePath.facebook_icon}
                        btnStyle={{ marginTop: moderateScaleVertical(20) }}
                        ButtonText={strings.FB_LOGIN} />
                    <View style={{
                        marginTop: moderateScaleVertical(10),
                        flexDirection: "row", justifyContent: "center",
                        marginHorizontal: moderateScaleVertical(27)
                    }}>
                        <Text style={styles.bottomdesc}>{strings.NEW_HERE}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
                            activeOpacity={0.5}>
                            <Text style={styles.belowdesctext}>{strings.NEW_ACCOUNT}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </Wrappercontainer>
    );
};


export default Login;
