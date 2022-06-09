import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import CountryCodePicker from '../../Components/CountryCodePicker';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';
const PhoneLogin = () => {
    const [countryCode, setCountryCode] = useState("91");
    const [countryFlag, setCountryFlag] = useState("IN");
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
                            Enter 6 digit code sent to you at +91 6005927575
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
                                placeholder='enter phone number' />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                    <ButtonComp onPress={() => Alert.alert("in Process")}
                        ButtonText='Login' />
                </View>
            </KeyboardAvoidingView>
        </Wrappercontainer>
    );
};

export default PhoneLogin;
