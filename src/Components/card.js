//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { textScale, width } from '../styles/responsiveSize';
import firestore from '@react-native-firebase/firestore';
import storage from "@react-native-firebase/storage";
// create a component
const CardView = () => {

    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("products").orderBy("productName", "desc")

                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>>")
                        res.forEach(doc => {

                            const { productCategory, productImage, rating, price, description, productName } = doc.data();
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
                            //  console.log(list, "list is")

                        })

                    })
            } catch (error) {
                console.log(error, "error occurred")

            }
        }
        fetchData();

    }, [])

    // const deletePost = (postId) => {
    //     // console.log("post is", postId)

    //     firestore().collection("products").doc(postId).get().then((res) => {

    //         if (res.exists) {
    //             const { productImage } = res.data();
    //             if (productImage != null) {
    //                 const storageRef = storage().refFromURL(productImage);
    //                 const imageRef = storage().ref(storageRef.fullPath);
    //                 imageRef.delete().then(() => {
    //                     console.log(`${productImage} has been deleted sucessfully`)
    //                     deleteFirestoreData(productImage);
    //                 }).catch((error) => {
    //                     console.log(error, "error occurred during post deletion")
    //                 })

    //             }
    //         }
    //     })
    // }
    // const deleteFirestoreData = (postId) => {
    //     firestore().collection("products").doc(postId).delete().then(() => {
    //         alert("post deleted sucessfully")
    //     }).catch((error) => {
    //         console.log(error, "error occurred")
    //     })

    // }


    const renderItem = ({ item }) => {
        // console.log(item, "items for flast list are")
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.container}>
                <Image style={styles.imagestyle}
                    source={{ uri: item.productImage }} />

                {/* <TouchableOpacity onPress={() => deletePost(item.key)}>
                    <Text style={{ alignSelf: "center", color: "white",
                     backgroundColor: "red" }}>delete</Text>
                </TouchableOpacity> */}
                <Text style={styles.namestyle}>{item.productName}</Text>

                <View style={styles.priceview}>
                    <Text style={styles.pricestyle}>{item.price}</Text>
                </View>
                <Text style={styles.descstyle}>{item.description}</Text>
                <Text style={styles.productstyle}>{item.productCategory}</Text>
                <Text style={styles.ratingstyle}>{item.rating}</Text>

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

const styles = StyleSheet.create({
    container: {
        borderWidth: moderateScale(0.9),
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(5),
        marginRight: moderateScale(10),
        height: moderateScale(210),
        justifyContent: "center",
        marginTop: moderateScale(10),

    },
    imagestyle: {
        width: width / moderateScale(3),
        height: moderateScale(110),
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(10)

    },
    namestyle: {
        color: colors.redColor,
        fontWeight: "600",
        marginBottom: moderateScale(1),
        justifyContent: "center",
        alignSelf: "center"
    },
    priceview:
    {
        backgroundColor: colors.redB,
        marginHorizontal: moderateScale(40)
    },
    pricestyle:
    {
        fontSize: textScale(14),
        color: colors.white,
        fontWeight: "500",
        marginBottom: moderateScale(1),
        alignSelf: "center",
    },
    descstyle:
    {
        fontWeight: "500",
        marginBottom: moderateScale(1),
        marginHorizontal: moderateScale(8)
    },
    productstyle:
    {
        fontWeight: "300",
        marginHorizontal: moderateScale(8),
    },
    ratingstyle:
    {
        fontSize: textScale(18),
        color: colors.yellowC,
        fontWeight: "500",
        marginHorizontal: moderateScale(8),
    }
})


export default CardView;
