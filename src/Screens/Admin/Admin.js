import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { textScale } from '../../styles/responsiveSize';

const Admin = ({ navigation }) => {
    return (

        <Wrappercontainer>

            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Admin Block"} />
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.PRODUCTS)}
                    activeOpacity={0.5}
                    style={{
                        marginVertical: 10, backgroundColor: colors.redNew,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: "center",
                        height: "5%",
                        width: "24%",
                        marginTop: 25,
                        borderRadius: 10,
                        borderWidth: 2

                    }}>
                    <Text style={{ fontSize: textScale(15), fontWeight: "500" }}>Products</Text>

                </TouchableOpacity>
            </View>
        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#2c3e50',
    },
});

export default Admin;
