import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';

const Home = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user, "user details are:")
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 16, color: "white" }}>UID_is:-{user.uid}</Text>
                <View style={{ flex: 0.4, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>userid_is:-{user._user.email}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => logout()}

                style={{
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
