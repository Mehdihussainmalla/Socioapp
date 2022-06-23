//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

import { styles } from './styles';
// create a component
const Cart = ({ route }) => {
    const item = route?.params?.data
    // console.log(item, "data is")
    return (
        <Wrappercontainer>

            <View style={{ flex: 1 }}>

                <View style={styles.headerstyle}>
                    <Header isBackIcon={true}
                    // title={item?.productName}
                    />
                    <View style={styles.headertxt} >
                        <Text style={styles.nametxt}>{item?.productName}</Text>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => alert("waiting to add")}
                        >
                            <Image style={styles.headericon} source={imagePath.add_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={styles.imgstyle}

                            source={{ uri: item?.productImage }} />
                        <Text style={styles.txtstyle}>{item?.productCategory}</Text>
                        <Text style={styles.namestyle}>{item?.productName}</Text>
                        <Text style={styles.pricestyle}>price range: {item?.price} only</Text>
                        <Text style={styles.descstyle}>{item?.description}</Text>
                        <Text style={{
                            backgroundColor: colors.redB,
                            alignSelf: "center",
                            marginTop: 10,
                            color: colors.white, padding: 3, fontWeight: "700"
                        }}> 35% discount</Text>
                    </View>
                </ScrollView>
            </View>

            <ButtonComp

                onPress={() => Alert.alert("item added sucessfully")}
                ButtonText='Buy' />


        </Wrappercontainer>
    )
}
export default Cart;
