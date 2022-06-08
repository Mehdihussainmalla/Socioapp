import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScaleVertical(5),
        flex: 0.5


    },
    headertext: {
        fontSize: textScale(15),
        fontWeight: "500",
        marginTop: moderateScaleVertical(10),
        alignContent: "center",
        alignSelf: "center",
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
        fontSize: textScale(12),
        fontWeight: "400",
    }

})