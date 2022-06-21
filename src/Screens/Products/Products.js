import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import TextInputComponent from '../../Components/Input';
import ButtonComp from '../../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './styles';
import strings from '../../constants/lang';
import storage from "@react-native-firebase/storage";
import colors from '../../styles/colors';


const Products = ({ navigation }) => {
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [state, setState] = useState({
        productImage: "",
        productName: "",
        productCategory: "",
        description: "",
        price: "",
        rating: "",

    });

    const { productImage, productCategory, productName, description, price, rating } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }));


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
            // console.log(imageUri, "image is")
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
            console.log(image?.path, "image path is")
            // console.log(imageUri, "image is")
            updateState({ productImage: imageUri })
            // console.log(productImg, "profile image is")
        });
    }

    //...............upload image into storage in firbase...........//
    const uploadImage = async () => {
        if (productImage == null) {
            return null;
        }

        const uploadUri = productImage;
        // console.log(uploadUri,"uri issss")
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);  //.......create file name
        const extension = fileName.split('.').pop();
        const name = fileName.split('.').slice(0, -1).join('.');
        fileName = name + Date.now() + '.' + extension;  //.........time stamp..............//

        setUploading(true)
        setTransferred(0);

        const storageRef = storage().ref(`photos/${fileName}`);
        const task = storageRef.putFile(uploadUri);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);

            Math.round(setTransferred(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100)
        });

        try {

            await task;
            const url = await storageRef.getDownloadURL();
            setUploading(false)
            return url

        } catch (error) {
            console.log(error, "error occurred")
            return null

        }

    }


    //............firestore.............//  


    const onSubmit = async () => {
        const imageUrl = await uploadImage();
        // console.log(imageUrl, "image url is>>>")
        try {
            await firestore().collection('products').add({
                productImage: imageUrl,
                productName: productName,
                productCategory: productCategory,
                description: description,
                price: price,
                rating: rating,

            }).then((res) => {
                //  console.log(res, "res>>> is")
                navigation.navigate(navigationStrings.HOME)

            })

        }

        catch (error) {
            console.log(error, "something went wrong during firestore")
        }
    }
    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={strings.PRODUCTS} />
                <Image
                    style={styles.imgstyle}
                    source={{ uri: productImage }}
                />
                <TouchableOpacity
                    onPress={onSelectImage}
                    activeOpacity={0.5}
                    style={styles.imageview}>


                    <Text style={styles.imagetext}
                    > {strings.UPLOAD_IMAGE}</Text>
                </TouchableOpacity>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={styles.txtinput1}
                        placeholder={strings.PRODUCT_NAME}
                        value={productName}
                        onChangeText={(productName) => updateState({ productName })}
                    />
                </View>

                <View style={styles.input1}>
                    <TextInputComponent
                        input={styles.txtinput1}
                        placeholder={strings.PRODUCT_CATEGORY}
                        value={productCategory}
                        onChangeText={(productCategory) => updateState({ productCategory })}
                    />
                </View>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={styles.txtinput1}
                        placeholder={strings.DESCRIPTION}
                        value={description}
                        onChangeText={(description) => updateState({ description })}
                    />
                </View>


                <View style={styles.input1}>
                    <TextInputComponent
                        input={styles.txtinput1}
                        placeholder={strings.PRICE}
                        value={price}
                        onChangeText={(price) => updateState({ price })}
                    />
                </View>
                <View style={styles.input1}>
                    <TextInputComponent
                        input={styles.txtinput1}
                        placeholder={strings.RATING}
                        value={rating}
                        onChangeText={(rating) => updateState({ rating })}
                    />
                </View>

            </View>

            {uploading ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>{transferred} % completed</Text>
                <ActivityIndicator size={"large"}
                    color={colors.redB}
                />


            </View> :
                <ButtonComp onPress={onSubmit}
                    ButtonText={strings.SUBMIT}
                />
            }

        </Wrappercontainer>
    );
};

export default Products;
