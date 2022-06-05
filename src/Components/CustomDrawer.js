import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity } from "react-native"
import navigationStrings from '../navigation/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

function CustomDrawer(props) {
    const { navigation } = props;
    return (
        <DrawerContentScrollView style={{
            backgroundColor: colors.hexacolor,
        }} {...props}>

            <View style={{
                backgroundColor: colors.black,
                paddingVertical: moderateScale(70),
            }}>
               
            </View>
            <View style={{
                    flexDirection: "row",
                    marginLeft: moderateScaleVertical(20),
                    marginTop:moderateScale(20)
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
                </View>

            {/* <DrawerItem
                labelStyle={{ color: colors.white, fontWeight: "500", fontSize: textScale(15) }}
                label={"Home"}
                icon={() => <Image source={imagePath.Home_icon} />}
                onPress={() => navigation.navigate(navigationStrings.HOME)} />

            <DrawerItem label={"profile"}

                labelStyle={{ color: colors.white, fontWeight: "500", fontSize: textScale(15) }}
                icon={() =>
                    <Image source={imagePath.profile_icon} />}
                onPress={() => navigation.navigate(navigationStrings.PROFILE)} /> */}

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;