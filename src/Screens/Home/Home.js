import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import colors from '../../styles/colors';


const Home = (props) => {
    const {navigation}=props;
    console.log("props are",props)
    const { user, logout } = useContext(AuthContext);
       return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
                activeOpacity={0.5}
                style={{
                    marginTop: moderateVerticalScale(15),
                    marginHorizontal: moderateVerticalScale(10)
                }}>
                <Image source={imagePath.hamsburg} />
            </TouchableOpacity>
            <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: colors.black }}>UID_is:-{user.uid}</Text>
                <View style={{ flex: 0.4, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: colors.black }}>userid_is:-{user._user.email}</Text>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.greyD,
    },
});

export default Home;
