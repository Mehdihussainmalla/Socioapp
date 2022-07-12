import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from '../../styles/colors';
import { textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container:
    {
        flexlex: 1
    },
    optionstyle:
    {
        marginTop: moderateScale(20)
    },
    optiontxt:
    {
        fontWeight: "700",
        fontSize: moderateScale(16),
        color: colors.blackOpacity70,
    },
    mainstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(22),
        borderBottomWidth: moderateScale(0.3),
        paddingBottom: moderateScale(10),
        borderBottomColor: "grey",
    },

    paymethodstyle:
    {
        flexDirection: "row",
    },
    icon_style:
    {
        tintColor: colors.blue,
        marginTop: 0
    },
    txtstyle:
    {
        paddingLeft: moderateScale(10),
        fontWeight: "600",
        fontSize: textScale(14),
        color: colors.blackOpacity70
    },
    btnstyle:
    {
        marginTop: moderateScale(300)
    }
});