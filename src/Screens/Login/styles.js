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
        justifyContent: 'center', alignItems: "center"
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
        borderWidth: 0.9,
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
        paddingHorizontal: 10
    },
    forgetstyle:
    {
        alignItems: "flex-end",
        marginHorizontal: moderateScaleVertical(50)
    },
    forgettext:
    {
        alignContent: "flex-end",
        justifyContent: "flex-end", color: colors.blue
    },

})