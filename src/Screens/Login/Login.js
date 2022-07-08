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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [hide, setHide] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    useEffect(() => {
        // GoogleSignin.configure();

        GoogleSignin.configure({
            webClientId: "196889429419-ukv9i2e4229oj3frq0nm2btuamemk46u.apps.googleusercontent.com",
        });

    }, [])

    const data = [email, password];
    const handleLogin = () => {
        if (email == "") {
            showMessage({
                message: "please enter email",
                type: "danger"
            })
            // alert('please enter email')
        } else if (!emailRegex.test(email)) {

            showMessage({
                message: "please enter valid email",
                type: "default"
            })
            // alert('enter valid email')
        }
        else if (password == "") {
            showMessage({
                message: "please enter password",
                type: "danger"
            })

            // alert('enter password')
        } else if (!strongRegex.test(password)) {

            showMessage({
                message: "please enter valid password",
                type: "danger"
            })
            // alert('enter valid password')
        } else {
            actions.signIn(email, password)
        }
    }
    //................language change................//
    const onchangeLange = (key, data) => {
        setIsModalVisible(false)
        console.log(key, "key is>", data, "data is")
        changeLanguage(key);
        // RNRestart.Restart();

    }
    //..........google login.........//
    const googlelogin = async () => {
        try {
            const credentials = await GoogleSignin.signIn();
            const idToken = credentials.idToken;
            console.log(credentials, "user info is >>")
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            let data = await auth().signInWithCredential(googleCredential);
            // console.log(data, "mewgdsdsd>>>>>>>")
            actions.loginData(data)
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

                <View style={styles.langstyle}>
                    <TouchableOpacity
                        style={styles.langbtn}
                        activeOpacity={0.5}
                        onPress={handleModal}>
                        <Text style={styles.langtxt}>
                            {strings.CHANGE_LANGUAGE}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={isModalVisible}>

                    <View style={styles.modalstyle}>
                        <ScrollView>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('ur')}
                                style={styles.langnameview}>
                                <Text style={styles.langtxt}>
                                    {strings.URDU}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => onchangeLange('hi')}
                                activeOpacity={0.5}
                                style={styles.langnameview}>
                                <Text style={styles.langtxt}>
                                    {strings.HINDI}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('ar')}
                                style={styles.langnameview}>
                                <Text style={styles.langtxt}>
                                    {strings.ARABIC}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('sp')}
                                style={styles.langnameview}>
                                <Text style={styles.langtxt}>
                                    {strings.SPANISH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('en')}
                                style={styles.langstyle}>
                                <Text style={styles.langtxt}>
                                    {strings.ENGLISH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onchangeLange('fr')}
                                style={styles.langnameview}>
                                <Text style={styles.langtxt}>
                                    {strings.FRENCH}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleModal}
                                activeOpacity={0.5}
                                style={styles.closestyle}>
                                <Text style={styles.closetxt}>{strings.CLOSE}</Text>
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
                            input={styles.emailstyle}
                            placeholder={strings.ENTER_EMAIL} />
                    </View>

                    <View style={styles.passwiew}>
                        <TextInputComponent
                            value={password}
                            secureTextEntry={hide}
                            onChangeText={(password) => setPassword(password)}
                            input={styles.passstyle}
                            placeholder={strings.ENTER_PASSWORD} />
                        <View style={styles.hideshowstyle}>
                            {hide ?
                                <TouchableOpacity onPress={() => setHide(false)}>
                                    <Image style={styles.showeyestyle}
                                        source={imagePath.show_eye} />
                                </TouchableOpacity>

                                :
                                <TouchableOpacity onPress={() => setHide(true)}>
                                    <Image style={styles.eyestyle}
                                        source={imagePath.hide_eye} />
                                </TouchableOpacity>}

                        </View>
                    </View>
                    <View style={styles.loginforgetstyle}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.PHONELOGIN)}
                            activeOpacity={0.5}>
                            <Text style={styles.phonestyle}>{strings.PHONE_LOGIN}</Text>
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
                        btnStyle={styles.loginbtn}
                        ButtonText={strings.LOGIN} />

                    <ButtonComp
                        onPress={() => googlelogin()}
                        // onPress={handleGoogle}
                        btnIcon={imagePath.google_icon}
                        btnStyle={styles.googlebtn}
                        ButtonText={strings.GOOGLE_LOGIN} />


                    <ButtonComp
                        onPress={() => facebookLogin()}
                        btnIcon={imagePath.facebook_icon}
                        imgIcon={{ tintColor: colors.white }}
                        btnStyle={styles.facebookbtn}
                        ButtonText={strings.FB_LOGIN} />
                    <View style={styles.bottomstyle}>
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
