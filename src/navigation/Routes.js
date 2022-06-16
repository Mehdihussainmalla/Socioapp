//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect, useContext } from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from "./AuthProvider";
import auth from '@react-native-firebase/auth';
import IntroStack from './IntroStack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

const Routes = () => {

    const userData = useSelector((state) => state?.userStatus?.userData);
    console.log(userData, "userdata>>>>>>>>>")

    return (
        <NavigationContainer>
            {userData ? MainStack(Stack) : AuthStack(Stack)}
        </NavigationContainer>

    );
};


export default Routes;
