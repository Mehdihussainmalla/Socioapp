import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Image } from 'react-native'
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import navigationStrings from "./navigationStrings";
import Home from "../Screens/Home/Home";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { Profile, SearchScreen } from "../Screens";
import { moderateScaleVertical } from "../styles/responsiveSize";
const Tab = createBottomTabNavigator();
export default function TabStack() {

    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.redB,
                tabBarInactiveTintColor: colors.black,
                tabBarShowLabel: false,
                tabBarStyle: {
                    // marginBottom:3,
                    height: moderateVerticalScale(60),
                    paddingBottom: moderateVerticalScale(5),
                    borderToprRadius: moderateScale(15),
                    borderTopStartRadius: moderateScale(3),
                    backgroundColor: colors.lightGreyBgB,
                    
                
                }
            }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.redC: colors.black }}
                                source={imagePath.Home_icon} />
                        )
                    }
                }}
                    name={navigationStrings.HOME} component={Home}
                />
                 <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.redC : colors.black ,}}
                                source={imagePath.search_icon} />
                        )
                    }
                }}
                    name={navigationStrings.SEARCH_SCREEN} component={SearchScreen}
                />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.redC : colors.black }}
                                source={imagePath.profile_icon} />
                        )
                    }
                }}
                    name={navigationStrings.PROFILE} component={Profile}
                />
                

            </Tab.Navigator>


        </>
    )
}