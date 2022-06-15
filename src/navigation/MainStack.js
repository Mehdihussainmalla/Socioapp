import React from 'react';
import { View, Text } from 'react-native';
import { Home, SearchScreen } from '../Screens';
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
               component={SearchScreen} />
               
            {/* <Stack.Screen name={navigationStrings.HOME}
               component={Home} /> */}
            {/* <Stack.Screen 
            options={{ headerShown: true }} 
            name={navigationStrings.TABSTACK}
               component={TabStack} /> */}




         </Stack.Navigator>
      </>
   );
};

export default MainStack;
