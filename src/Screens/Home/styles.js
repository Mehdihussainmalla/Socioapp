import React from "react";
import { Stylesheet } from "react-native"
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
export const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greyD,
    },
    drawerstyle: {

        marginTop: moderateVerticalScale(15),
        marginHorizontal: moderateVerticalScale(10)

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
    signview: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    },
    signtext: {
        fontSize: textScale(20),
        color: 'red'
    }
})