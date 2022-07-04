//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

// create a component
const OrderSummary = () => {

    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const email = userData?.email;
    const Name = userData?.displayName;
    const id = userData?.uid;
    return (
        <Wrappercontainer>
            <Header isBackIcon={true} />
            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>

                <Text style={{ fontWeight: "600" }}>Deliver To:</Text>
                <TouchableOpacity
                    onPress={() => alert("changing address")}
                    activeOpacity={0.5}
                    style={{ borderWidth: 0.5, padding: 4 }}>
                    <Text style={{ color: colors.DarkBlue }}>Change</Text>
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

            </View>

        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({

});


export default OrderSummary;
