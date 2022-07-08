//import liraries
import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import { styles } from './styles';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import navigationStrings from '../../navigation/navigationStrings';
import strings from '../../constants/lang';
import actions from '../../redux/actions';


const ProductScreen = ({ navigation, route }) => {
    const item = route?.params?.data
    let data = []
    data.push(item)
    console.log(data, "dataaaaa")
    const productId = item.key;
    // console.log(item, "itemmmmm")
    const productName = item?.productName
    const price = item.price;
    const userData = useSelector((state) => state?.userStatus?.userData)
    const Uid = userData?.user?.uid; //.....user login id through useSelector
    // console.log(Uid,"userdata is >>>>>>")

    const addToCart = async () => {
        try {
            await firestore().collection(`Cart${Uid}`).add({
                productId: productId,
                Uid: Uid,
                productName: productName

            })
            navigation.navigate(navigationStrings.CART)

        } catch (error) {
            console.log(error, "error occurred")

        }

    }

    //..........update ............//
    // const updateItem = async (id) => {
    //     console.log(id, "id iss")

    //     try {
    //         await firebase.firestore().collection(`products`).doc(`${id}`)
    //             .update({
    //                 price: "$1499 - $5099"
    //             })
    //     } catch (error) {
    //         console.log(error, "error occurred")

    //     }
    // }

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
                            <Text style={styles.pricestyle}>{strings.PRICE_RANGE} {item?.price} only</Text>
                            <Text style={styles.descstyle}>{item?.description}</Text>
                            <Text style={styles.discountstyle}> {strings.DISCOUNT}</Text>
                        </View>

                    </ScrollView>
                    <ButtonComp
                    
                        onPress={addToCart}
                        ButtonText={strings.ADD_TO_CART} />
                </View>

                :
                <Text>{strings.EMPTY_CART}</Text>
            }




        </Wrappercontainer>
    )
};
export default ProductScreen;
