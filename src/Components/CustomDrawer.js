import React, { useContext, useState } from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import navigationStrings from '../navigation/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { height, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import strings from '../constants/lang';
import actions from '../redux/actions';
import { useSelector } from 'react-redux';

function CustomDrawer(props) {
    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    // console.log(userData, "userdata from drawer");
    const email = userData?.email;
    const displayName = userData?.displayName;
    const photo = userData?.photoURL;
    const Uid = userData?.uid;
    const { navigation } = props;


    const handleLogout = () => {
        actions.Logout();
    }

    const handleScreen = () => {
        navigation.navigate(navigationStrings.HOME)

    }


    return (
        <DrawerContentScrollView style={styles.drawercontext} {...props}>

            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.closeDrawer()}
                    style={styles.imageview}>
                    <Image source={imagePath.close_icon}
                        style={styles.imagestyle}
                    />
                </TouchableOpacity>

                <View style={styles.imgview}>
                    {!!photo ? <Image style={styles.img}
                        source={{ uri: photo }} /> :

                        <Image style={styles.profileimage}
                            source={imagePath.profile_pic} />}

                </View>
                <View style={styles.displayview}>
                    {!!displayName ? <Text style={styles.displaytxt}>
                        {displayName}</Text> : <Text style={styles.nametxt}>Muntazir Mehdi</Text>}
                    {email ? <Text style={styles.emailtxt}>{email}</Text> : <Text>forexample@gmail.com</Text>}
                </View>
            </View>

            <TouchableOpacity onPress={() => handleScreen()}
                activeOpacity={0.5}
                style={styles.homestyle}>
                <Image style={styles.homeicon}
                    source={imagePath.profile_icon} />
                <Text style={styles.hometxt}
                >{strings.HOME}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={styles.searchstyle}>
                <Image style={styles.searchicon}
                    source={imagePath.search_icon} />
                <Text style={styles.searchtxt}
                >{strings.SEARCH}</Text>
            </TouchableOpacity>


            {/*//..............admin...............................  */}
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADMIN)}
                activeOpacity={0.5}
                style={styles.adminstyle}>
                <Image style={styles.adminicon}
                    source={imagePath.admin_icon} />
                <Text style={styles.admintxt}
                >{strings.ADMIN}</Text>
            </TouchableOpacity>
            {/* //..........settings....................... */}
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SETTINGS)}
                activeOpacity={0.5}
                style={styles.settingstyle}>
                <Image style={styles.settingicon}
                    source={imagePath.setting_icon} />
                <Text style={styles.settingtxt}
                >{strings.SETTINGS}</Text>
            </TouchableOpacity>

            <View
                style={styles.btnview}>
                <TouchableOpacity

                    style={styles.btnstyle}
                    activeOpacity={0.5}
                    onPress={() => handleLogout()}

                // onPress={() => logout()}
                >
                    <Image style={styles.logouticon}
                        source={imagePath.logout_icon} />
                    <Text style={styles.logouttxt}
                    >{strings.SIGN_OUT}</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({

    container:
    {
        height: height / moderateScale(5)
    },
    drawercontext:
    {
        backgroundColor: colors.blackOpacity05,

    },
    imageview:
    {
        alignItems: "flex-end",
        paddingVertical: moderateScaleVertical(10),
        paddingRight: moderateScaleVertical(10),

    },
    imagestyle:
    {
        backgroundColor: colors.blackOpacity10,
        paddingVertical: moderateScaleVertical(8),
        paddingHorizontal: moderateScaleVertical(8),

    },
    imgview: {
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
        width: "50%",
        alignSelf: "center",
        marginTop: moderateScale(1),
    },
    img: {
        height: moderateVerticalScale(100),
        width: width / 3.6,
        borderRadius: moderateScale(width / 7),
    },
    profileimage:
    {
        height: moderateVerticalScale(100),
        width: width / 3.6,
        borderRadius: moderateScale(width / 7),
    },
    displayview:
    {
        paddingVertical: moderateScaleVertical(5),
        marginTop: moderateScaleVertical(9),
        alignSelf: 'center'
    },
    displaytxt:
    {
        fontSize: textScale(12),
        // color: colors.white,
        fontWeight: "500",
    },
    nametxt:
    {
        fontSize: textScale(12),
        // color: colors.blackOpacity43,
        fontWeight: "500",
        marginTop: moderateScale(5)
    },
    emailtxt:
    {
        fontSize: textScale(12),
        // color: colors.white,
        fontWeight: "500",
        color:colors.redB
    },
    homestyle:
    {
        flexDirection: "row",
        marginLeft: moderateScaleVertical(20),
        marginTop: moderateScale(20)
    },
    homeicon:
    {
        // tintColor: colors.grayOpacity51,
        marginTop: moderateScaleVertical(5),
        // tintColor:"red"
    },
    hometxt: {
        // color: colors.white,
        fontSize: textScale(15), fontWeight: "500",
        paddingLeft: moderateVerticalScale(10),
        paddingTop: moderateScale(5),

    },
    searchstyle:
    {
        flexDirection: "row",
        marginLeft: moderateScaleVertical(22),
        marginTop: moderateScale(15)
    },
    searchicon:
    {
        // tintColor: colors.grayOpacity51,
    },
    searchtxt:
    {
        // color: colors.white,
        fontSize: textScale(15),
        fontWeight: "500",
        paddingLeft: moderateVerticalScale(10),
        paddingTop: moderateScale(5)
    },
    adminstyle:
    {
        flexDirection: "row",
        marginLeft: moderateScaleVertical(25),
        marginTop: moderateScale(15)
    },
    adminicon:
    {
        // tintColor: colors.grayOpacity51,
        marginTop: moderateScale(8),
        width: width / moderateScale(16),
        height: height / moderateScale(35)
    },
    admintxt:
    {
        // color: colors.white,
        fontSize: textScale(15), fontWeight: "500",
        paddingLeft: moderateVerticalScale(10),
        paddingTop: moderateScale(5)
    },
    settingstyle:
    {
        flexDirection: "row",
        marginLeft: moderateScaleVertical(25),
        marginTop: moderateScale(15)
    },
    settingicon:
    {
        // tintColor: "grey",
        marginTop: moderateScaleVertical(8),
        width: width / moderateScale(16),
        height: height / moderateScale(35),

    },
    settingtxt:
    {
        // color: colors.white,
        fontSize: textScale(15),
        fontWeight: "500",
        paddingLeft: moderateVerticalScale(10),
        paddingTop: moderateScale(5)
    },
    btnview:
    {

        marginLeft: moderateScaleVertical(25),
        paddingTop: moderateScaleVertical(360),

    },
    btnstyle:
    {
        flexDirection: "row",
    },
    logouticon:
    {
        // tintColor: colors.grayOpacity51,
        width: width / moderateScale(12),
    },
    logouttxt:
    {

        // color: colors.grayOpacity51,
        fontSize: textScale(17),
        fontWeight: "500",
        paddingLeft: moderateVerticalScale(10),

    }


})
export default CustomDrawer;