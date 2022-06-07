//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const ForgetPassword = ({navigation}) => {
    const { forgetPassword } = useContext(AuthContext);
    // console.log(forgetPassword, "pass is>>>>")
    const [email, setEmail] = useState("");

 const forget=()=>{
    forgetPassword(email)
    {email ?  navigation.navigate(navigationStrings.LOGIN) :  Alert. alert("please enter email address")}
    // if(email){
    //     navigation.navigate(navigationStrings.LOGIN)
    // }
    // else{
    //    Alert. alert("please enter email address")
    // }
 }

    return (
        <Wrappercontainer>
            <View style={styles.container}>

                <Text style={{
                    fontSize: textScale(15), fontWeight: "500", marginTop: 10,
                    alignContent: "center", alignSelf: "center",
                }}>ForgetPassword</Text>

                <View style={{
                    paddingHorizontal: moderateScaleVertical(20),
                    marginTop: moderateScaleVertical(50),
                }}>
                    <Text style={{ fontSize: textScale(12), fontWeight: "400", }}>
                        Enter your email address we will help reset your password
                    </Text>
                </View>
            </View>
            <TextInputComponent onPress={() => alert("hey")}
                value={email}
                onChangeText={(email) => setEmail(email)}
                input={{
                    borderRadius: 5, borderWidth: 0.5,
                    marginTop: moderateScaleVertical(20),
                    fontSize: textScale(13),
                    paddingHorizontal: moderateScale(10)
                }}
                placeholder='enter email' />

            <ButtonComp
                // onPress={() => alert("in process")}
                onPress={forget}
                btnStyle={{ marginTop: moderateScaleVertical(70), }}
                ButtonText="Continue" />

        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // backgroundColor:colors.hexacolor,
        paddingVertical: moderateScaleVertical(5),
        flex: 0.5


    },
});

//make this component available to the app
export default ForgetPassword;
