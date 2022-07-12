//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import AllInOneSDKManager from 'paytm_allinone_react-native';

// create a component
const Payment = () => {

    const orderDetails = {
        orderId: 'TESTORDER_1',
        mid: "Flpgrf62566379349438",
        tranxToken: "abc",
        amount: "1.00",
        callbackUrl: "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=TESTORDER_1",
        isStaging: true,
        appInvokeRestricted: false,
        urlScheme: "paytmMIDFlpgrf62566379349438"

    }

    const handleTransaction = () => {
        AllInOneSDKManager.startTransaction(
            orderDetails.orderId,
            orderDetails.mid,
            orderDetails.tranxToken,
            orderDetails.amount,
            orderDetails.callbackUrl,
            orderDetails.isStaging,
            orderDetails.appInvokeRestricted,
            orderDetails.urlScheme
        )
            .then((result) => ({
                "BANKNAME": "ICICI",
                "BANKTXNID": "Bank transaction Id",
                "CHECKSUMHASH": "Checksum",
                "CURRENCY": "INR",
                "GATEWAYNAME": "ICICI",
                "MID": "Merchant Id",
                "ORDERID": "Order Id",
                "PAYMENTMODE": "NB",
                "RESPCODE": "01",
                "RESPMSG": "Txn Success",
                "STATUS": "TXN_SUCCESS",
                "TXNAMOUNT": "1.00",
                "TXNDATE": "2020-07-21 19:00:05.0",
                "TXNID": "Transaction Value"
            })

            )
            .catch((err) => {
                // handleError(err);
            });
    }

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
                    <TouchableOpacity

                        style={{ flexDirection: "row", }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 0 }}
                            source={imagePath.Radio_Icon} />

                        <Text style={{
                            paddingLeft: 10, fontWeight: "600", fontSize: 16,
                            color: colors.blackOpacity70
                        }}>UPI</Text>
                    </TouchableOpacity>
                    <Text></Text>
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
                    <Text></Text>
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
                    <Text></Text>
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
                    <Text></Text>
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
                    <Text style={{ color: colors.greyC }}>unavailable ?</Text>
                </View>
            </View>
            <ButtonComp
                onPress={handleTransaction}
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
