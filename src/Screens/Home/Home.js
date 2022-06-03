import React,{useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';

const Home = () => {
    const {user,logout}=useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 20, color: "white" }}>{user.uid}</Text>

            </View>
            <TouchableOpacity 
            onPress={()=>logout()}
            
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
