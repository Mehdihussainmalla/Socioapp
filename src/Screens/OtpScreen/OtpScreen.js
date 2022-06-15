//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import { AuthContext } from '../../navigation/AuthProvider';
import navigationStrings from '../../navigation/navigationStrings';
import { textScale } from '../../styles/responsiveSize';

// create a component
const OptScreen = ({ route }) => {
    // const data=route?.params;
    // console.log(data,"data is>>>")
    // const { verifyOtp } = useContext(AuthContext);
    const [code, setCode] = useState();
    const navigation = useNavigation();
    const verifyOtpToNavigate = (code) => {
        // let res = verifyOtp(code)
        // //    let data =  JSON.stringify(res)
        // console.log(res, "ressss>>")
        // if (!!res) {
        //     // alert('otp success')
        //     showMessage({
        //         message:"Login Successfully",
        //         type:"success",
        //     })
        //     navigation.navigate(navigationStrings.HOME)
        // }
        // else {
        //     showMessage({
        //         message:"wrong code",
        //         type:"danger"
        //     })
        //     // alert('some thing went wrong')
        // }
    }

    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
                title={"Otp Screen"} />
            <View style={styles.container}>

                <Text style={{
                    fontSize: textScale(15),
                    fontWeight: "700"
                }}>Enter Otp</Text>
            </View>
            <TextInputComponent input={{
                fontSize: textScale(16),
                paddingHorizontal: 24,
                borderBottomWidth: 1,
            }}
                value={code}
                onChangeText={(code) => setCode(code)}
                placeholder='please enter otp' />
            <View style={{ marginTop: moderateVerticalScale(50) }}>
                <ButtonComp
                    onPress={() => verifyOtpToNavigate(code)}
                    ButtonText='confirm otp' />
                {/* {console.log(code,"code is")} */}
            </View>
        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container: {

        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',


    },
});

export default OptScreen;
