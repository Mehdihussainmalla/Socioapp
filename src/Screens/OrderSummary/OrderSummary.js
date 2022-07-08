//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import firestore from '@react-native-firebase/firestore';
import { styles } from './style';
import navigationStrings from '../../navigation/navigationStrings';
import ButtonComp from '../../Components/Button';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
const OrderSummary = ({ navigation }) => {

    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const email = userData?.email;
    const Name = userData?.displayName;
    const id = userData?.uid;
    // console.log(userData, "Name from order summary")
    const [showList, setShowList] = useState();
    const [address, setAddress] = useState([]);

    const getAddress = async () => {
        try {
            await firestore().collection(`AddAddress`).get().then((res) => {
                const list = [];
                res.forEach(doc => {
                    const { fullName, phoneNumber, alternateNumnber, pincode,
                        stateName, city, houseNumber, roadName, landMark } = doc.data();
                    list.push({
                        fullName,
                        phoneNumber,
                        alternateNumnber,
                        pincode,
                        stateName,
                        city,
                        houseNumber,
                        roadName,
                        landMark

                    })
                })
                // console.log(list,"list is")
                setAddress(list)
            })

        } catch (error) {
            console.log(error, "error occurred")

        }
    }

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
    useEffect(() => {
        fetchData();
        getAddress();

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
                style={styles.itemcontainer}>
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
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Header
                    onPress={() => navigation.goBack()}
                    isBackIcon={true}
                    title={strings.ORDERSUMMARY} />
                    
                         <View style={styles.delivertstyle}>
                    <Text style={styles.delivertxt}>Deliver To:</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.ADDRESS_DETAILS)}
                        activeOpacity={0.5}
                        style={styles.changestyle}>
                        <Text style={styles.changetxt}>{strings.CHANGE}</Text>
                    </TouchableOpacity>
                </View>

                {address.map((item) => {
                    // console.log(item, "items aree")
                    return (
                        <View style={styles.addressview}>
                            <Text style={styles.addresstxt}>{item?.fullName}</Text>
                            <Text style={styles.addresstxt}>{item?.houseNumber}</Text>
                            <Text style={styles.addresstxt}>{item?.phoneNumber}</Text>
                            <Text style={styles.addresstxt}>{item?.pincode}</Text>
                            <Text style={styles.addresstxt}>{item?.stateName}</Text>
                            <Text style={styles.addresstxt}>{item?.city}</Text>

                        </View>
                    )
                })}
                <View>
                    <Text style={styles.nametxt}>{Name}</Text>
                    <Text style={styles.emailtxt}>{email}</Text>
                </View>

                <Text style={{}}>------------------------------------------------------</Text>
                <View style={styles.mainview}>
                    <View style={styles.itemview}>
                        <View style={styles.iconstyle}>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.car} />

                            <Text style={styles.delivertime}>{strings.DATE_DELIVERY}</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={styles.itemview}>
                        <View style={styles.iconstyle}>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.swap} />

                            <Text style={styles.txtstyle}>{strings.RETURN_POLICY}</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={styles.itemview}>
                        <View style={styles.iconstyle}>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.dollar} />

                            <Text style={styles.txtstyle}>{strings.CASH_ON_DELIVERY}</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tintstyle}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={styles.upistyle}>
                        <View style={styles.itemview}>
                            <Image
                                style={styles.upiicon}
                                source={imagePath.UPI} />

                            <Text style={styles.upitxt}>{strings.PAY_UPI}</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.upiiconstyle}
                                source={imagePath.arrow} />
                        </View>
                    </View>
                    <View style={styles.similarproduct}>
                        <Text style={styles.similartxt}>{strings.SIMILAR_PRODUCTS}</Text>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.viewallstyle}>
                            <Text
                                style={styles.viewalltxt}>{strings.VIEWALL}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <View style={styles.flatlistview}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={showList}
                renderItem={renderItem}
            />
            </View>
            <TouchableOpacity
                activeOpacity={0.8}>
                <ButtonComp
                onPress={()=>navigation.navigate(navigationStrings.PAYMENT_SCREEN)}
              btnStyle={styles.btnstyle}
                    ButtonText={strings.PROCEED_FOR_PAYMENT} />

            </TouchableOpacity>
            </ScrollView>
        </Wrappercontainer>
    );
};

export default OrderSummary;
