import React from "react";
import {StyleSheet} from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
import colors from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#2c3e50',
    },
    productstyle: {
       // marginVertical: moderateScaleVertical(10),
        backgroundColor: colors.redNew,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        marginTop: moderateScale(10),
        borderRadius: moderateVerticalScale(10),
        borderWidth: moderateScale(2)

    },
    btnstyle: {
        fontSize: textScale(15),
        fontWeight: "500", 
        marginVertical:10,
        marginHorizontal:10
    },
    accessoriesstyle:
    {

        backgroundColor: colors.redNew,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        marginTop: moderateScale(10),
        borderRadius: moderateVerticalScale(10),
        borderWidth: moderateScale(2)
    }
    ,
    btnstyle2: {
        fontSize: textScale(15),
        fontWeight: "500", 
        marginVertical:10,
        marginHorizontal:20
    },

});