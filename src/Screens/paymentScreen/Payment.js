//import liraries
import React, { } from 'react';
import { View, Text,  Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import { styles } from './style';
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
            <View style={styles.container}>
                <View style={styles.optionstyle}>
                    <Text style={styles.optiontxt}>All other options</Text>
                </View>
                <View style={styles.mainstyle}>
                    <TouchableOpacity

                        style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>UPI</Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>


                <View style={styles.mainstyle}>
                    <View style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>Wallets</Text>
                    </View>
                    <Text></Text>
                </View>

                <View style={styles.mainstyle}>
                    <View style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>Credit / Debit / Atm Card</Text>
                    </View>
                    <Text></Text>
                </View>


                <View style={styles.mainstyle}>
                    <View style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>Net Banking</Text>
                    </View>
                    <Text></Text>
                </View>

                <View style={styles.mainstyle}>
                    <View style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>Cash on delivery</Text>
                    </View>
                    {/* <Text>wfeep</Text> */}
                </View>

                <View style={styles.mainstyle}>
                    <View style={styles.paymethodstyle}>
                        <Image
                            style={styles.icon_style}
                            source={imagePath.Radio_Icon} />

                        <Text style={styles.txtstyle}>EMI (Easy Installments)</Text>
                    </View>
                    <Text style={{ color: colors.greyC }}>unavailable ?</Text>
                </View>
            </View>
            <ButtonComp
                onPress={handleTransaction}
                btnStyle={styles.btnstyle}
                ButtonText='Continue' />

        </Wrappercontainer>
    );
};



export default Payment;
