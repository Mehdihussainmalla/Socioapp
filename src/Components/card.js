//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import { width } from '../styles/responsiveSize';

// create a component
const CardView = () => {

    const cardData = [{
        key: 1,
        image: imagePath.fruits_stock,
    },
    {
        key: 2,
        image: imagePath.spices_hub,
    },
    {
        key: 3,
        image: imagePath.fruits_stock,
    },
    {
        key: 4,
        image: imagePath.spices_hub,
    },
    {
        key: 5,
        image: imagePath.fruits_stock,
    },
    ]
    const renderItem = ({ item }) => {
        console.log(item, "items for flast list are")
        return (
            <TouchableOpacity 
            activeOpacity={0.7}
            style={{
                borderWidth: 0.5, borderRadius: 5, marginVertical: 5,
                marginRight: 10, height: moderateScale(130),
                justifyContent: "center",
            }}>
                <Image style={{
                    marginVertical: 1, width: width / 3,
                    height: moderateScale(120),
                    marginHorizontal: 10,

                }} source={item.image} />
            </TouchableOpacity>
        )

    }

    return (
        <View style={styles.container}>

            <FlatList
                horizontal
                data={cardData}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
            <Text>CardView</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});


export default CardView;
