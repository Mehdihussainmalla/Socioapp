import React, { useContext } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity } from "react-native"
import navigationStrings from '../navigation/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { height, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Home from '../Screens/Home/Home';
import { AuthContext } from '../navigation/AuthProvider';
import { showMessage } from 'react-native-flash-message';
import strings from '../constants/lang';
import actions from '../redux/actions';

function CustomDrawer(props) {
    // const { user, logout } = useContext(AuthContext);
    // console.log("user is ", user?._user?.email)
    const { navigation } = props;

    const handleLogout = () => {
        actions.Logout();
        showMessage({
            message: "Logout Sucessfully",
            type: "success"
        })
    }

    const handleScreen = () => {
        navigation.navigate(navigationStrings.HOME)

    }
    return (
        <DrawerContentScrollView style={{
            backgroundColor: colors.blackOpacity30,

        }} {...props}>

            <View style={{
                backgroundColor: colors.blackOpacity66,
                height: height / 5
            }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.closeDrawer()}
                    style={{
                        alignItems: "flex-end",
                        paddingVertical: moderateScaleVertical(10),
                        paddingRight: moderateScaleVertical(10),
                    }}>
                    <Image source={imagePath.close_icon}
                        style={{
                            backgroundColor: colors.white,
                            paddingVertical: moderateScaleVertical(8),
                            paddingHorizontal: moderateScaleVertical(8)
                        }} />

                </TouchableOpacity>

                <View style={{
                    justifyContent: "center", alignItems: "center",
                    height: "50%", width: "50%", alignSelf: "center", marginTop: 1,
                }}>
                    <Image style={{
                        height: moderateVerticalScale(100),
                        width: width / 3.6,
                        borderRadius: moderateScale(width / 7),
                    }}
                        source={imagePath.profile_pic} />
                </View>
                <View style={{
                    paddingVertical: moderateScaleVertical(5),
                    marginTop: moderateScaleVertical(14), alignSelf: 'center'
                }}>
                    {/* <Text style={{ fontSize: textScale(12), color: colors.white, fontWeight: "800" }}>{user?._user?.email}</Text> */}
                </View>
            </View>

            <TouchableOpacity onPress={() => handleScreen()}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(20),
                    marginTop: moderateScale(20)
                }}>
                <Image style={{ tintColor: "white", marginTop: moderateScaleVertical(5) }}
                    source={imagePath.profile_icon} />
                <Text style={{
                    color: colors.white,
                    fontSize: textScale(15), fontWeight: "500",
                    paddingLeft: moderateVerticalScale(10),
                    paddingTop: moderateScale(5)
                }}
                >{strings.HOME}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(22),
                    marginTop: moderateScale(15)
                }}>
                <Image style={{ tintColor: "white", }}
                    source={imagePath.search_icon} />
                <Text style={{
                    color: colors.white,
                    fontSize: textScale(15), fontWeight: "500",
                    paddingLeft: moderateVerticalScale(10),
                    paddingTop: moderateScale(5)
                }}
                >{strings.SEARCH}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(25),
                    marginTop: moderateScale(15)
                }}>
                <Image style={{ tintColor: "white", marginTop: 8, width: width / 16, height: height / 35 }}
                    source={imagePath.setting_icon} />
                <Text style={{
                    color: colors.white,
                    fontSize: textScale(15), fontWeight: "500",
                    paddingLeft: moderateVerticalScale(10),
                    paddingTop: moderateScale(5)
                }}
                >{strings.SETTINGS}</Text>
            </TouchableOpacity>

            <View

                style={{

                    marginLeft: moderateScaleVertical(25),
                    marginTop: moderateScale(15),
                    paddingTop: moderateScaleVertical(390),

                }}>
                <TouchableOpacity

                    style={{ flexDirection: "row", }}
                    activeOpacity={0.5}
                    onPress={()=>handleLogout()}

                // onPress={() => logout()}
                >
                    <Image style={{ tintColor: colors.white, width: width / 12,}}
                        source={imagePath.logout_icon} />
                    <Text style={{

                        color: colors.white,
                        fontSize: textScale(17), fontWeight: "500",
                        paddingLeft: moderateVerticalScale(10),
                    }}
                    >{strings.SIGN_OUT}</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;