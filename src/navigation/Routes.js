//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

const Routes = () => {

    const userData = useSelector((state) => state?.userStatus?.userData);
    // console.log(userData, "userdata>>>>>>>>>")

    return (
        <NavigationContainer>
            {userData ? MainStack(Stack) : AuthStack(Stack)}
        </NavigationContainer>

    );
};


export default Routes;
