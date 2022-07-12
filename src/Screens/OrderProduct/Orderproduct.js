//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import DropdownComponent from '../../Components/Dropdown';
import Dropdown from '../../Components/Dropdown';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { styles } from './style';
// const numbering = [{ id: 1, num: 1 }, { id: 2, num: 2 }, { id: 3, num: 3 }, { id: 4, num: 4 },]


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

    // console.log(data, "hfshdfj")
    const navigation = useNavigation();

    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
                title={strings.ORDER_PRODUCT} />
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
                                    style={styles.pricetxt}> {strings.DISCOUNT}</Text></Text>
                            </View>
                            <Text style={styles.categorytxt}>{category}</Text>
                            <View style={styles.ratingstyle}>
                                <Text style={styles.ratingtxt}>{rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <DropdownComponent
                        />
                    </View>
                    <View style={styles.timeview}>
                        <Text style={styles.timestyle}>{strings.DATE_DELIVERY}</Text>
                    </View>

                    <View style={styles.removestyle}>
                        <View style={styles.flexstyle}>
                            <View style={styles.saveimgstyle}>
                                <Image
                                    style={styles.img}
                                    source={imagePath.save_for_later} />
                                <Text style={styles.savetxt} >{strings.SAVE_LATER}</Text>
                            </View>
                        </View>
                        <View style={styles.removecontainer}>
                            <View style={styles.removestyling}>
                                <Image style={styles.img}
                                    source={imagePath.remove_icon} />
                                <Text style={styles.removetxt} >{strings.REMOVE}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.detailstyle}>{strings.PRODUCT_DETAILS}</Text>
                        <Text style={styles.indetailstyle}>{strings.DETAILS}</Text>
                        <View>
                            <Text>{`${details}`}</Text>
                        </View>
                    </View>

                    <View style={styles.prictetotal}>
                        <Text style={styles.pricedetailtxt}>{strings.PRICE_DETAILS}</Text>
                        <View style={styles.itemstyle}>
                            <Text>{strings.PRICE_ITEM}</Text>
                            <Text>{price}</Text>
                        </View>
                        <View style={styles.itemstyle}>
                            <Text>{strings.discount}</Text>
                            <Text style={{ color: colors.green }}>- {discount}</Text>
                        </View>
                        <View style={styles.itemstyle}>
                            <Text>{strings.DELIVERY_CHARGES}</Text>
                            <Text style={styles.freestyle}>{deliveryCharges}</Text>
                        </View>

                        <View style={styles.totalamount}>
                            <Text style={styles.totalcharge}>{strings.TOTAL_CHARGES}</Text>

                            <Text style={styles.amounttxt}>{totalPrice}</Text>

                        </View>
                        <View style={styles.messagestyle}>
                            <Text style={styles.messagetxt}>{strings.SAVE}{discount}{strings.ORDER}</Text>
                        </View>
                    </View>
                    <View style={styles.buttoncontainer}>
                        <View style={styles.ratebutton}>
                            <Text style={styles.ratebtn}>{totalPrice}</Text>
                            <Text style={styles.pricedesc}>{strings.PRICE_DETAILS}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.ORDER_SUMMARY)}
                            activeOpacity={0.8}
                            style={styles.continuebtnstyle}>
                            <Text style={styles.continuebtn}>{strings.CONTINUE}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Wrappercontainer>
    );
};

export default OrderProduct;
