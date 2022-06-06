import React,{useContext} from 'react';
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

function CustomDrawer(props) {
    const { user} = useContext(AuthContext);
    // console.log("user is ", user?._user?.email)
    const { navigation } = props;
const {logout} =useContext(AuthContext);

    const handleScreen = () => {
        navigation.navigate(navigationStrings.HOME)

    }
    return (
        <DrawerContentScrollView style={{
            backgroundColor: colors.hexacolor,
        }} {...props}>

            <View style={{
                backgroundColor: colors.black,
                height: height / 5
            }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.closeDrawer()}
                    style={{
                        alignItems: "flex-end",
                        paddingVertical: moderateScaleVertical(10),
                        paddingRight: moderateScaleVertical(10)
                    }}>
                    <Text style={{
                        backgroundColor: colors.white,
                        fontSize: textScale(12)
                    }}>Close</Text>

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
                    marginTop: moderateScaleVertical(15), alignSelf: 'center'
                }}>
                    <Text style={{ fontSize: textScale(12), color: colors.white }}>{user?._user?.email}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => handleScreen()}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(20),
                    marginTop: moderateScale(20)
                }}>
                <Image style={{ tintColor: "white", }}
                    source={imagePath.profile_icon} />
                <Text style={{
                    color: colors.white,
                    fontSize: textScale(15), fontWeight: "500",
                    paddingLeft: moderateVerticalScale(10),
                    paddingTop: moderateScale(5)
                }}
                >Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(20),
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
                >Search</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>logout()}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(20),
                    marginTop: moderateScale(15)
                }}>
                <Image style={{ tintColor: colors.white, }}
                    source={imagePath.profile_icon} />
                <Text style={{
                    color: colors.white,
                    fontSize: textScale(15), fontWeight: "500",
                    paddingLeft: moderateVerticalScale(10),
                    paddingTop: moderateScale(5)
                }}
                >SignOut</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;