import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import colors from '../../styles/colors';
import { styles } from './styles';

const Home = (props) => {
    const { navigation } = props;
    console.log("props are", props)
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                activeOpacity={0.5}
                style={styles.drawerstyle}>
                <Image source={imagePath.hamsburg} />
            </TouchableOpacity>
            <View style={styles.idstyle}>
                <Text style={styles.idtext}>UID_is:-{user.uid}</Text>
                <View style={{ flex: 0.4, marginTop: 20 }}>
                    <Text style={styles.emailstyle}>userid_is:-{user._user.email}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => logout()}

                style={styles.signstyle}>
                <Text style={styles.textview}>SignOut</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Home;
