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

const ItemDetails = (props) => {

    // console.log(props, "route issss")
    const navigation = useNavigation();
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [state, setState] = useState({
        accoryImage: " ",
        accessoryType,
        rate,
        description,
    });
    const { accoryImage, accessoryType, rate, description } = state;
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
            await firestore().collection("itemdetails").add({

                accoryImage: imageUrl,
                accessoryType: accessoryType,
                rate: rate,
                description: description,

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
                    title={"item detais"} />
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
                            value={accessoryType}
                            onChangeText={(accessoryType) => updateState({ accessoryType })}
                            input={styles.input1}
                            placeholder={'Accessory type'} />


                        <TextInputComponent
                            value={rate}
                            onChangeText={(rate) => updateState({ rate })}
                            input={styles.input1}
                            placeholder={'rate'} />

                        <TextInputComponent
                            value={description}
                            onChangeText={(description) => updateState({ description })}
                            input={styles.input1}
                            placeholder={'description'} />
                    </View>
                </ScrollView>

                {uploading ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>{transferred} % completed</Text>
                    <ActivityIndicator size={"large"}
                        color={colors.redB}
                    />


                </View> : <ButtonComp onPress={submitProduct}
                    ButtonText={"Submit"}
                />
                }
                {/* <ButtonComp
                    onPress={submitProduct}
                    ButtonText={"Submit"} /> */}
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
        marginTop: moderateScale(10),
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
        marginTop: moderateScale(15),
        fontSize: textScale(16),
    },
    inputstyle:
    {
        marginTop: moderateScale(30)
    }
});

export default ItemDetails;

