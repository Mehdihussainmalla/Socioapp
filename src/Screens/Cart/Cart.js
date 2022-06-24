//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ImageBackground } from 'react-native';

import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import actions from "../../redux/actions"
import { styles } from './styles';
import navigationStrings from '../../navigation/navigationStrings';
import { useDispatch } from 'react-redux';
import types from '../../redux/types';



// create a component
const Cart = ({ route, navigation }) => {
    // const data = useSelector((state) => state)
    // console.log(data, "data isssssssss>>>")

    const item = route?.params?.data
    // console.log(item, "data is")
    const [itemCount, setItemCount] = useState(0);

    const addToCart = (item) => {
        console.log(item, "items are")
        actions.addToCart(item)
        navigation.navigate(navigationStrings.SEARCH_SCREEN)
    }
const dispatch =useDispatch()
    const increment = () => {
   dispatch({
    type:types.INCREMENT
   })
        //  setItemCount(actions.Increment(itemCount))
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
                            <TouchableOpacity activeOpacity={0.5}

                            >

                                <ImageBackground style={styles.headericon} source={imagePath.cart}>
                                    <Text style={{ fontSize: 15, color: "red" }}>Add{itemCount}</Text>
                                </ImageBackground>

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
                    <ButtonComp
                    onPress={increment}
                        // onPress={() => addToCart([item])}
                        ButtonText='Add To Cart' />
                </View>

                :
                <Text>empty cart</Text>
            }




        </Wrappercontainer>
    )
}
export default Cart;
