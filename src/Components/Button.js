import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';

export default function ButtonComp({
    ButtonText = '',
    btnStyle = {},
    buttonTxt = {},
    btnIcon,
    onPress = () => { },
}) {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.btnStyle,
                ...btnStyle,
            }}
            onPress={onPress}>
            {!!btnIcon ? <Image source={btnIcon} style={styles.imgIcon} /> : <View />}


            <Text style={{
                ...styles.buttonTxt,
                ...buttonTxt
            }}>{ButtonText}</Text>

            <View />

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(24),
        backgroundColor: colors.redB,
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    
    },
    buttonTxt: {
        fontSize: textScale(14),
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
        paddingHorizontal: 15,
        // fontFamily:fontFamily.BarlowBold
    },
    imgIcon: {
        // position: 'absolute',
        marginLeft: moderateScale(19)
    }
});