import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Image } from 'react-native'
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import navigationStrings from "./navigationStrings";
import Home from "../Screens/Home/Home";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { Profile, SearchScreen } from "../Screens";
const Tab = createBottomTabNavigator();
export default function TabStack() {

    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.redB,
                tabBarStyle: {
                    // marginBottom:3,
                    height: moderateVerticalScale(60),
                    paddingBottom: moderateVerticalScale(5),
                    borderToprRadius: moderateScale(15),
                    borderTopStartRadius: moderateScale(3),
                    backgroundColor: colors.Light_blue
                }
            }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focussed }) => {
                        return (
                            <Image style={{ tintColor: focussed ? colors.white : colors.redB }}
                                source={imagePath.Home_icon} />
                        )
                    }
                }}
                    name={navigationStrings.HOME} component={Home}
                />
                 <Tab.Screen options={{
                    tabBarIcon: ({ focussed }) => {
                        return (
                            <Image style={{ tintColor: focussed ? colors.white : colors.redB }}
                                source={imagePath.search_icon} />
                        )
                    }
                }}
                    name={navigationStrings.SEARCH_SCREEN} component={SearchScreen}
                />
                <Tab.Screen options={{
                    tabBarIcon: ({ focussed }) => {
                        return (
                            <Image style={{ tintColor: focussed ? colors.white : colors.redB }}
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