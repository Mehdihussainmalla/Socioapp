import React from "react";
import { StyleSheet } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row" 
        // flex: 1,
        // backgroundColor: colors.blackOpacity40,
    },
    drawerstyle: {
        flexDirection: "row",
        marginTop: moderateVerticalScale(1),
        marginHorizontal: moderateVerticalScale(10),
        justifyContent: "flex-start",

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
        fontWeight: "300"
    },
    searchstyle: {
        flexDirection: "row",
        marginTop: moderateScaleVertical(20),
        justifyContent: "space-between",
        borderRadius: moderateVerticalScale(5),
        borderWidth: 1,
    },
    searchtxt: {
        paddingTop: moderateScale(7),
        paddingHorizontal: moderateScale(15),
        color: colors.blackOpacity43
    },
    searchicon: {
        marginTop: moderateVerticalScale(5),
        marginRight: moderateVerticalScale(10)
    },
    containerstyle: {
        paddingVertical: 0,
        marginTop: 0
    },
    dotstyle: {
        width: 12, height: 12,
        borderRadius: 12 / 2
    },
    inactivedotstyle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2
    },
    dotcontainer: {
        marginHorizontal: 2,
        paddingTop: 0
    },
    accessorries:
    {
        fontSize: textScale(14),
        fontWeight: "500"
    },
    viewstyle:{ marginTop: moderateScale(3) }
})