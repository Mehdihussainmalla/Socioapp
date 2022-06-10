//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import strings from './src/constants/lang';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import { StatusBarHeight } from './src/styles/responsiveSize';


const App = () => {

  useEffect(() => {
    getLanguage();
  }, [])
  const getLanguage = async () => {
    try {
      const lng = await AsyncStorage.getItem('language')
      console.log("Lnguage changed", lng)
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

    <AuthProvider>
      <FlashMessage
        //  hideStatusBar={true}
        //  statusBarHeight={sta.currentHeight}
        duration={2000}
        position="top" />
      <Routes />
    </AuthProvider>


  );
};


export default App;
