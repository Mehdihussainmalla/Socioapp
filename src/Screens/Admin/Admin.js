import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import navigationStrings from '../../navigation/navigationStrings';

import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { styles } from './styles';

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
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.ACCESSORIES)}
                    activeOpacity={0.5}
                    style={styles.accessoriesstyle}>
                    <Text style={styles.btnstyle2}>Accessories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.OFFERS)}
                    activeOpacity={0.5}
                    style={styles.accessoriesstyle}>
                    <Text style={styles.btnstyle2}>Offers</Text>

                </TouchableOpacity>
            </View>
        </Wrappercontainer>
    );

};



export default Admin;
