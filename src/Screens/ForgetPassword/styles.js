import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
       
        flex: 1
    },
    titlestyle: {
        paddingHorizontal: moderateScaleVertical(20),
        marginTop: moderateScaleVertical(50),
    },
    input: {
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(0.5),
        marginTop: moderateScaleVertical(20),
        fontSize: textScale(13),
        paddingHorizontal: moderateScale(10)
    },
    titletxt:
    {
        fontSize: textScale(15),
        fontWeight: "500",
    }

})