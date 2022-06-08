import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, color:"red"}}>Header</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
    },
});

export default Header;
