//import liraries
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


const OrderProduct = ({ route, navigation }) => {
    const data = route?.params?.item;
    const productName = data.productName;
    const productImage = data?.productImage;
    const description = data?.description;
    const category = data?.productCategory;
    const price = data?.price;
    const rating = data?.rating;
    // console.log(data, "hfshdfj")

    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }


    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
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
                                <Text>{price}<Text style={styles.pricetxt}>  23% off</Text></Text>
                            </View>

                            <View style={styles.ratestyle}>
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
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.timestyle}>Delivery by Tue Jul 16</Text>
                    </View>
                    <View style={styles.removestyle}>
                        <View style={styles.flexstyle}>
                            <View style={styles.saveimgstyle}>
                                <Image style={{ marginTop: 0 }} source={imagePath.save_for_later} />
                                <Text style={styles.savetxt} >Save for later</Text>
                            </View>
                        </View>
                        <View style={styles.removecontainer}>
                            <View style={styles.removestyling}>
                                <Image style={{ marginTop: 1 }}
                                    source={imagePath.remove_icon} />
                                <Text style={styles.removetxt} >Remove</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.detailstyle}>Product details</Text>
                        <Text style={styles.indetailstyle}>Details</Text>
                        <View>
                            <Text>{`Travel with a laptop and set up your workstation anywhere without hassle. Reply to emails, join a video  call, or complete tasks in a jiffy, by keeping this portable device handy `}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.pricedetailtxt}>Price Details</Text>
                        <View style={styles.itemstyle}>
                            <Text>Price (2 items)</Text>
                            <Text> $4,500</Text>
                        </View>
                        {/* { flexDirection: "row", justifyContent: "space-between", marginTop: 10 } */}
                        <View style={styles.itemstyle}>
                            <Text>Discount</Text>
                            <Text style={{ color: colors.green }}>- $500</Text>
                        </View>
                        <View style={styles.itemstyle}>
                            <Text>Delivery Charges</Text>
                            <Text style={styles.freestyle}>Free</Text>
                        </View>
                        <View style={styles.chargeconatiner}></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600" }}>Total Charges</Text>
                            <Text style={{ fontWeight: "600" }}>$4000</Text>
                        </View>
                        <View style={styles.messagestyle}>
                            <Text style={styles.messagetxt}>you will save $500 on this order</Text>
                        </View>
                    </View>

                    <View style={styles.buttoncontainer}>
                        <View style={styles.ratebutton}>
                            <Text style={styles.ratebtn}>{`$4000 \nview price details`}</Text>
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
