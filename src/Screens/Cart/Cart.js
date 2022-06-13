//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import { height, textScale } from '../../styles/responsiveSize';

// create a component
const Cart = () => {
    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                    <Header textstyle={{}}
                        isBackIcon={true}
                        title={"ADD TO CART"} />
                    <Image source={imagePath.cart} />
                </View>

                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "green",
                    marginHorizontal: moderateScale(20),

                }}>
                    <Image style={{ width: "100%", height: height / 4, }} source={imagePath.mobile} />
                </View>
                <View style={{ marginTop: moderateScale(12) }}>
                    <Text style={{
                        paddingVertical: moderateScale(10),
                        fontSize: textScale(15),
                        fontWeight: "bold",
                        paddingLeft: moderateScale(20)
                    }}>Grand Mobile Phones</Text>
                </View>

            </View>

        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Cart;
