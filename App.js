//import liraries
import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';


const App = () => {
  return (

    <AuthProvider>
    <Routes/>
    </AuthProvider>
 
      
  );
};


export default App;
