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

    const userData=useSelector((state)=>state?.userStatus?.userData);
    console.log(userData,"userdata>>>>>>>>>")
    const {user,setUser} = useContext(AuthContext);
    console.log(user,"user from routes")
    const [initializing, setInitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        // GoogleSignin.configure({
        //     webClientId: '',
        //   });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
        
        

    }, [])
    if (initializing) return null;
    return (
        <NavigationContainer>
            {user? MainStack(Stack) :   AuthStack(Stack)}
        </NavigationContainer>

    );
};


export default Routes;
