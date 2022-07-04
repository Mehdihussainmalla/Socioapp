import React from 'react';
import { Accessories, Admin, categoryItems, Offers, OrderProduct, OrderSummary, Products, ProductScreen, SearchScreen, Settings, Slider } from '../Screens';

import DrawerStack from './DrawerStack';
import navigationStrings from './navigationStrings';


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
            <Stack.Screen name={navigationStrings.ADMIN}
               options={{ headerShown: false }}
               component={Admin} />
            <Stack.Screen name={navigationStrings.ACCESSORIES}
               options={{ headerShown: false }}
               component={Accessories} />
            <Stack.Screen name={navigationStrings.CATEGORY_ITEMS}
               options={{ headerShown: false }}
               component={categoryItems} />
            <Stack.Screen name={navigationStrings.ITEM_DETAILS}
               options={{ headerShown: false }}
               component={Slider} />
            <Stack.Screen name={navigationStrings.OFFERS}
               options={{ headerShown: false }}
               component={Offers} />
            <Stack.Screen name={navigationStrings.PRODUCT_SCREEN}
               options={{ headerShown: false }}
               component={ProductScreen} />

            <Stack.Screen name={navigationStrings.ORDER_PRODUCT}
               options={{ headerShown: false }}
               component={OrderProduct} />
               <Stack.Screen name={navigationStrings.ORDER_SUMMARY}
               options={{ headerShown: false }}
               component={OrderSummary} />

         </Stack.Navigator>
      </>
   );
};

export default MainStack;
