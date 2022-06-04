import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import navigationStrings from './navigationStrings';
import { Home, Profile } from '../Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName={navigationStrings.HOME}>
                <Drawer.Screen name={navigationStrings.HOME}
                    component={Home} />
                <Drawer.Screen name={navigationStrings.PROFILE}
                    component={Profile} />

            </Drawer.Navigator>
        </>
    )
}

export default DrawerStack

// const styles = StyleSheet.create({})