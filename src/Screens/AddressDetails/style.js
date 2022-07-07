import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { height, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    fullnametxt:
    {
        borderWidth: moderateScale(0.9),
        marginVertical: moderateScale(20),
    },
    phonestyle:
    {
        borderWidth: moderateScale(0.9),
        marginVertical: moderateScale(10),
    },
    alternatenumstyle:
    {
        color: colors.blue,
        fontWeight: "300",
        paddingLeft: moderateScale(10)
    },
    mainstylepincode:
    {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: moderateScale(15)
    },
    pinview:
    {
        flex: 0.5
    },
    pincodeinput:
    {
        borderWidth: moderateScale(0.9)
    },
    locationstyle:
    {
        flex: 0.5,
        marginRight: moderateScale(10),
        marginTop: moderateScale(5)
    },
    gpsstyle:
    {
        backgroundColor: colors.blue,
        flexDirection: "row",
        justifyContent: 'center',
    },
    gpsicon:
    {
        tintColor: colors.white,
        marginTop: moderateScale(6),
        marginLeft: moderateScale(0)
    },
    currentstyle:
    {
        color: colors.white,
        paddingTop: moderateScale(6),
        fontWeight: "600",
        padding: moderateScale(2)
    },
    statecitystyle:
    {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: moderateScale(15)
    },
    statestyle:
    {
        flex: 0.5
    },
    stateinput:
    {
        borderWidth: moderateScale(0.9),
    },
    citystyle:
    {
        flex: 0.5
    },
    cityinput:
    {
        borderWidth: moderateScale(0.9)
    },
    houseinput:
    {
        borderWidth: moderateScale(0.9),
        marginTop: moderateScale(15)
    },
    roadinput:
    {
        borderWidth: moderateScale(0.9),
        marginTop: moderateScale(15)
    },
    showstyle:
    {
        marginTop: moderateScale(16)
    },
    showtxt:
    {
        fontWeight: "300",
        color: colors.blue
    },
    closebtn:
    {
        backgroundColor: colors.blue,
        width: width / moderateScale(5),
        borderRadius: moderateScale(10),
        marginLeft: moderateScale(10)
    },
    closetxt:
    {
        color: colors.white,
        fontWeight: "500",
        paddingLeft: moderateScale(20),
        padding: moderateScale(5)
    },

    typestyle:
    {
        marginTop: moderateScale(16)
    },
    typetxt:
    {
        fontWeight: "500",
        color: colors.blackOpacity66
    },
    typeaddress:
    {
        flexDirection: "row",
        marginTop: moderateScale(20)
    },
    homeiconstyle:
    {
        flexDirection: "row",
        justifyContent: "flex-start",
        flex: 0.3,
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(20),
        // backgroundColor:"grey"
    },
    homeicon:
    {
        tintColor: colors.blue
    },
    hometxt:
    {
        paddingLeft: moderateScale(10),
        alignSelf: "center",
        fontWeight: "500",
        color: colors.blackOpacity66
    },
    workiconstyle:
    {
        flexDirection: "row",
        justifyContent: "center",
        flex: 0.4,
        marginLeft: moderateScale(25),
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(20),
    },
    officeicon:
    {
        tintColor: colors.blue,
        marginTop: moderateScale(8)
    },
    officetxt:
    {
        paddingLeft: moderateScale(10),
        alignSelf: "center",
        fontWeight: "500",
        color: colors.blackOpacity66
    },
    btnstyle:
    {
        marginTop: moderateScale(110),
        width: "95%",
        marginLeft: moderateScale(10),
        // backgroundColor:colors.blue
    }
})
