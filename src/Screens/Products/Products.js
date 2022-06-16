//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import TextInputComponent from '../../Components/Input';
import ButtonComp from '../../Components/Button';
import { textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';


const Products = () => {

    const [state, setState] = useState({
        productImage: "",
        productName: "",
        productCategory: "",
        description: "",
        price: "",
        rating: "",

    });

    const { productImage, productCategory, productName, description, price, rating } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))
    firestore().collection("products").add({
        productImage,
        productName,
        productCategory,
        description,
        price,
        rating,
    })

    const onSubmit = () => {
        
    }
    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Products"} />
                <View style={{ marginTop: 10 }}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14),
                        }}
                        placeholder='productName'
                        value={productName}
                        onChangeText={(productName) => updateState({ productName })}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14)
                        }}
                        placeholder='product category'
                        value={productCategory}
                        onChangeText={(productCategory) => updateState({ productCategory })}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14)
                        }}
                        placeholder='description'
                        value={description}
                        onChangeText={(description) => updateState({ description })}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1, fontSize: textScale(14),
                            color: colors.blackOpacity66
                        }}
                        placeholder='rating'
                        value={rating}
                        onChangeText={(rating) => updateState({ rating })}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1, fontSize: textScale(14),
                            color: colors.blackOpacity66
                        }}
                        placeholder='price'
                        value={price}
                        onChangeText={(price) => updateState({ price })}
                    />
                </View>

            </View>
            <ButtonComp onPress={onSubmit}
                // btnStyle={{marginTop:50}}
                ButtonText='Submit' />
        </Wrappercontainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Products;
