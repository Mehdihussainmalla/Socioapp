import React from "react";
import {StyleSheet} from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    titleview:
    { 
        paddingVertical:moderateScaleVertical(20),
         marginLeft: moderateScaleVertical(15) 
    },
    textheading:
    { fontSize:textScale(17),
         fontWeight: "600",
     paddingVertical:moderateScaleVertical(10)
     },
     desctext:
     {
          fontSize:textScale(15), 
        fontWeight: "400", 
    },
    codeview:
    {
        alignContent: "center",

        marginTop:moderateScaleVertical(50),
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
