import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({

    headertxt:
    {
        flexDirection: "row",
        justifyContent: "space-between",

    }
    , headerstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: moderateScale(220),
    }
    , container:
    {
        marginVertical: moderateScale(20),
    },
    imgstyle:
    {
        height: "70%",
        width: "70%",
        alignSelf: "center"
    },
    txtstyle:
    {
        color: colors.blackC,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: moderateScale(10),
    },
    namestyle:
    {
        color: colors.blackC,
        alignSelf: "center",
        marginTop: moderateScale(10),
        fontWeight: "500"
    },
    pricestyle:
    {
        color: colors.redB,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: moderateScale(10)
    },
    descstyle:
    {
        color: colors.blackC,
        alignSelf: "center",
        marginTop: moderateScale(10)
    },
    discountstyle:
    {
        backgroundColor: colors.redB,
        alignSelf: "center",
        marginTop: moderateScale(10),
        color: colors.white,
        padding: moderateScale(3),
        fontWeight: "700"
    },
    headericon:
    {
        marginLeft: moderateScale(90),
        // position:"absolute",
        paddingRight: moderateScale(20)
    },
    nametxt:
        { paddingTop: 8, fontWeight: "bold" }
})