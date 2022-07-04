//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Dropdown from '../../Components/Dropdown';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { textScale, width } from '../../styles/responsiveSize';

const numbering = [{ id: 1, num: 1 }, { id: 2, num: 2 }, { id: 3, num: 3 }, { id: 4, num: 4 },]


const OrderProduct = ({ route }) => {
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
                <View style={{ height: "50%", width: "100%%", marginVertical: 20, }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={{ height: "100%", width: "40%" }}
                            source={{ uri: productImage }} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ paddingLeft: 5, fontWeight: "600" }}>{productName}</Text>
                            <Text style={{ paddingLeft: 5, color: colors.blackOpacity66 }}>{description}</Text>
                            <View style={{ paddingLeft: 5 }}>
                                <Text>{price}<Text style={{ color: colors.green, fontWeight: "500" }}>  23% off</Text></Text>
                            </View>

                            <View style={{ backgroundColor: "green", width: "20%", marginLeft: 5 }}>
                                <Text style={{ fontSize: 25, alignSelf: "center", color: colors.yellowB, }}>{rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        borderWidth: 0.4,
                        width: "20%", flexDirection: "row",
                        alignSelf: "flex-start"
                    }}>
                        <Text style={{ paddingTop: 10, paddingLeft: 2 }}>Qty: </Text>
                        <Dropdown
                            value={selectedItem}
                            data={numbering}
                            onSelect={onSelect}
                        />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: colors.blackOpacity66 }}>Delivery by Tue Jul 16</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderWidth: 0.17,
                        marginVertical: 8,
                        paddingTop: 5,
                        height: width / 12
                    }}>
                        <View style={{ flex: 0.5 }}>
                            <View style={{ flexDirection: "row", justifyContent: 'center', }}>
                                <Image style={{ marginTop: 1 }} source={imagePath.save_for_later} />
                                <Text style={{ alignSelf: "center", paddingTop: 1 }} >Save for later</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.5, borderLeftWidth: 0.4, }}>
                            <View style={{ flexDirection: "row", justifyContent: 'center', }}>
                                <Image style={{ marginTop: 1 }}
                                    source={imagePath.remove_icon} />
                                <Text style={{ alignSelf: "center", paddingTop: 1 }} >Remove</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ fontWeight: "600" }}>Product details</Text>
                        <Text style={{ fontWeight: "500", paddingTop: 15 }}>Details</Text>
                        <View>
                            <Text>{`Travel with a laptop and set up your workstation anywhere without hassle. Reply to emails, join a video  call, or complete tasks in a jiffy, by keeping this portable device handy `}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: "600" }}>Price Details</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Price (2 items)</Text>
                            <Text> $4,500</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Discount</Text>
                            <Text style={{ color: colors.green }}>- $500</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Delivery Charges</Text>
                            <Text style={{ color: colors.green }}>Free</Text>
                        </View>
                        <View style={{ borderWidth: 0.5, marginTop: 8 }}></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600" }}>Total Charges</Text>
                            <Text style={{ fontWeight: "600" }}>$4000</Text>
                        </View>
                        <View style={{ borderTopWidth: 0.4, marginTop: 15 }}>
                            <Text style={{ color: colors.green, paddingTop: 5 }}>you will save $500 on this order</Text>
                        </View>
                    </View>


                    {/* <Dropdown
                        value={selectedItem}
                        data={numbering}
                        onSelect={onSelect}
                    /> */}

                    <View style={{
                        marginTop: 155, height: "12%",
                        borderRadius: 10, flexDirection: "row"
                    }}>
                        <View style={{
                            flex: 0.5, justifyContent: 'center',
                            backgroundColor: colors.whiteOpacity77,
                            borderWidth: 0.5
                        }}>
                            <Text style={{ alignSelf: "center", color: colors.blackB, fontWeight: "600" }}>{`$4000 \nview price details`}</Text>
                        </View>

                        <View style={{
                            flex: 0.5,
                            justifyContent: 'center',
                            borderWidth: 0.5,
                            backgroundColor: colors.redB
                        }}>
                            <Text style={{ alignSelf: "center", color: colors.white, fontWeight: "600", fontSize: textScale(16) }}>Continue</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </Wrappercontainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default OrderProduct;
