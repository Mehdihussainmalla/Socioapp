import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container:
    {
        height: "50%",
        width: "100%%",
        marginVertical: moderateScale(20),
    },
    productstyle:
    {
        flexDirection: "row"
    },
    imgstyle:
    {
        height: "100%", width: "40%"
    },
    namestyle:
    {
        flexDirection: "column"
    },
    productnamestyle:
    {
        paddingLeft: 5, fontWeight: "600"
    },
    descstyle:
    {
        paddingLeft: moderateScale(5),
        color: colors.blackOpacity66
    },
    pricestyle:
    {
        paddingLeft: moderateScale(5)
    },
    amountrange:
    {
        color: colors.redB
    },
    pricetxt:
    {
        color: colors.green,
        fontWeight: "500"
    },
    ratingstyle:
    {
        backgroundColor: "green",
        width: "30%",
        marginLeft: moderateVerticalScale(5),
        marginTop: 2
    },
    categorytxt:
    {
        paddingLeft: moderateScale(5)
    },
    ratingtxt:
    {
        fontSize: textScale(20),
        alignSelf: "center",
        color: colors.yellowB,
        paddingTop: moderateScale(5)
    },
    dropdownstyle:
    {
        marginTop: moderateScale(10),
        borderWidth: moderateScale(0.4),
        width: "20%",
        flexDirection: "row",
        alignSelf: "flex-start"
    },
    droptxt:
    {
        paddingTop: moderateScale(10),
        paddingLeft: moderateScale(2)
    },
    timestyle:
    {
        color: colors.blackOpacity66
    },
    timeview:
    {
        marginTop: moderateScale(5)
    },
    removestyle:
    {
        flexDirection: "row",
        borderWidth: moderateScale(0.17),
        marginVertical: moderateScale(8),
        paddingTop: moderateScale(5),
        height: width / moderateScale(12)
    },
    flexstyle:
    {
        flex: 0.5
    },
    saveimgstyle:
    {
        flexDirection: "row",
        justifyContent: 'center',
    },
    savetxt:
    {
        alignSelf: "center",
        paddingTop: moderateScaleVertical(1)
    },
    removecontainer:
    {
        flex: 0.5,
        borderLeftWidth: moderateScale(0.4),
    },
    removestyling:
    {
        flexDirection: "row",
        justifyContent: 'center',
    },
    img:
    {
        marginTop: moderateScale(1),
        tintColor: colors.blue
    },
    removetxt:
    {
        alignSelf: "center",
        paddingTop: moderateScale(1)
    },
    detailstyle:
    {
        fontWeight: "600"
    },
    indetailstyle:
    {
        fontWeight: "500",
        paddingTop: moderateScale(15)
    },
    prictetotal:{marginTop:moderateScale(10)},
    pricedetailtxt:
    {
        fontWeight: "600"
    },
    itemstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10)
    },
    freestyle:
    {
        color: colors.green
    },
    chargeconatiner:
    {
        borderWidth: moderateScale(0.5),
        marginTop: moderateScale(8)
    },
    messagestyle:
    {
        borderTopWidth: moderateScale(0.4),
        marginTop: moderateScale(15)

    },
    messagetxt:
    {
        color: colors.green,
        paddingTop: moderateScale(5)
    },
    buttoncontainer:
    {
        marginTop: moderateScale(100),
        height: "12%",
        borderRadius: moderateScale(10),
        flexDirection: "row"
    },
    ratebutton:
    {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: colors.whiteOpacity77,
        borderWidth: moderateScale(0.5)
    },
    ratebtn:
    {
        alignSelf: "center",
        color: colors.black,
        fontWeight: "600"
    },
    pricedesc:
    {
        justifyContent: 'center',
        color: colors.redB,
        alignSelf: "center"
    },
    continuebtnstyle:
    {
        flex: 0.5,
        justifyContent: 'center',
        borderWidth: moderateScale(0.5),
        backgroundColor: colors.redB
    },
    continuebtn:
    {
        alignSelf: "center",
        color: colors.white,
        fontWeight: "600",
        fontSize: textScale(16)
    },
    totalamount:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10)
    },
    totalcharge:
    {
        fontWeight: "600"
    },
    amounttxt:
    {
        fontWeight: "600"
    },
    pricetotal:
    {
        marginTop: moderateScale(10)
    }



})