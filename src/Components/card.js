//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { textScale, width } from '../styles/responsiveSize';
import firestore from '@react-native-firebase/firestore';

// create a component
const CardView = () => {

    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("products").get().then((res) => {
                    // console.log(res.size, "res>>>> from home is>>")
                    res.forEach(doc => {

                        const { productCategory, userId, productImage, rating, price, description, productName } = doc.data();
                        list.push({
                            key: doc.id,
                            productCategory,
                            description,
                            productImage,
                            rating,
                            price,
                            productName


                        })
                        setproducts(list);
                        if (loading) {
                            setloading(false)
                        }
                        console.log(list, "list is")

                    })

                })
            } catch (error) {
                console.log(error, "error occurred")

            }
        }
        fetchData();

    }, [])

    const renderItem = ({ item }) => {
        console.log(item, "items for flast list are")
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    borderWidth: 0.5,
                    borderRadius: 5,
                    marginVertical: 5,
                    marginRight: 10,
                    height: moderateScale(200),
                    justifyContent: "center",
                    marginTop: 10,

                }}>
                <Image style={{
                    width: width / 3,
                    height: moderateScale(110),
                    marginHorizontal: moderateScale(10),
                    marginTop: moderateScale(10)

                }} source={{ uri: item.productImage }} />
                <Text style={{
                    color: colors.redColor,
                    fontWeight: "600",
                    marginBottom: moderateScale(1),
                    justifyContent: "center",
                    alignSelf: "center"
                    // marginHorizontal:moderateScale(15),
                }}>{item.productName}</Text>

                <Text style={{
                    fontSize: textScale(14),
                    backgroundColor: "red",
                    color: colors.white,
                    fontWeight: "500",
                    marginBottom: moderateScale(1),
                    alignSelf: "center",
                }}>{item.price}</Text>

                <Text style={{
                    fontWeight: "500",
                    marginBottom: 1,
                    marginHorizontal: moderateScale(8)
                }}>{item.description}</Text>
                <Text style={{
                    fontWeight: "300",
                    // marginTop: 2,
                    marginHorizontal: moderateScale(8),
                }}>{item.productCategory}</Text>
                <Text style={{
                    fontSize: textScale(18),
                    color: colors.yellowC,
                    fontWeight: "500",
                    marginHorizontal: moderateScale(8),
                }}>{item.rating}</Text>

            </TouchableOpacity>
        )

    }

    return (
        <View>

            <FlatList
                horizontal
                data={products}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};




export default CardView;
