import React from 'react';
import { View, Text } from 'react-native';
import { Home } from '../Screens';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';


const MainStack = (Stack) => {
    return (
       <>
       <Stack.Navigator options={{headerShown:false}}>
       <Stack.Screen name={navigationStrings.HOME}
                    component={TabStack}  options={{ headerShown: false }} />
       {/* <Stack.Screen name={navigationStrings.HOME}
                    component={Home}  options={{ headerShown: false }} />
                 */}

       </Stack.Navigator>
       </>
    );
};

export default MainStack;
