//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Dropdown from '../../Components/Dropdown';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { styles } from './style';
const numbering = [{ id: 1, num: 1 }, { id: 2, num: 2 }, { id: 3, num: 3 }, { id: 4, num: 4 },]


const OrderProduct = ({ route, }) => {
    const data = route?.params?.item;
    const productName = data.productName;
    const productImage = data?.productImage;
    const description = data?.description;
    const category = data?.productCategory;
    const price = data?.price;
    const rating = data?.rating;
    const details = data?.Details;
    const totalPrice = data?.totalprice;
    const deliveryCharges = data?.deliveryCharges;
    const discount = data?.discount;

     console.log(data, "hfshdfj")


//    const finalprice=totalPrice-discount+deliveryCharges;
//    console.log(finalprice,"price")
    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }
    const navigation = useNavigation();

    return (
        <Wrappercontainer>
            <Header
                onPress={() => navigation.goBack()}
                isBackIcon={true}
                title={"OrderProduct"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.productstyle}>
                        <Image
                            style={styles.imgstyle}
                            source={{ uri: productImage }} />
                        <View style={styles.namestyle}>
                            <Text style={styles.productnamestyle}>{productName}</Text>
                            <Text style={styles.descstyle}>{description}</Text>
                            <View style={styles.pricestyle}>
                                <Text style={styles.amountrange}>{price}<Text 
                                style={styles.pricetxt}>  23% off</Text></Text>
                            </View>
                            <Text style={styles.categorytxt}>{category}</Text>
                            <View style={styles.ratingstyle}>
                                <Text style={styles.ratingtxt}>{rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dropdownstyle}>
                        <Text style={styles.droptxt}>Qty: </Text>
                        <Dropdown
                            value={selectedItem}
                            data={numbering}
                            onSelect={onSelect}
                        />
                    </View>
                    <View style={styles.timeview}>
                        <Text style={styles.timestyle}>Delivery by Tue Jul 16</Text>
                    </View>
                    <View style={styles.removestyle}>
                        <View style={styles.flexstyle}>
                            <View style={styles.saveimgstyle}>
                                <Image
                                    style={styles.img}
                                    source={imagePath.save_for_later} />
                                <Text style={styles.savetxt} >Save for later</Text>
                            </View>
                        </View>
                        <View style={styles.removecontainer}>
                            <View style={styles.removestyling}>
                                <Image style={styles.img}
                                    source={imagePath.remove_icon} />
                                <Text style={styles.removetxt} >Remove</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.detailstyle}>Product details</Text>
                        <Text style={styles.indetailstyle}>Details</Text>
                        <View>
                            <Text>{`${details}`}</Text>
                        </View>
                    </View>

                    <View style={styles.prictetotal}>
                        <Text style={styles.pricedetailtxt}>Price Details</Text>
                        <View style={styles.itemstyle}>
                            <Text>Price (1 item)</Text>
                            <Text>{price}</Text>
                        </View>
                        <View style={styles.itemstyle}>
                            <Text>Discount</Text>
                            <Text style={{ color: colors.green }}>- {discount}</Text>
                        </View>
                        <View style={styles.itemstyle}>
                            <Text>Delivery Charges</Text>
                            <Text style={styles.freestyle}>{deliveryCharges}</Text>
                        </View>
                        <View style={styles.chargeconatiner}></View>
                        <View style={styles.totalamount}>
                            <Text style={styles.totalcharge}>Total Charges</Text>
                            <Text style={styles.amounttxt}>{totalPrice}</Text>
                        </View>
                        <View style={styles.messagestyle}>
                            <Text style={styles.messagetxt}>you will save {discount} on this order</Text>
                        </View>
                    </View>

                    <View style={styles.buttoncontainer}>
                        <View style={styles.ratebutton}>
                            <Text style={styles.ratebtn}>{totalPrice}</Text>
                            <Text style={styles.pricedesc}>view price details</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.ORDER_SUMMARY)}
                            activeOpacity={0.8}
                            style={styles.continuebtnstyle}>
                            <Text style={styles.continuebtn}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </Wrappercontainer>
    );
};

export default OrderProduct;
