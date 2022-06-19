import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

const Admin = ({ navigation }) => {
    return (

        <Wrappercontainer>

            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Admin Block"} />
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.PRODUCTS)}
                    activeOpacity={0.5}
                    style={styles.productstyle}>
                    <Text style={styles.btnstyle}>Products</Text>

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
    productstyle: {
        marginVertical: moderateScaleVertical(10),
        backgroundColor: colors.redNew,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        height: "5%",
        width: "24%",
        marginTop: moderateScale(25),
        borderRadius: moderateVerticalScale(10),
        borderWidth: moderateScale(2)

    },
    btnstyle: {
        fontSize: textScale(15),
        fontWeight: "500"
    }
});

export default Admin;
