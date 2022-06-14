//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { width } from '../styles/responsiveSize';

// create a component
const CardView = () => {

    const cardData = [{
        key: 1,
        image: imagePath.fruits_stock,
        description: "fresh fruits"
    },
    {
        key: 2,
        image: imagePath.spices_hub,
        description: "fresh fruits"
    },
    {
        key: 3,
        image: imagePath.fruits_stock,
        description: "fresh fruits"
    },
    {
        key: 4,
        image: imagePath.spices_hub,
        description: "fresh fruits"
    },
    {
        key: 5,
        image: imagePath.fruits_stock,
        description: "fresh fruits"
    },
    ]
    const renderItem = ({ item }) => {
        // console.log(item, "items for flast list are")
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    borderWidth: 0.5, borderRadius: 5, marginVertical: 5,
                    marginRight: 10, height: moderateScale(130),
                    justifyContent: "center", marginTop: 30,
                    backgroundColor:colors.blackOpacity20
                }}>
                <Image style={{
                    width: width / 3,
                    height: moderateScale(110),
                    marginHorizontal: 10,
                    marginTop: 10

                }} source={item.image} />
                <Text style={{
                    color: colors.green, fontWeight: "500",
                    marginBottom: 10, marginHorizontal: 5,
                }}>{item.description}</Text>
            </TouchableOpacity>
        )

    }

    return (
        <View>

            <FlatList
                horizontal
                data={cardData}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};




export default CardView;
