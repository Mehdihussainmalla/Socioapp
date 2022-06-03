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
    value

}) => {

    return (
        <SafeAreaView style={{marginHorizontal:moderateScaleVertical(10)}}>
            <TextInput onChangeText={onChangeText}
                placeholderTextColor={colors.black}
                placeholder={placeholder}
                // keyboardType={keyboardType}
                style={{ ...styles.input, ...input }}
                value={value}



            />
        </SafeAreaView>

    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
        height: moderateScale(40),
        // backgroundColor: colors.matterhorn,
        marginRight: moderateScale(20),
        marginLeft: moderateScale(2),
        // paddingHorizontal: moderateScale(20),
        borderRadius: verticalScale(5),
        // paddingLeft: moderateScale(8),
        // paddingVertical: verticalScale(10),
        // color: colors.blue,
        // fontFamily: fontFamily.BarlowRegular
        



    },
    text: {

        color: colors.black,
        fontSize: textScale(14)


    }
})