//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';


const App = () => {
  return (

    <AuthProvider>
      <FlashMessage duration={2000}
        position="top" />
      <Routes />
    </AuthProvider>


  );
};


export default App;
