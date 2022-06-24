//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';

// create a component
const SearchScreen = () => {
  const userData=useSelector((state)=>state?.userStatus?.products);
  console.log(userData,"userdata is >>>>>>")
  return (
    <Wrappercontainer>
      <Header isBackIcon={true} />
      <Text>SearchScreen</Text>
    </Wrappercontainer>

  );
};

// define your styles
const styles = StyleSheet.create({

});
export default SearchScreen;


