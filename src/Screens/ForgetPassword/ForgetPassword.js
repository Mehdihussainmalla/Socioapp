//import liraries
import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import strings from '../../constants/lang';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';
import auth from "@react-native-firebase/auth";
import { showMessage } from 'react-native-flash-message';
import navigationStrings from '../../navigation/navigationStrings';

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const ForgetPass = async (email) => {
        console.log(email, "email is")
        try {
            if (email == "")
                showMessage({
                    message: "An email address must be provided",
                    type: "danger"
                })
            await auth().sendPasswordResetEmail(email)
            showMessage({
                message: "link has sent to your email sucessfully",
                type: "success"
            })
            navigation.navigate(navigationStrings.LOGIN)
        }
        catch (error) {

            console.log(error, "error occurred during forget password")
        }
    }
    return (
        <Wrappercontainer>
            <View style={styles.container}>

                <Header isBackIcon={true}
                    title={strings.FORGOT_PASSWORD} />
                <ScrollView>
                    <View style={styles.titlestyle}>
                        <Text style={styles.titletxt}>
                            {strings.TITLE}
                        </Text>
                    </View>


                    <TextInputComponent
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        input={styles.input}
                        placeholder={strings.ENTER_EMAIL} />
                </ScrollView>


                <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                    <View style={{ marginVertical: Platform.OS === 'ios' ? moderateScaleVertical(50) : moderateScaleVertical(20) }}>

                        <ButtonComp
                            onPress={() => ForgetPass(email)}
                            btnStyle={{ marginVertical: moderateScale(1), }}
                            ButtonText={strings.CONTINUE} />
                    </View>

                </KeyboardAvoidingView>
            </View>
        </Wrappercontainer>
    );
};

export default ForgetPassword;
