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
        // alignItems: 'center',
        // borderWidth: 0.5,
        // marginLeft: moderateScaleVertical(30),
        // marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(45),
        // backgroundColor: colors.greyA
    },
    passwiew: {
        // backgroundColor:'red',
      borderWidth: 0.5,
        // alignItems: 'center',
        // borderWidth: 0.5,
     marginLeft: moderateScaleVertical(13),
        marginRight: moderateScaleVertical(30),
        marginTop: moderateScaleVertical(20),
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: colors.greyA
        borderRadius:moderateScale(5)
    },
    belowdesctext: {
        fontSize: textScale(12),
        color: colors.blue
    },
    bottomdesc: {
        fontSize: textScale(12),
        paddingHorizontal: 10
    }
})