//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const ForgetPassword = () => {
    return (
        <Wrappercontainer>
        <View style={styles.container}>

            <Text style={{fontSize:textScale(15), fontWeight:"500", 
            alignContent:"center",alignSelf:"center", }}>ForgetPassword</Text>
        </View>
        <View style={{paddingHorizontal:moderateScaleVertical(20), marginTop:moderateScaleVertical(20),}}>
            <Text style={{fontSize:textScale(12), fontWeight:"400",}}>
                Enter your email address we will help reset your password
            </Text>
        </View>
            <TextInputComponent  input={{borderRadius: 5,borderWidth: 0.5,
            marginTop:moderateScaleVertical(20),
            fontSize:textScale(13),
             paddingHorizontal:moderateScale(10)}}
             placeholder='enter email'/>
        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // backgroundColor:colors.hexacolor,
        paddingVertical:moderateScaleVertical(5)
       
    },
});

//make this component available to the app
export default ForgetPassword;
