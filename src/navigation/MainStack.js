import React from 'react';
import { View, Text } from 'react-native';
import { Home } from '../Screens';
import DrawerStack from './DrawerStack';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';


const MainStack = (Stack) => {
   return (
      <>
         <Stack.Navigator  options={{ headerShown: false }}>
            <Stack.Screen options={{ headerShown: false }} name={navigationStrings.TABSTACK}
               component={TabStack} />
            <Stack.Screen options={{ headerShown: false }} name={navigationStrings.DRAWER}
               component={DrawerStack}  />
         </Stack.Navigator>
      </>
   );
};

export default MainStack;
