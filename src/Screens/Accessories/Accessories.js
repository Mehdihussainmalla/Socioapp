//import liraries
import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, Image, ScrollView, Alert,
    TouchableOpacity, ActivityIndicator
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { textScale } from '../../styles/responsiveSize';
import ImagePicker from 'react-native-image-crop-picker';
import storage from "@react-native-firebase/storage";

// create a component
const Accessories = () => {
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [state, setState] = useState({
        accoryImage: " ",
        accessoryType,
        rate,
        aboutProduct,
        stars,
        ratings,
    });
    const { accoryImage, accessoryType, rate, aboutProduct, stars, ratings, } = state;
    const updateState = (data) => setState({ ...state, ...data })



    //..........image picker............//
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
            updateState({ accoryImage: imageUri })
            // console.log(accoryImage, "profile image is")
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
            // console.log(image?.path, "image path is")
            console.log(imageUri, "image is")
            // updateState({ imageUri: accoryImage })
            updateState({ accoryImage: imageUri })
            console.log(accoryImage, "accessory image is")
        });
    }
    //................create url of the image............//
    const uploadImage = async () => {
        if (accoryImage == null) {
            return null;
        }

        const uploadUri = accoryImage;
        //    console.log(uploadUri,"uri issss")
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);  //.......create file name
        // console.log(fileName, "file name is")
        const extension = fileName.split('.').pop();
        const name = fileName.split('.').slice(0, -1).join('.');
        fileName = name + Date.now() + '.' + extension;  //.........time stamp..............//
        setUploading(true)
        setTransferred(0);

        const storageRef = storage().ref(`gallery/${fileName}`);
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

    const submitData = () => {
        alert("in process")
    }
    return (
        <Wrappercontainer>
            <View style={styles.container}>
                <Header isBackIcon={true}
                    title={"Accessories"} />
                <ScrollView>
                    <View style={{ flex: 0.69 }}>
                        <Image style={{
                            justifyContent: 'center',
                            alignSelf: "center",
                            marginTop: moderateScale(10),
                            height: "40%",
                            width: "70%",
                            borderRadius: 20,
                        }}
                            source={{ uri: accoryImage }} />
                        <TouchableOpacity onPress={onSelectImage}
                            activeOpacity={0.5}
                            style={{
                                justifyContent: "center",
                                alignItems: "center", marginTop: 10
                            }}>
                            <Text style={{
                                fontSize: textScale(14),
                                color: colors.redB,
                                fontWeight: "600"
                            }}>upload Image</Text>
                        </TouchableOpacity>
                        <TextInputComponent
                            value={accessoryType}
                            onChangeText={(accessoryType) => updateState({ accessoryType })}
                            input={{
                                borderRadius: moderateVerticalScale(10),
                                borderWidth: moderateScale(1),
                                marginTop: moderateScale(20),
                                fontSize: textScale(16),
                            }}
                            placeholder={'Accessory type'} />
                        <TextInputComponent
                            value={rate}
                            onChangeText={(rate) => updateState({ rate })}
                            input={{
                                borderRadius: moderateVerticalScale(10),
                                borderWidth: moderateScale(1),
                                marginTop: moderateScale(20),
                                fontSize: textScale(16),
                            }}
                            placeholder={"rate"} />
                        <TextInputComponent
                            value={aboutProduct}
                            onChangeText={(aboutProduct) => updateState({ aboutProduct })}
                            input={{
                                borderRadius: moderateVerticalScale(10),
                                borderWidth: moderateScale(1),
                                marginTop: moderateScale(20),
                                fontSize: textScale(16),
                            }}
                            placeholder={"about product"} />
                        <TextInputComponent
                            value={stars}
                            onChangeText={(stars) => updateState({ stars })}
                            input={{
                                fontSize: textScale(16),
                                borderRadius: moderateVerticalScale(10),
                                borderWidth: moderateScale(1), marginTop: 20,
                            }}
                            placeholder={"stars"} />
                        <TextInputComponent
                            value={ratings}
                            onChangeText={(ratings) => updateState({ ratings })}
                            input={{
                                fontSize: textScale(16),
                                borderRadius: moderateVerticalScale(10),
                                borderWidth: moderateScale(1), marginTop: 20,
                            }}
                            placeholder={"ratings"} />

                    </View>
                </ScrollView>
            </View>
            {uploading ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>{transferred} % completed</Text>
                <ActivityIndicator size={"large"}
                    color={colors.redB}
                />


            </View> : <ButtonComp onPress={uploadImage}
                ButtonText={"Submit"}
            />
            }

        </Wrappercontainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default Accessories;

