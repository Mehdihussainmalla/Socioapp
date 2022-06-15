import React, { useState, useContext } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import CountryCodePicker from '../../Components/CountryCodePicker';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';
const PhoneLogin = ({ navigation }) => {
    // const { phoneLogin } = useContext(AuthContext);
    // console.log(phoneLogin, "phone login is")
    const [countryCode, setCountryCode] = useState("91");
    const [countryFlag, setCountryFlag] = useState("IN");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirm, setConfirm] = useState(null);

    const getLogin = (countryCode, phoneNumber) => {

        // let res = phoneLogin(countryCode, phoneNumber)
        // console.log(res,"resss>>")
        // if (!!res) {
        //     navigation.navigate(navigationStrings.OTPSCREEN)
        // } else {
        //     alert('something went wrong')
        // }
    }

    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Login With Phone Number"} />
                <ScrollView>
                    <View style={styles.titleview}>
                        <Text style={styles.textheading}>
                            Enter you phone number
                        </Text>
                        <Text style={styles.desctext}>
                            Enter 6 digit code sent to you at {`+${countryCode + phoneNumber}`}
                        </Text>
                    </View>

                    <View style={styles.codeview}>
                        <View style={{ flex: 0.35 }}>
                            <CountryCodePicker
                                countryCode={countryCode}
                                countryFlag={countryFlag}
                                setCountryCode={setCountryCode}
                                setCountryFlag={setCountryFlag} />
                        </View>
                        <View style={{ flex: 0.68 }}>
                            <TextInputComponent input={{
                                borderRadius: moderateScale(5),
                                borderWidth: moderateScaleVertical(0.9),


                            }}

                                value={phoneNumber}
                                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                placeholder='enter phone number' />
                        </View>
                        {/* {alert(phoneNumber )} */}
                    </View>
                </ScrollView>
            </View>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                    <ButtonComp onPress={() => getLogin(countryCode, phoneNumber)}
                        // onPress={() => getLogin()}
                        ButtonText='Login' />
                </View>
            </KeyboardAvoidingView>
        </Wrappercontainer>
    );
};

export default PhoneLogin;
