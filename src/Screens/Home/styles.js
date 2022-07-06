import { StyleSheet } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    Carouselstyle:
    {
        borderWidth: 5,
        padding: 0,
        alignItems: 'center',
        marginHorizontal: 10

    },
    Carouselimg:
    {
        width: width - 0,
        height: width / 2.40,
        borderRadius: 10,
    },
    drawerstyle: {
        flexDirection: "row",
        marginTop: moderateVerticalScale(1),
        marginHorizontal: moderateVerticalScale(10),
        justifyContent: "flex-start",

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
    signstyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    },
    textview: {
        fontSize: textScale(20),
        color: 'red',
        fontWeight: "300"
    },
    searchstyle: {
        flexDirection: "row",
        marginTop: moderateScaleVertical(20),
        justifyContent: "space-between",
        borderRadius: moderateVerticalScale(5),
        borderWidth: 1,
    },
    searchtxt: {
        paddingTop: moderateScale(7),
        paddingHorizontal: moderateScale(15),
        color: colors.blackOpacity43
    },
    searchicon: {
        marginTop: moderateVerticalScale(5),
        marginRight: moderateVerticalScale(10)
    },
    containerstyle: {
        paddingVertical: moderateScale(0),
        marginTop: moderateScale(0)
    },
    dotstyle: {
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(12 / 2)
    },
    inactivedotstyle: {
        width: moderateScale(15),
        height: moderateScale(20),
        borderRadius: moderateScale(20 / 2)
    },
    dotcontainer: {
        marginHorizontal: moderateScale(2),
        paddingTop: 0
    },
    accessorries:
    {
        fontSize: textScale(14),
        fontWeight: "500"
    },
    viewstyle: {
        marginTop: moderateScale(3)

    },
    containerstyle: {
        paddingVertical: 0,

        marginTop: moderateScale(2)
    },
    dotstyle:
    {
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(12 / 2)
    },
    inactivestyle:
    {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: moderateScale(20 / 2)
    },
    dotcontainer:
    {
        marginHorizontal: moderateScale(2),
        paddingTop: moderateScale(5)
    },

})