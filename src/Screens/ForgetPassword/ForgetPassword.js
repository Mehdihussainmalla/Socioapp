//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import strings from '../../constants/lang';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';

// create a component
const ForgetPassword = ({navigation}) => {
    const { forgetPassword } = useContext(AuthContext);
    // console.log(forgetPassword, "pass is>>>>")
    const [email, setEmail] = useState("");

 const forget=()=>{
    forgetPassword(email)
    if(email){
        navigation.navigate(navigationStrings.LOGIN)
 }
 
 }
    return (
        <Wrappercontainer>
            <View style={styles.container}>

                <Text style={styles.headertext}>{strings.FORGOT_PASSWORD}</Text>

                <View style={styles.titlestyle}>
                    <Text style={styles.titletxt}>
                        {strings.TITLE}
                    </Text>
                </View>
            </View>
            <TextInputComponent onPress={() => alert("hey")}
                value={email}
                onChangeText={(email) => setEmail(email)}
                input={styles.input}
                placeholder={strings.ENTER_EMAIL}/>

            <ButtonComp
                // onPress={() => alert("in process")}
                onPress={forget}
                btnStyle={{ marginTop: moderateScaleVertical(70), }}
                ButtonText={strings.CONTINUE} />

        </Wrappercontainer>
    );
};

export default ForgetPassword;
