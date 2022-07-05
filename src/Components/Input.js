//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';
import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';



const TextInputComponent = ({
    placeholder = '',
    // keyboardType = '',
    onChangeText,
    input,
    secureTextEntry,
    value, 
   

}) => {

    return (
        <SafeAreaView style={{ marginHorizontal: moderateScaleVertical(10) }}>
            <TextInput onChangeText={onChangeText}
                placeholderTextColor={colors.blackOpacity43}
                placeholder={placeholder}
                // keyboardType={keyboardType}
                style={{ ...styles.input, ...input }}
                value={value}
                secureTextEntry={secureTextEntry}



            />
        </SafeAreaView>

    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
        height: moderateScale(40),
        borderRadius: verticalScale(5),
        padding: moderateScaleVertical(10),
        fontWeight:"500",
        color: colors.blackOpacity66,

    },
})