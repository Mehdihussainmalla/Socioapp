//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect, useContext } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from "./AuthProvider";
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const Routes = () => {
    const {user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '',
          });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
        
        

    }, [])
    if (initializing) return null;
    return (
        <NavigationContainer>
            {user? MainStack(Stack) : AuthStack(Stack)}
        </NavigationContainer>

    );
};


export default Routes;
