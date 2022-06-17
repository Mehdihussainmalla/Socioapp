//import liraries
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
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
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './styles';
import strings from '../../constants/lang';


const Products = ({ navigation }) => {



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


    const onSubmit = async () => {

        await firestore().collection("products").add({

            productImage: productImg,
            productName: productName,
            productCategory: productCategory,
            description: description,
            price: price,
            rating: rating,


        }).then(() => {
            let data = {
                productImage: productImg,
                productName: productName,
                productCategory: productCategory,
                description: description,
                price: price,
                rating: rating,

            }
            console.log(data, "data is")
            navigation.navigate(navigationStrings.HOME, { data: data })
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
            const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            console.log(imageUri, "image is")
            updateState({ productImg: imageUri })
            // console.log(productImg, "profile image is")
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
            // console.log(productImg, "profile image is")
        });
    }

    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={strings.PRODUCTS} />
                <TouchableOpacity
                    onPress={onSelectImage}
                    activeOpacity={0.5}
                    style={styles.imageview}>


                    <Text style={styles.imagetext}
                    > {strings.UPLOAD_IMAGE}</Text>
                </TouchableOpacity>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14),
                        }}
                        placeholder={strings.PRODUCT_NAME}
                        value={productName}
                        onChangeText={(productName) => updateState({ productName })}
                    />
                </View>

                <View style={styles.input1}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14)
                        }}
                        placeholder={strings.PRODUCT_CATEGORY}
                        value={productCategory}
                        onChangeText={(productCategory) => updateState({ productCategory })}
                    />
                </View>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1,
                            color: colors.blackOpacity66,
                            fontSize: textScale(14)
                        }}
                        placeholder={strings.DESCRIPTION}
                        value={description}
                        onChangeText={(description) => updateState({ description })}
                    />
                </View>


                <View style={styles.input1}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1, fontSize: textScale(14),
                            color: colors.blackOpacity66
                        }}
                        placeholder={strings.PRICE}
                        value={price}
                        onChangeText={(price) => updateState({ price })}
                    />
                </View>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={{
                            borderRadius: 10, borderWidth: 1, fontSize: textScale(14),
                            color: colors.blackOpacity66
                        }}
                        placeholder={strings.RATING}
                        value={rating}
                        onChangeText={(rating) => updateState({ rating })}
                    />
                </View>

            </View>
            <ButtonComp onPress={onSubmit}
                ButtonText={strings.SUBMIT} />
        </Wrappercontainer>
    );
};

export default Products;
