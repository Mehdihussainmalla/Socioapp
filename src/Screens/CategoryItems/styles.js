
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container:
    {
        padding: moderateScale(5),
        borderWidth: 0.5,
        margin: moderateScale(8),
        height: moderateScale(140),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
    },
    buttonstyle: {
        width: "85%", height: moderateScale(38),
        marginTop: moderateScale(10),
    },
    desc:
    {
        width: width / 2.3,
        paddingLeft: moderateScale(10),
        paddingTop: moderateScale(5)
    },
    ratestyle:
    {
        color: colors.redB,
        paddingLeft: moderateScale(10),

    },
    accorystyle:
    {
        textAlign: 'center',
        fontSize: textScale(14),
        textAlign: 'justify',
        marginBottom: moderateScale(6),
        paddingLeft: moderateScale(10),
        fontWeight: "500"
    },
    compstyle:
    {
        width: width / moderateScale(2.3),
        paddingLeft: moderateScale(10)
    },
    imgstyle:
    {
        width: width / 2.3,
        height: width / 3,
    },
    headingstyle:
    {
        fontSize: textScale(12),
        color: colors.blackOpacity66,
        alignSelf: "center"
    },
    nostockstyle:
    {
       // flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    txt:
    {
        fontSize: textScale(18),
        fontWeight: '500',
        color: 'red'
    }

});