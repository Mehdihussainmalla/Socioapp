//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

// create a component
const Payment = () => {
    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
                title={"Payments"}
            />
            <View style={{ flexlex: 1 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontWeight: "700", fontSize: 16,
                        color: colors.blackOpacity70,
                    }}>All other options</Text>
                </View>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>UPI</Text>
                    </View>
                    <Text>wfeep</Text>
                </View>


                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>Wallets</Text>
                    </View>
                    <Text>wfeep</Text>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>Credit / Debit / Atm Card</Text>
                    </View>
                    <Text>wfeep</Text>
                </View>


                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>Net Banking</Text>
                    </View>
                    <Text>wfeep</Text>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>Cash on delivery</Text>
                    </View>
                    {/* <Text>wfeep</Text> */}
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginTop: 25, borderBottomWidth: 0.3, paddingBottom: 10,
                    borderBottomColor: "grey",
                }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>EMI (Easy Installments)</Text>
                    </View>
                    <Text style={{color:colors.greyC}}>unavailable ?</Text>
                </View>
            </View>
            <ButtonComp
                btnStyle={{ marginTop: 340 }}
                ButtonText='Continue' />

        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Payment;
