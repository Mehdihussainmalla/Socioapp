//import liraries
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
import { textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import ImagePicker from 'react-native-image-crop-picker';
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './styles';
import strings from '../../constants/lang';
import storage from "@react-native-firebase/storage";


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

    const { productImg, productCategory, productName, description, price, rating } = state;
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
            // console.log(imageUri, "image is")
            updateState({ productImg: imageUri })
            // console.log(productImg, "profile image is")
        });
    }


    const uploadImage = async () => {
        const uploadUri = productImg;
        console.log(uploadUri, "image uri is")
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
        // console.log(fileName, "file name is >>")
        const extension = fileName.split('.').pop();
        const name = fileName.split('.').slice(0, -1).join('.');
        fileName = name + Date.now() + '.' + extension;

        setUploading(true)
        setTransferred(0);
        const task = storage().ref(fileName).putFile(uploadUri);
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);

            Math.round(setTransferred(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100)
        });

        try {
            await task;
            setUploading(false)
            Alert.alert(
                "image uploaded sucessfully to firestore")

        } catch (error) {
            console.log(error, "error occurred")

        }

    }


    //............firestore.............//  


    // const onSubmit =async () => {       

    //............................................................................//      
    // await firestore().collection("products").add({

    //     productImage: productImg,
    //     productName: productName,
    //     productCategory: productCategory,
    //     description: description,
    //     price: price,
    //     rating: rating,
    // })
    // navigation.navigate(navigationStrings.HOME)
    // }


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

            {uploading ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>{transferred} % completed</Text>
                <ActivityIndicator size={"large"}
                    color={colors.redB} />
            </View> : <ButtonComp onPress={uploadImage}
                ButtonText={strings.SUBMIT} />}

        </Wrappercontainer>
    );
};

export default Products;
