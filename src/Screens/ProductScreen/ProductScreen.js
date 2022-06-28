//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { styles } from './styles';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import navigationStrings from '../../navigation/navigationStrings';

const ProductScreen = ({ navigation, route }) => {
    const item = route?.params?.data
    const productId = item.key;
    // console.log(item, "itemmmmm")
    const productName = item?.productName
    const userData = useSelector((state) => state?.userStatus)
    const Uid = userData?.userData?.user?.uid; //.....user login id through useSelector
    //  console.log(Uid,"userdata is >>>>>>")

    const addToCart = async () => {

        try {
            await firestore().collection(`Cart${Uid}`).add({
                productId: productId,
                Uid: Uid,
                productName: productName

            })
            actions.addToCart([item])
        } catch (error) {
            console.log(error, "error occurred")

        }

    }
    
    return (
        <Wrappercontainer>
            {item ?
                <View style={{ flex: 1 }}>

                    <View style={styles.headerstyle}>
                        <Header isBackIcon={true}

                        />
                        <View style={styles.headertxt} >
                            <Text style={styles.nametxt}>{item?.productName}</Text>
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
                    <ButtonComp
                       onPress={addToCart}
                        ButtonText='Add To Cart' />
                </View>

                :
                <Text>empty cart</Text>
            }




        </Wrappercontainer>
    )
};
export default ProductScreen;