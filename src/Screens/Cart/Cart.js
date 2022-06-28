//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import Header from '../../Components/Header';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import { textScale, width } from '../../styles/responsiveSize';


const Cart = () => {

    const [cart, setCart] = useState();
    const [item, setItem] = useState();
    const fetchData = async () => {
        try {
            const list = [];
            await firestore().collection(`CartpgXBxIEkYgOWdbfjT6A5UdRhRS42`).get()
                .then((res) => {
                    // console.log(res, "res is")
                    res.forEach(doc => {
                        const { productId, Uid, productName } = doc.data();
                        list.push({
                            productId: productId,
                            productName: productName,
                            Uid: Uid
                        })
                        // console.log(list, "list is")
                        setItem(list)
                    })
                })
        } catch (error) {
            console.log(error, "error occurred")

        }
    }

    // for (let x in item)
    //     console.log(x, "items are")
    const SubmitData = async () => {
        try {
            const productList = [];

            for (let index in item) {
                let productid = item[index].productId;
                //  console.log(productid)

                firestore().collection(`products`)
                    .where(firebase.firestore.FieldPath.documentId(), "==", `${productid}`)
                    .get().then((res) => {
                        console.log(res.size, "res is")
                        res.forEach(doc => {
                            const { productCategory, productName, description, rating, price, productImage } = doc.data();
                            productList.push({
                                productCategory: productCategory,
                                productName: productName,
                                productImage: productImage,
                                description: description,
                                price: price,
                                rating: rating,


                            })
                            console.log(productList, "product list isss")
                            setCart(productList)
                        })
                    })
            }


        } catch (error) {
            console.log(error, "error occurred")

        }
    }


    useEffect(() => {
        fetchData()
        SubmitData()
    }, [])

    const renderItem = ({ item }) => {
        // console.log(item, "item issss")
        return (
            <View style={{

                padding: moderateScale(5),
                borderWidth: 0.5,
                margin: moderateScale(5),
                height: moderateScale(140),
                borderRadius: moderateScale(5),
                flexDirection: 'row',
            }}>



                <Image
                    style={{
                        width: width / 2.3,
                        height: width / 3,
                    }}
                    source={{ uri: item?.productImage }} />
                <View style={{
                    width: width / moderateScale(2.3),
                    paddingLeft: moderateScale(10)
                }}>

                    <Text style={{
                        // marginTop: 10,
                        paddingLeft: 10,
                        fontSize: textScale(14),
                        fontWeight: "800"
                    }}>{item?.productName}</Text>
                    <Text style={{
                        fontWeight: "600",
                        fontSize: textScale(12),
                        paddingLeft: 20,
                        color: colors.blackOpacity70,

                    }}>{item?.productCategory}</Text>
                    <Text style={{ color: colors.redB, paddingLeft: 10 }}>{item?.price}</Text>
                    <Text style={{
                        fontWeight: "600",
                        fontSize: textScale(12),
                        paddingLeft: 10,
                        color: colors.blackOpacity70,
                    }}>{item?.description}</Text>


                    <View style={{
                        flexDirection: "row", alignSelf: "center",
                        marginTop: 8
                    }}>
                        <Text style={{
                            fontSize: textScale(20),
                            backgroundColor: colors.blackOpacity40,
                            color: colors.white,
                            fontWeight: "bold",
                            marginBottom: 8,
                            paddingHorizontal: 5,
                            alignSelf: "center"
                        }}>-</Text>
                        <Text style={{ fontSize: textScale(20) }}> {0} </Text>

                        <Text style={{
                            fontSize: textScale(20),
                            backgroundColor: colors.blackOpacity40,
                            color: colors.white,
                            fontWeight: "bold",
                            marginBottom: 8,
                            paddingHorizontal: 5,
                            alignSelf: "center",

                        }}>+</Text>

                    </View>
                </View>
            </View>
        )
    }
    return (
        <Wrappercontainer>

            <Header
                isBackIcon={true} />
            <FlatList
                renderItem={renderItem}
                data={cart} />


        </Wrappercontainer>

    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Cart;
