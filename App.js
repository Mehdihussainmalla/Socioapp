//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import strings from './src/constants/lang';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import { getLogin } from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    getLogin().then((res) => {
      console.log(res, "res is>>>>>")
      actions.loginData(res);
    })
    // console.log(res)
    setTimeout(() => {
      SplashScreen.hide();    

    }, 2000);
    getLanguage();
  }, [])
 
  const getLanguage = async () => {
    try {
      const lng = await AsyncStorage.getItem('language')
      // console.log("Lnguage changed", lng)
      if (!!lng) {
        strings.setLanguage(lng)
      } else {
        strings.setLanguage('en');

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
