import React from "react";
import { StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    headstyle: {
        marginTop: moderateVerticalScale(50),
        justifyContent: 'center',
        alignItems: "center"
    },
    headtext: {
        color: colors.blue,
        fontSize: textScale(20)
    },
    desc: {
        marginTop: moderateVerticalScale(50),
        justifyContent: 'center', alignItems: "center"
    },
    desctext: {
        color: colors.blue,
        fontSize: textScale(20)
    },
    mainview: {
        // alignItems: 'center',
        borderWidth: 0.5,
        marginLeft: moderateScaleVertical(30),
        marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(45),
        // backgroundColor: colors.greyA
    },
    inputview: {

        borderWidth: 0.4,
        marginLeft: moderateScaleVertical(30),
        marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(12),
        flexDirection: "row",
        justifyContent: "space-between"
        // backgroundColor: colors.greyA
    },
    usertext: {
        marginTop: moderateScaleVertical(10),
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: moderateScaleVertical(27)
    }


})