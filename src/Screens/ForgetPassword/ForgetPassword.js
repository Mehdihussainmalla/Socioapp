//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, KeyboardAvoidingView} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import strings from '../../constants/lang';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';

// create a component
const ForgetPassword = ({ navigation }) => {
    const { forgetPassword } = useContext(AuthContext);
    // console.log(forgetPassword, "pass is>>>>")
    const [email, setEmail] = useState("");

    const forget = () => {
        forgetPassword(email)
        if (email) {
            navigation.navigate(navigationStrings.LOGIN)
        }

    }
    return (
        <Wrappercontainer>
            <View style={styles.container}>
                {/* <View style={{ flex: 0.9 }}> */}

                    <Header isBackIcon={true}
                        title={strings.FORGOT_PASSWORD} />

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
                {/* </View> */}
            </View>
            <View style={{  }}>
               <KeyboardAvoidingView enabled={true}
                 behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ButtonComp
                    onPress={forget}
                    btnStyle={{ marginTop: moderateScaleVertical(70), }}
                    ButtonText={strings.CONTINUE} />
                    </KeyboardAvoidingView>
            </View>
        </Wrappercontainer>
    );
};

export default ForgetPassword;
