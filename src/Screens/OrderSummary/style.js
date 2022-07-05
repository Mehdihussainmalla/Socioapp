import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        // borderWidth: 0.9,
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(20),
        marginRight: moderateScale(10),
        height: moderateScale(135),
        justifyContent: "center",
        paddingHorizontal: 10,
     





    },
    imagestyle: {
        width: width / moderateScale(3),
        height: moderateScale(50),
        marginTop: moderateScale(30),
        alignSelf: "center"

    },
    namestyle: {
        color: colors.redColor,
        fontWeight: "600",
        marginBottom: moderateScale(1),
        justifyContent: "center",
        alignSelf: "center"
    },
    priceview:
    {
        backgroundColor: colors.redB,
    },
    pricestyle:
    {
        fontSize: textScale(14),
        color: colors.white,
        fontWeight: "500",
        marginBottom: moderateScale(1),
        alignSelf: "center",
    },
    descstyle:
    {
        fontWeight: "500",
        marginBottom: moderateScale(1),
        alignSelf:"center"
    },
    productstyle:
    {
        fontWeight: "300",

    },
    ratingstyle:
    {
        fontSize: textScale(18),
        color: colors.yellowC,
        fontWeight: "500",

    }
})