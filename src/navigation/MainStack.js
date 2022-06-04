import React from 'react';
import { View, Text } from 'react-native';
import { Home } from '../Screens';
import navigationStrings from './navigationStrings';

const MainStack = (Stack) => {
    return (
       <>
       <Stack.Navigator>
       <Stack.Screen name={navigationStrings.HOME}
                    component={Home}  options={{ headerShown: false }} />

       </Stack.Navigator>
       </>
    );
};

export default MainStack;
