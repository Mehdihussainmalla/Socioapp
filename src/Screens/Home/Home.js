import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 25, color: "white" }}>Home</Text>

            </View>
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: "center",
                alignSelf: "center"
            }}>
                <Text style={{ fontSize: 20, color: 'red' }}>SignOut</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Home;
