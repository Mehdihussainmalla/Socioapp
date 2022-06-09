import React from 'react';
import {
    ForgetPassword,
    Login,
    PhoneLogin,
    phoneLogin,
    SignUp
} from '../Screens';
import navigationStrings from './navigationStrings';


const AuthStack = (Stack) => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={navigationStrings.LOGIN}
                    component={Login} options={{ headerShown: false }} />
                <Stack.Screen name={navigationStrings.SIGNUP}
                    component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name={navigationStrings.FORGETPASSWORD}
                    component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name={navigationStrings.PHONELOGIN}
                    component={PhoneLogin} options={{ headerShown: false }} />

            </Stack.Navigator>
        </>
    );
};

export default AuthStack;
