//import liraries
import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, Image, ScrollView, Alert,
    TouchableOpacity, ActivityIndicator, Platform
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { textScale, width } from '../../styles/responsiveSize';
import ImagePicker from 'react-native-image-crop-picker';
import storage from "@react-native-firebase/storage";
import firestore from '@react-native-firebase/firestore';
import navigationStrings from '../../navigation/navigationStrings';
import { useNavigation } from '@react-navigation/native';

const Accessories = (props) => {

    // console.log(props, "route issss")
    const navigation = useNavigation();
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [state, setState] = useState({
        accoryImage: " ",
        accessoryType: "",
        productName: "",
        description: "",
        price: "",
        rating: "",
        Details: "",
        totalPrice: "",
        discount: "",
        deliveryCharges: "",
        productCategory:""


    });
    const { accoryImage, accessoryType, rating, productName, description,
        price, Details, totalPrice, discount, deliveryCharges ,productCategory} = state;
    const updateState = (data) => setState({ ...state, ...data })



    //..........image picker............//

    const onSelectImage = () => {

        Alert.alert(
            "accessory picture",
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


    //.............open camera..............//
    const cameraClick = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            const imageUri = Platform.OS === "ios" ? image?.sourceURL : image?.path;
            // console.log(imageUri, "imageuri is >>>");
            updateState({ accoryImage: imageUri });
        });

    }
    //............open gallery..............//
    const galleryClick = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            console.log(imageUri, "image is")
            updateState({ accoryImage: imageUri })
            // console.log(accoryImage, "accessory image is")
        });
    }
    //................create url of the image............//

    const uploadImage = async () => {
        if (accoryImage == null) {
            return null;
        }

        const uploadUri = accoryImage;
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
        const extension = fileName.split('.').pop();
        const name = fileName.split('.').slice(0, -1).join('.');
        fileName = name + Date.now() + '.' + extension;

        setUploading(true)
        // setTransferred(0);

        const storageRef = storage().ref(`gallery/${fileName}`);
        const storageImage = storageRef.putFile(uploadUri);

        try {
            await storageImage;
            const url = await storageRef.getDownloadURL();
            setUploading(false)
            return url;




        } catch (error) {
            console.log(error, "error occurred during url")
            return null;
        }
    }
    const submitProduct = async () => {

        const imageUrl = await uploadImage();
        // console.log(imageUrl, "image url is")
        try {
            await firestore().collection("accessories").add({

                accoryImage: imageUrl,
                accessoryType: accessoryType,
                rating: rating,
                productName: productName,
                description: description,
                price: price,
                Details: Details,
                totalPrice: totalPrice,
                discount: discount,
                deliveryCharges: deliveryCharges,
                productCategory:productCategory



            }).then(() => {
                navigation.navigate(navigationStrings.HOME)
            })

        } catch (error) {
            console.log(error, "error occurred")

        }

    }

    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Accessories"} />
                <ScrollView>
                    <Image style={styles.imgstyle}
                        source={{ uri: accoryImage }} />
                    <TouchableOpacity
                        onPress={onSelectImage}
                        activeOpacity={0.5}
                        style={styles.uploadstyle}>
                        <Text style={styles.uploadtxt}>upload Image</Text>
                    </TouchableOpacity>

                    <View style={styles.inputstyle}>
                        <TextInputComponent
                            value={productName}
                            onChangeText={(productName) => updateState({ productName })}
                            input={styles.input1}
                            placeholder={"Product Name"} />

                        <TextInputComponent
                            value={accessoryType}
                            onChangeText={(accessoryType) => updateState({ accessoryType })}
                            input={styles.input1}
                            placeholder={'Accessory type'} />

                        <TextInputComponent
                            value={rating}
                            onChangeText={(rating) => updateState({ rating })}
                            input={styles.input1}
                            placeholder={"Rating"} />
                        {/* ..........................new inputs */}
                        <TextInputComponent
                            value={discount}
                            onChangeText={(discount) => updateState({ discount })}
                            input={styles.input1}
                            placeholder={"Discount"} />

                        <TextInputComponent
                            value={totalPrice}
                            onChangeText={(totalPrice) => updateState({ totalPrice })}
                            input={styles.input1}
                            placeholder={"Total Price"} />

                        <TextInputComponent
                            value={deliveryCharges}
                            onChangeText={(deliveryCharges) => updateState({ deliveryCharges })}
                            input={styles.input1}
                            placeholder={"Delivery Charges"} />
                        <TextInputComponent
                            value={price}
                            onChangeText={(price) => updateState({ price })}
                            input={styles.input1}
                            placeholder={"Price"} />

                        <TextInputComponent
                            value={productCategory}
                            onChangeText={(productCategory) => updateState({ productCategory })}
                            input={styles.input1}
                            placeholder={"productCategory"} />
                            <TextInputComponent
                            value={Details}
                            onChangeText={(Details) => updateState({ Details })}
                            input={styles.input1}
                            placeholder={"Details"} />


                    </View>
                </ScrollView>

                {uploading ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                    {/* <Text>{transferred} % completed</Text> */}
                    <ActivityIndicator size={"large"}
                        color={colors.redB}
                    />


                </View> : <ButtonComp

                    onPress={submitProduct}
                    ButtonText={"Submit"}
                />
                }
            </View>



        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgstyle:
    {
        width: width / moderateScale(2),
        height: moderateScale(110),
        marginHorizontal: moderateScale(10),
        // marginTop: moderateScale(10),
        alignSelf: "center"

    },
    uploadstyle:
    {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1
    },
    uploadtxt:
    {
        fontSize: textScale(14),
        color: colors.redB,
        fontWeight: "600"
    },
    input1:
    {
        borderRadius: moderateVerticalScale(10),
        borderWidth: moderateScale(1),
        marginTop: moderateScale(10),
        fontSize: textScale(16),
    },
    inputstyle:
    {
        marginTop: moderateScale(30)
    }
});

export default Accessories;

