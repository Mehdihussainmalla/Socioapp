import React from 'react';
import navigationStrings from './navigationStrings';
import { Home, Profile } from '../Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from './TabStack';
import CustomDrawer from '../Components/CustomDrawer';
import colors from '../styles/colors';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {

    return (
        <>
            <Drawer.Navigator
           
                drawerContent={(props) => <CustomDrawer {...props} />}>

                <Drawer.Screen
                    options={{
                        headerShown: false,
                        drawerActiveTintColor: colors.redB,
                        drawerInactiveTintColor: colors.blackOpacity43,
                        
                    }}
                    name={navigationStrings.TABSTACK}
                    component={TabStack} />



            </Drawer.Navigator>
        </>
    )
}

export default DrawerStack
