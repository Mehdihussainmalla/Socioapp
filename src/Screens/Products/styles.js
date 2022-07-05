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
        marginTop: moderateScale(2),
        // flex: 0.1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "baseline",

    },
    imagetext: {
        fontSize: textScale(16),
        alignSelf: "center",
        alignItems: "center",
        color: colors.DarkBlue,
        fontWeight:"500"
    },
    input1: {
        marginTop: moderateVerticalScale(10)
    },
    txtinput1: {
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        color: colors.blackOpacity66,
        fontSize: textScale(14),
    },
    imgstyle:
    {
        height: "20%",
         width: "70%",
        justifyContent: "center",
        alignSelf: "center"
    }
});