import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    imgstyle:
    {
        height: "38%",
        marginTop: 10,
        marginHorizontal: 10
    },
    img:
    {
        width: 80,
        height: 80,
    },
    displayview:
    {
        marginTop: 20
    },
    displaystyle:
    {
        fontWeight: "700", color: colors.blackOpacity66
    },
    name:
    {
        fontWeight: "700", color: colors.blackOpacity66
    },
    email:
    {
        fontWeight: "400", color: colors.blackOpacity43
    },
    member:
        { color: colors.green },
    descstyle:
    {
        marginHorizontal: 8, marginTop: 10
    },
    desc:
        { color: colors.blackOpacity43 },
    imagestyle:
    {
        backgroundColor: "#F7CB00",
        marginVertical: 10,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: 1,
        borderWidth: 0.5,
    },
    profilestyle:
    {
        flexDirection: "column",
        marginHorizontal: 1,
    },
    profiletxt:
    {
        marginTop: moderateScale(5),
        color: colors.white,
        fontWeight: "800"
    },
    profiledesc:
    {
        marginTop: moderateScale(10),
        color: colors.white,
        fontSize: textScale(12)
    },
    orderstyle:
    {
        marginHorizontal: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    orderview:
    {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    ordericon:
    {
        marginTop: moderateScale(3)
    },
    ordertxt:
    {
        marginRight: 10,
        paddingLeft: 10,
        fontSize: textScale(13)
    }
})