//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { height, width } from '../../styles/responsiveSize';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { styles } from './style';
import navigationStrings from '../../navigation/navigationStrings';
const OrderSummary = ({ navigation }) => {

    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const email = userData?.email;
    const Name = userData?.displayName;
    const id = userData?.uid;

    const [showList, setShowList] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("products")

                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>sdsds>")
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
                            setShowList(list);
                            // console.log(list, "list is")
                        })
                    })
            } catch (error) {
                console.log(error, "error occurred")
            }
        }
        fetchData();

    }, [])
    const renderItem = ({ item }) => {
        //  console.log(item, "items are")
        const description = item.description;
        const myArray = description.split(" ")
        const slice6words = myArray.slice(0, 3);
        const string = slice6words.join(' ');
        // console.log(string, "string")
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.container}>
                <Image style={styles.imagestyle}
                    source={{ uri: item.productImage }} />
                <Text style={styles.namestyle}>{item.productName}</Text>

                <View style={styles.priceview}>
                    <Text style={styles.pricestyle}>{item.price}</Text>
                </View>
                <Text style={styles.descstyle}>{string}</Text>
                <Text style={styles.productstyle}>{item.productCategory}</Text>
                <Text style={styles.ratingstyle}>{item.rating}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <Wrappercontainer>
            <View style={{ flex: 1.5, }}>
                <Header isBackIcon={true} />
                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>

                    <Text style={{ fontWeight: "600" }}>Deliver To:</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.ADDRESS_DETAILS)}
                        activeOpacity={0.5}
                        style={{ borderWidth: 0.5, padding: 4 }}>
                        <Text style={{ color: "blue" }}>Change</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* <Text style={{ fontWeight: "600" }}>{!!Name ? Name : null}</Text> */}
                    <Text style={{ fontWeight: "600" }}>{email}</Text>
                </View>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: colors.blackOpacity66 }}>{`code brew labs sector 28 Madhya Marg chandigarh. pincode : 160022`}</Text>
                    <Text style={{ color: colors.blackOpacity70 }}>{`contact:+916005927575`}</Text>
                </View>
                <Text style={{}}>------------------------------------------------------</Text>
                <View style={{ flex: 0.2, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 0.7 }}>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.car} />

                            <Text style={{ fontWeight: "600", paddingLeft: 29 }}>Delivery by Jul 16</Text>

                        </View>
                        <View>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 0.7 }}>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.swap} />

                            <Text style={{ fontWeight: "400", paddingLeft: 29 }}>10 Days Return policy</Text>

                        </View>
                        <View>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 0.7 }}>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.dollar} />

                            <Text style={{ fontWeight: "400", paddingLeft: 29 }}>cash on Delivery</Text>

                        </View>
                        <View>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 0.7 }}>
                            <Image
                                style={{ tintColor: "blue", height: height / 30, width: width / 12 }}
                                source={imagePath.UPI} />

                            <Text style={{ fontWeight: "400", paddingLeft: 29 }}>Pay with UPI</Text>

                        </View>
                        <View>
                            <Image
                                style={{ tintColor: "blue" }}
                                source={imagePath.arrow} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 1 }}>
                        <Text style={{ fontWeight: "600" }}>Similar Products</Text>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{ borderWidth: 0.4, padding: 4 }}>
                            <Text
                                style={{ color: "blue" }}>View all</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={showList}
                renderItem={renderItem}
            />

        </Wrappercontainer>
    );
};

export default OrderSummary;
