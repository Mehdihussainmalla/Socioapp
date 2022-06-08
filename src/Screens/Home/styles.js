import React from "react";
import { StyleSheet } from "react-native"
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blackOpacity40,
    },
    drawerstyle: {

        marginTop: moderateVerticalScale(15),
        marginHorizontal: moderateVerticalScale(10)

    },
    idstyle: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: moderateScaleVertical(20)
    },
    idtext: {
        fontSize: 16,
        color: colors.black
    },
    emailstyle:
    {
        fontSize: 20,
        color: colors.black
    },
    signstyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    },
    textview: {
        fontSize: textScale(20),
        color: 'red',
        fontWeight:"300"
    }
})