import React from 'react';
import { View, Text } from 'react-native';
import { Home, Products, SearchScreen, Settings } from '../Screens';
import DrawerStack from './DrawerStack';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';


const MainStack = (Stack) => {
   return (
      <>
         <Stack.Navigator  >

            <Stack.Screen
               options={{ headerShown: false }}
               name={navigationStrings.DRAWER}
               component={DrawerStack} />
            <Stack.Screen name={navigationStrings.SEARCH_SCREEN}
               options={{ headerShown: false }}
               component={SearchScreen} />


            <Stack.Screen name={navigationStrings.SETTINGS}
               options={{ headerShown: false }}
               component={Settings} />
            <Stack.Screen name={navigationStrings.PRODUCTS}
               options={{ headerShown: false }}
               component={Products} />
         </Stack.Navigator>
      </>
   );
};

export default MainStack;
