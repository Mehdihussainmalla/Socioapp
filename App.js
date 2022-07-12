//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import strings, { changeLanguage } from './src/constants/lang';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import { getLogin } from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen'
import {requestUserPermission,notificationListner} from "./src/utils/notificationServices";
const App = () => {

  useEffect(() => {
    requestUserPermission();
    notificationListner();
    getLanguage();
    getLogin().then((res) => {
      //  console.log(res, "res is>>>>>")
      actions.loginData(res);
    })
    // console.log(res)
    setTimeout(() => {
      SplashScreen.hide();

    }, 2000);
  
  }, [])

  const getLanguage = async () => {
    try {
       const lng = await AsyncStorage.getItem('language')
      //  console.log("Language changed", lng)
       changeLanguage(lng)
      if (!!lng) {
        changeLanguage(lng)
        // strings.setLanguage(lng)
      } else {
        // strings.setLanguage('en');

      }
    } catch (error) {
      console.log("error occurred in ")
    }
  }
  return (
    <Provider store={store}>
      <FlashMessage
        //  hideStatusBar={true}
        //  statusBarHeight={sta.currentHeight}
        duration={2000}
        position="top" />
      <Routes />
    </Provider>


  );
};


export default App;
