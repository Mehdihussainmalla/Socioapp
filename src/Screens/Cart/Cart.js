//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import Header from '../../Components/Header';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { styles } from './styles';
import { showMessage } from 'react-native-flash-message';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { useSelector } from 'react-redux';
import navigationStrings from '../../navigation/navigationStrings';
import strings from '../../constants/lang';

const Cart = ({ navigation }) => {
    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const Uid = userData?.uid
    const [cart, setCart] = useState();
    const [item, setItem] = useState([]);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        SubmitData()
        fetchData()
    }, [])





    const itemDetails = async (item) => {
        var arr = [];
        try {
            for (let index in item) {
                let productid = item[index].productId;
                firestore().collection(`accessories`)
                    .where(firebase.firestore.FieldPath.documentId(), "==", `${productid}`)
                    .get().then((res) => {

                        // console.log(res, "res firebase is>>>>>")
                        res.forEach(doc => {
                            // console.log(doc,"doc doc")
                            const { accessoryType, rating, accoryImage, totalPrice, deliveryCharges,
                                discount, Details, price, productCategory
                            } = doc.data();
                            arr.push({
                                id: doc.id,
                                productName: accessoryType,
                                rating: rating,
                                productImage: accoryImage,
                                totalprice: totalPrice,
                                Details: Details,
                                deliveryCharges: deliveryCharges,
                                discount: discount,
                                price: price,
                                productCategory: productCategory
                            })
                        })
                        setData([...arr, ...data]);
                        // setData([...arr, ...cart]);
                    })

            }

        } catch (error) {
            console.log(error, "error occurred")

        }
    }

    const fetchData = async () => {
        try {
            const list = [];
            await firestore().collection(`Cart${Uid}`).get()
                .then((res) => {
                    //console.log("cart res", res)
                    res.forEach(doc => {
                        const { productId, Uid, productName } = doc.data();
                        list.push({
                            productId: productId,
                            productName: productName,
                            Uid: Uid
                        })

                    })
                    setItem(list)
                    // console.log(list, "list++")
                    itemDetails(list)


                })
        } catch (error) {
            console.log(error, "error occurred")

        }
    }

    const SubmitData = () => {
        try {


            for (let index in item) {
                let productid = item[index].productId;
                firestore().collection(`products`)
                    .where(firebase.firestore.FieldPath.documentId(), "==", `${productid}`)
                    .get().then((res) => {
                        //console.log(res.size, "res is")
                        const productList = [];
                        res.forEach(doc => {
                            const { productCategory, productName, description, rating,
                                discount, price, productImage, Details, deliveryCharges, totalPrice } = doc.data();
                            productList.push({
                                id: doc.id,
                                productCategory: productCategory,
                                productName: productName,
                                productImage: productImage,
                                description: description,
                                price: price,
                                rating: rating,
                                Details: Details,
                                deliveryCharges: deliveryCharges,
                                totalprice: totalPrice,
                                discount: discount,
                            })
                            // console.log(productList, "product list isss")

                        })
                        setCart(productList)


                    })
            }


        } catch (error) {
            console.log(error, "error occurred")

        }
    }


    //..............counting............//

    // const Increment = () => {
    //     actions.Increment(count)
    //     setCount(count + 1);
    //     if (count === 5) {
    //         showMessage({
    //             message: "maximum selected items could be 5 only",
    //             type: "info"
    //         })
    //         return setCount(count)
    //     }
    // }

    // const Decrement = () => {
    //     actions.Decrement(count)
    //     setCount(count - 1)
    //     if (count === 0) {
    //         showMessage({
    //             message: "no item selected",
    //             type: "danger"

    //         })
    //         return setCount(count)
    //     }
    // }

    // ............delete item.............//
    // const deleteItem = async (id) => {
    //     await firestore().collection(`Cart${Uid}`)
    //         .where(`productId`, "==", `${id}`).get()
    //         .then((res) => {
    //             res.forEach((doc) => {
    //                 console.log(doc, "doc iss")
    //                 const { productId } = doc.data();
    //                 deleteData(productId)
    //             })
    //         })
    // }
    const deleteData = async (productId) => {
        try {
            await firebase.firestore().collection(`Cart${Uid}`).doc(`${productId}`).delete()
                .then((res) => {
                    //console.log(res, "res iss")
                })

        } catch (error) {
            console.log(error, "error occurred")
        }
    }

    //.............update ................//
    // const updateItem = async (id) => {
    //     // console.log(id, "id iss")

    //     try {
    //         await firebase.firestore().collection(`CartpgXBxIEkYgOWdbfjT6A5UdR`).doc(`${id}`)
    //             .update({
    //                 price: "$398 - $598"
    //             })
    //     } catch (error) {
    //         console.log(error, "error occurred")

    //     }
    // }


    const renderItem = ({ item }) => {
        // console.log(item,"item details")
        const Id = item.id;
        const category = item.productCategory;
        const myArray = category.split(" ")
        const slice6words = myArray.slice(0, 2);
        const productCategory = slice6words.join(' ');
        return (

            <View style={styles.container}>
                <Image
                    style={styles.imgstyle}

                    source={{ uri: item?.productImage }} />
                <View style={styles.textstyle}>

                    <View style={styles.productstyle}>
                        <Text style={styles.productnamestyle}>{item?.productName}</Text>
                        <TouchableOpacity
                            onPress={() => deleteData(Id)}
                            activeOpacity={0.7}
                            style={styles.deletestyle}>
                            <Image style={{ tintColor: colors.redB }}
                                source={imagePath.delete_icon} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.categorystyle}>{productCategory}</Text>
                    <Text style={styles.pricestyle}>{item?.price}</Text>
                    <Text style={styles.descriptionstyle}>{item?.description}</Text>


                    {/* <View style={styles.counterstyle}>
                        <Text
                            // onPress={Decrement}
                            style={styles.decrementstyle}>-</Text>
                        <Text style={styles.numberstyle}> {count} </Text>

                        <Text
                            // onPress={Increment}
                            style={styles.incrementstyle}>+</Text>
                    </View> */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(navigationStrings.ORDER_PRODUCT, { item: item })}
                        style={styles.buystyle}>
                        <Text

                            style={styles.buytxt}>{strings.BUY}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <Wrappercontainer>
            <View style={styles.headstyle}>
                <Header
                    isBackIcon={true}
                    title={strings.CART} />

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                data={data}
            />



        </Wrappercontainer>

    );
};

export default Cart;
