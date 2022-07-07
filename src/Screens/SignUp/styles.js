import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
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
        borderWidth: 0.9,
        borderRadius: moderateScale(5),
        marginLeft: moderateScaleVertical(30),
        marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(45),
        // backgroundColor: colors.greyA
    },
    inputview: {

        borderWidth: moderateScaleVertical(0.9),
        borderRadius: moderateScale(5),
        marginLeft: moderateScaleVertical(30),
        marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(12),
        flexDirection: "row",
        justifyContent: "space-between"
        // backgroundColor: colors.greyA
    },
    passstyle:
    {
        fontSize: textScale(14),
        color: colors.black,
    },
    eyestyle:
    {
        paddingRight: moderateScale(10)
    },
    showeye:
    {
        marginTop: moderateScale(8)
    },

    hidestyle:
    {
        paddingRight: moderateScale(10)
    },
    btnstyle:
    {
        marginTop: moderateScaleVertical(90)
    },

    hideeye:
    {
        marginTop: moderateScale(8)
    },

    cnfmpassstyle:
    {
        fontSize: textScale(14),
        color: colors.black
    },
    usertext: {

        marginTop: moderateScaleVertical(10),
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: moderateScaleVertical(27)
    },
    alreadyusertxt:
    {
        fontSize: textScale(12),
        paddingHorizontal: moderateScale(10)
    },
    logintxt:
    {
        fontSize: textScale(12),
        color: colors.blue
    }


})