import React, { useContext, useState } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image, ScrollView

} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';


const SignUp = ({ navigation }) => {

    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmpassword] = useState();
    const { register } = useContext(AuthContext);
    const [hide, setHide] = useState();
    const [hideIcon, setHideIcon] = useState();

    const handleSignup = () => {
        if (email === "") {
            // console.log('please enter email')
        }

        else if (!emailRegex.test(email)) {
            showMessage({
                message: "Please enter your email",
                type: "danger",
            })
        }

        // else if (password === "") {
        //     console.log('please enter password')
        // }

        else if (!strongRegex.test(password)) {
            showMessage({
                message: "Please enter your password",
                type: "danger",
            })
        }

        else {
            if (password === confirmPassword) {
                register(email, password)
                showMessage({
                    message: "Signup sucessfully",
                    type: "success"
                })
            }
            else {
                showMessage({
                    message: "please confirm password",
                    type: "danger"
                })
            }
        }
    }


    return (
        <Wrappercontainer>
            <SafeAreaView style={styles.container}>
                <View style={styles.desc}>
                    <Text style={styles.desctext} > {strings.SIGN_UP_HERE}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainview}>
                    <TextInputComponent
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        input={{ fontSize: textScale(10), color: colors.blackB,
                         }}
                        placeholder={strings.ENTER_EMAIL} />
                </View>
                <View style={styles.inputview}>
                    <TextInputComponent
                        value={password}
                        secureTextEntry={hide}
                        onChangeText={(password) => setPassword(password)}
                        input={{ fontSize: textScale(10), color: colors.black, }}
                        placeholder={strings.ENTER_PASSWORD} />
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
                <View style={styles.inputview}>
                    <TextInputComponent
                        value={confirmPassword}
                        secureTextEntry={hideIcon}
                        onChangeText={(confirmPassword) => setConfirmpassword(confirmPassword)}
                        input={{ fontSize: textScale(10), color: colors.black }}
                        placeholder={strings.CONFIRM_PASSWORD} />

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
                </ScrollView>
                </SafeAreaView>
                <ButtonComp
                    onPress={handleSignup}
                    btnStyle={{ marginTop: moderateScaleVertical(90), }}
                    ButtonText={strings.SIGN_UP} />

                <View style={styles.usertext}>
                    <Text style={{
                        fontSize: textScale(12),
                        paddingHorizontal: 10
                    }}>{strings.ALREADY_USER}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        activeOpacity={0.5}>
                        <Text style={{
                            fontSize: textScale(12),
                            color: colors.blue
                        }}>{strings.LOGIN}</Text>
                    </TouchableOpacity>
                    
                </View>
                
                
        </Wrappercontainer>
    );
};
export default SignUp;
