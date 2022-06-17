import React from "react";
import { StyleSheet } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageview: {
        marginTop: moderateScale(10),
        flex: 0.1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "baseline",
    },
    imagetext: {
        fontSize: textScale(14),
        alignSelf: "center",
        alignItems: "center",
        color: colors.DarkBlue
    },
    input1: {
        marginTop: moderateVerticalScale(10)
    },
});