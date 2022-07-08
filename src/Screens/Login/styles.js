import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    headtext: {
        marginTop: moderateVerticalScale(50),
        justifyContent: 'center',
        alignItems: "center"
    },
    descview: {
        marginTop: moderateVerticalScale(50),
        justifyContent: 'center',
        alignItems: "center"
    },
    desctext: {
        color: colors.blue,
        fontSize: textScale(20)
    },
    mainview: {
        marginTop: moderateScaleVertical(45),
        // backgroundColor: colors.greyA
    },
    passwiew: {
        borderWidth: moderateScale(0.9),
        marginLeft: moderateScaleVertical(10),
        marginRight: moderateScaleVertical(10),
        marginTop: moderateScaleVertical(20),
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: colors.greyA
        borderRadius: moderateScale(5)
    },
    belowdesctext: {
        fontSize: textScale(12),
        color: colors.blue
    },
    bottomdesc: {
        fontSize: textScale(12),
        paddingHorizontal: moderateScale(10)
    },
    forgetstyle:
    {
        alignItems: "flex-end",
        marginHorizontal: moderateScaleVertical(50)
    },
    forgettext:
    {
        alignContent: "flex-end",
        justifyContent: "flex-end",
        color: colors.blue
    },
    langstyle:
    {
        alignItems: "flex-end",
        alignContent: "flex-end",
        flexDirection: "column"
    },
    langtxt:
    {
        color: colors.black,
        fontWeight: "400",
        fontSize: textScale(13),
    },
    modalstyle:
    {
        height: "50%",
    },
    urdustyle:
    {

        paddingVertical: moderateScaleVertical(6)
    },
    langtxt:
    {
        fontSize: textScale(15),
        color: colors.white,
        alignSelf: "center"
    },
    langbtn:
    {
        backgroundColor: colors.greyA
    },
    closestyle:
    {
        alignContent: "flex-end",
        alignItems: "flex-end",
    },
    closetxt:
    {
        color: colors.redD,
        fontSize: textScale(14),
        fontWeight: "500"
    },
    emailstyle:
    {
        fontSize: textScale(14),
        color: colors.blackB,
        borderWidth: moderateScale(0.9),
        paddingHorizontal: moderateScaleVertical(10),
    },

    passstyle:
    {

        fontSize: textScale(14),
        color: colors.black
    },
    hideshowstyle:
    {
        paddingRight: moderateScale(10),
    },
    eyestyle:
    {
        marginTop: moderateScale(8),
    },

    loginforgetstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScaleVertical(20),
        paddingVertical: moderateScaleVertical(10),

    },
    phonestyle:
    {
        color: colors.blue,
        // flexDirection: "row",
        // justifyContent: "space-between",
        //  marginTop: moderateScaleVertical(10),
        paddingVertical: moderateScaleVertical(10),
        paddingLeft: moderateScale(18)


    },
    loginstyle:
    {
        marginTop: moderateScaleVertical(50)
    },
    googlebtn:
    {
        marginTop: moderateScaleVertical(20)
    },
    facebookbtn:
    {
        marginTop: moderateScaleVertical(20)
    },
    bottomstyle:
    {
        marginTop: moderateScaleVertical(10),
        flexDirection: "row", justifyContent: "center",
        marginHorizontal: moderateScaleVertical(27)
    },
    loginbtn: {
        marginTop: moderateScale(50)
    }

})