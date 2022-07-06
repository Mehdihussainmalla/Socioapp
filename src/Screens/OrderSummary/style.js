import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { height, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    itemcontainer: {
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
        alignSelf: "center"
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
        alignSelf: "center"

    },
    container:
    {
        flex: 1.5,
    },
    delivertstyle:
    {
        marginTop: moderateScale(10),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    delivertxt:
    {
        fontWeight: "600"
    },
    changestyle:
    {
        borderWidth: moderateScale(0.5),
        padding: moderateScale(4)
    },
    changetxt:
    {
        color: colors.blue
    },
    emailtxt:
    {
        fontWeight: "600"
    },
    addressstyle:
    {
        marginTop: moderateScale(8)
    },
    addtxt:
    {
        color: colors.blackOpacity66
    },
    contacttxt:
    {
        color: colors.blackOpacity70
    },
    mainview:
    {
        flex: 0.2,
    },
    itemview:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(15)
    },
    iconstyle:
    {
        flexDirection: "row",
        justifyContent: "flex-start",
        flex: 0.7
    },
    tintstyle:
    {
        tintColor: colors.blue
    },
    delivertime:
    {
        fontWeight: "600",
        paddingLeft: moderateScale(29)
    },

    txtstyle:
    {
        fontWeight: "400",
        paddingLeft: moderateScale(29)
    },
    upiicon:
    {
        tintColor: colors.blue,
        height: height / moderateScale(30),
        width: width / moderateScale(12)
    },
    upitxt:
    {
        fontWeight: "400",
        paddingLeft: moderateScale(29)
    },
    similarproduct:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: moderateScale(1)
    },
    similartxt:
    {
        fontWeight: "600"
    },
    viewallstyle:
    {
        borderWidth: moderateScale(0.4),
        padding: moderateScale(4)
    },
    viewalltxt:
    { color:colors.blue
     },
     




})