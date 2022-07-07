import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { height, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    itemcontainer: {
        // borderWidth: 0.9,
        borderRadius: moderateScale(5),
        // marginVertical: moderateScale(25),
        marginRight: moderateScale(10),
        height: moderateScale(135),
        justifyContent: "center",
        paddingHorizontal:moderateScale(10),
        marginTop: moderateScale(15)

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
    nametxt:
    {
        fontWeight: "500",
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
    upistyle:
    {
        flexDirection: "row",

        justifyContent: "space-between",
    },
    itemview:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10),

    },
    iconstyle:
    {
        flexDirection: "row",
        justifyContent: "flex-start",
        flex: 0.7
    },
    tintstyle:
    {
        tintColor: colors.blue,

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
        height: height / moderateScale(35),
        width: width / moderateScale(12),
        alignSelf: "center"

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
        marginBottom: moderateScale(1),
        marginTop: 0
    },
    upiiconstyle:
    {
        marginTop: moderateScale(12),
        tintColor: colors.blue
    },
    similartxt:
    {
        fontWeight: "600"
    },
    viewallstyle:
    {
        borderWidth: moderateScale(0.4),
        padding: moderateScale(4),
        // marginTop:5
    },
    viewalltxt:
    {
        color: colors.blue
    },





})