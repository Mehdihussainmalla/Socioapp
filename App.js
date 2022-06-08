//import liraries
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import { StatusBarHeight } from './src/styles/responsiveSize';


const App = () => {
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
