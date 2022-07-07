import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { textScale, width } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {

        padding: moderateScale(2),
        borderWidth: moderateScale(0.5),
        margin: moderateScale(5),
        height: moderateScale(150),
        borderRadius: moderateScale(5),
        flexDirection: 'row',

    },
    imgstyle:
    {
        width: width / moderateScale(2.3),
        height: width / moderateScale(3),
    },
    textstyle:
    {
        width: width / moderateScale(2.3),
        paddingLeft: moderateScale(10)
    },
    productstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    productnamestyle:
    {
        paddingLeft: moderateScale(10),
        fontSize: textScale(14),
        fontWeight: "800"
    },
    deletestyle:
    {
        alignSelf: "flex-end",
        marginTop: moderateScale(5)
    },
    categorystyle:
    {
        fontWeight: "600",
        fontSize: textScale(12),
        paddingLeft: moderateScale(20),
        color: colors.blackOpacity70,

    },
    pricestyle:
    {
        color: colors.redB,
        paddingLeft: 10
    },
    descriptionstyle:
    {
        fontWeight: "600",
        fontSize: textScale(12),
        paddingLeft: moderateScale(10),
        color: colors.blackOpacity70,
    },
    counterstyle:
    {
        flexDirection: "row",
        alignSelf: "center",
        // marginTop: 8
    },
    decrementstyle:
    {
        fontSize: textScale(20),
        backgroundColor: colors.blackOpacity40,
        color: colors.white,
        fontWeight: "bold",
        marginBottom: moderateScale(8),
        paddingHorizontal: moderateScale(5),
        alignSelf: "center"
    },
    incrementstyle:
    {
        fontSize: textScale(20),
        backgroundColor: colors.blackOpacity40,
        color: colors.white,
        fontWeight: "bold",
        marginBottom: moderateScale(8),
        paddingHorizontal: moderateScale(4),
        alignSelf: "center",

    },
    numberstyle:
    {
        fontSize: textScale(20),
        color: colors.redD
    },
    buystyle:
        { backgroundColor: colors.redB },
    buytxt:
    {
        fontSize: textScale(12),
        color: colors.white,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: moderateScale(3),
        bottom: moderateScale(1)
    },
    headstyle:
    {
        flexDirection: "row"
    },
})
