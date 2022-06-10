import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useContext, useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,


} from 'react-native';
import { showMessage } from 'react-native-flash-message';
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
import strings from '../../constants/lang';
import Modal from "react-native-modal"

const Login = ({ navigation }) => {
    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
    // console.log(route?.params,"route data")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, googleLogin, facebookLogin } = useContext(AuthContext);
    const [hide, setHide] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '196889429419-ukv9i2e4229oj3frq0nm2btuamemk46u.apps.googleusercontent.com',
        });
    }, [])
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
            login(email, password)

        }
    }

    const data = [
        {
            key: "1",
            name: "English"
        },
        {
            key: "2",
            name: "Spanish"
        },
        {
            key: "3",
            name: "French"
        },
        {
            key: "4",
            name: "Urdu"
        },
        {
            key: "5",
            name: "Arabic"
        },
        {
            key: "6",
            name: "Japanese"
        },
    ]
    // const items = (data) => {
    //     let newArr = data.map((item, index) => {
    //         console.log(item,index)
    //     })
    //     return newArr;
    // }
    // const d = items(data)
    return (
        <Wrappercontainer>
            <SafeAreaView style={styles.container}>
                <View>
                    {data.map((item, index) => (

                    

                            <Modal isVisible={isModalVisible}>
                                <View style={{ backgroundColor: "grey" }}>
                                    <Text>{item.name}</Text>
                                </View>
                                <TouchableOpacity onPress={handleModal}
                                    activeOpacity={0.5}
                                    style={{ alignContent: "flex-end", alignItems: "flex-end", }}>
                                    <Text style={{
                                        color: colors.redD,
                                        fontSize: textScale(13), fontWeight: "500"
                                    }}>close</Text>
                                </TouchableOpacity>
                            </Modal>
                       
                    )

                    )}
                    <TouchableOpacity onPress={handleModal}>
                        <Text>dhdj</Text>
                    </TouchableOpacity>


                </View>



                {/* <Modal isVisible={isModalVisible}>
                        <View style={{ height:"90%",}}>
                             <TouchableOpacity onPress={handleModal}
                              activeOpacity={0.5}
                             style={{ alignContent:"flex-end", alignItems:"flex-end",}}>
                                <Text style={{color:colors.redD,
                                     fontSize:textScale(13), fontWeight:"500"
                                     }}>close</Text>
                            </TouchableOpacity>
                              <View style={{backgroundColor:colors.whiteOpacity50,marginTop:10,marginHorizontal:100}}>
                            <Text style={{fontSize:18, color:colors.black, 
                            alignSelf:"center"}}>
                          urdu
                            </Text>
                            </View>
                            <View style={{backgroundColor:"white",marginTop:10,marginHorizontal:100}}>
                            <Text style={{fontSize:18,color:colors.black, 
                            alignSelf:"center"}}>
                            Hindi
                            </Text>
                            </View>
                            <View style={{backgroundColor:"white",marginTop:10,marginHorizontal:100}}>
                            <Text style={{fontSize:18,color:colors.black,  
                            alignSelf:"center"}}>
                            English
                            </Text>
                            </View>
                            <View style={{backgroundColor:"white",marginTop:10, marginHorizontal:100}}>
                            <Text style={{fontSize:18, color:colors.black, 
                            alignSelf:"center"}}>
                              Spanish
                            </Text>
                            </View>
                            <View style={{backgroundColor:"white",marginTop:10,marginHorizontal:100}}>
                            <Text style={{fontSize:18, color:colors.black, 
                            alignSelf:"center"}}>
                            French
                            </Text>
                            </View>
                            </View>
                            
                            <TouchableOpacity onPress={handleModal}>
                            <Text style={{fontSize:20}}>close</Text>
                            </TouchableOpacity>
                    </Modal> */}

                <View style={styles.descview}>
                    <Text style={styles.desctext} >{strings.LOGIN}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <TextInputComponent
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            input={{
                                fontSize: textScale(10), color: colors.blackB,
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

                                fontSize: textScale(10),
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

                    <ButtonComp onPress={() => googleLogin()}
                        btnIcon={imagePath.google_icon}
                        btnStyle={{ marginTop: moderateScaleVertical(20) }}
                        ButtonText={strings.GOOGLE_LOGIN} />


                    <ButtonComp onPress={() => facebookLogin()}
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
