//import liraries
import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import TextInputComponent from '../../Components/Input';
import ButtonComp from '../../Components/Button';
import { textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import ImagePicker from 'react-native-image-crop-picker';


const Products = () => {



    const [state, setState] = useState({
        productImage: null,
        productName: "",
        productCategory: "",
        description: "",
        price: "",
        rating: "",

    });

    const { productImg, productCategory, productName, description, price, rating } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }));

    //............firestore.............//  


    const onSubmit = () => {

        firestore().collection("products").add({
            productImage: productImg,
            productName: productName,
            productCategory: productCategory,
            description: description,
            price: price,
            rating: rating,
        })

    }

    const onSelectImage = () => {
        Alert.alert(
            "product picture",
            "choose an option",
            [{
                text: "Camera",
                onPress: cameraClick
            },
            {
                text: "Gallery",
                onPress: galleryClick
            },

            { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }


            ])
    }

    const cameraClick = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            // const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            // console.log("image uri is >>",imageUri)
            // updateState({imageUri:productImage});
            // console.log(productImage);
        });

    }

    const galleryClick = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            console.log(imageUri, "image is")
            updateState({ productImg: imageUri })
            console.log(productImg, "profile image is")
        });
    }

    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Products"} />
                <Image
                    style={{ height: "20%", width: "50%", alignSelf: "center" }}
                    source={{ uri: productImg }}
                />

                <TouchableOpacity
                    onPress={onSelectImage}
                    activeOpacity={0.5}
                    style={{
                        marginTop: 10,
                        // backgroundColor:"red",
                        flex: 0.1,
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "baseline",
                    }}>


                    <Text style={{
                        fontSize: textScale(14),
                        alignSelf: "center",
                        alignItems: "center",
                        color: colors.DarkBlue
                    }}> upload image</Text>
                </TouchableOpacity>
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

export default Products;
