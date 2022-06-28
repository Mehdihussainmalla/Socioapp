//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import Header from '../../Components/Header';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { styles } from './styles';
import { showMessage } from 'react-native-flash-message';
import actions from '../../redux/actions';


const Cart = () => {

    const [cart, setCart] = useState();
    const [item, setItem] = useState();
    const [count, setCount] = useState(1);
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
                            // console.log(productList, "product list isss")
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
    //..............counting............//

    const Increment = () => {
        actions.Increment(count)
        // alert("one item selected")
        setCount(count + 1);
        if (count === 5) {
            showMessage({
                message: "maximum items will be 5 only",
                type: "info"
            })
            return setCount(count)
        }


    }

    const Decrement = () => {
        actions.Decrement(count)
        setCount(count - 1)
        if (count === 0) {
            showMessage({
                message: "no item selected",
                type: "danger"

            })
            return setCount(count)
        }
    }
    const renderItem = ({ item }) => {
        // console.log(item, "item issss")
        return (

            <View style={styles.container}>
                <Image
                    style={styles.imgstyle}
                    source={{ uri: item?.productImage }} />
                <View style={styles.textstyle}>

                    <Text style={styles.productnamestyle}>{item?.productName}</Text>
                    <Text style={styles.categorystyle}>{item?.productCategory}</Text>
                    <Text style={styles.pricestyle}>{item?.price}</Text>
                    <Text style={styles.descriptionstyle}>{item?.description}</Text>


                    <View style={styles.counterstyle}>
                        <Text
                            onPress={Decrement}
                            style={styles.decrementstyle}>-</Text>
                        <Text style={styles.numberstyle}> {count} </Text>

                        <Text
                            onPress={Increment}
                            style={styles.incrementstyle}>+</Text>


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
                data={cart}
            />



        </Wrappercontainer>

    );
};

export default Cart;
