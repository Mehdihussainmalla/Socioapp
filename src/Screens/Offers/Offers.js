//import liraries
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Alert,
    TouchableOpacity, Image, ActivityIndicator
} from 'react-native';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import strings from '../../constants/lang';
import storage from "@react-native-firebase/storage";
import colors from '../../styles/colors';
import firestore from '@react-native-firebase/firestore';
import TextInputComponent from '../../Components/Input';
import ButtonComp from '../../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { textScale } from '../../styles/responsiveSize';
// create a component
const Offers = ({ navigation }) => {
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [state, setState] = useState({
        offerImage: " ",

    });

    const { offerImage} = state;
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
            updateState({ offerImage: imageUri })
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
            // console.log(image?.path, "image path is")
            // console.log(imageUri, "image is")
            updateState({ offerImage: imageUri })
            //  console.log(offerImage, "profile image is")
        });
    }

    //...............upload image into storage in firbase...........//
    const uploadImage = async () => {
        if ( offerImage == null) {
            return null;
        }

        const uploadUri = offerImage;
        //  console.log(uploadUri,"uri issss")
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
        //  console.log(imageUrl, "image url is>>>")
        try {
            await firestore().collection('offers').add({
                offerImage: imageUrl


            }).then((res) => {
                // console.log(res, "res>>> is")
                navigation.navigate(navigationStrings.HOME)

            })

        }

        catch (error) {
            console.log(error, "something went wrong during firestore")
        }
    }
    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
                title={"offers"} />
            <Image
                style={styles.imgstyle}
                source={{ uri: offerImage}}
            />
            <TouchableOpacity
                onPress={onSelectImage}
                activeOpacity={0.5}
                style={styles.imageview}>


                <Text style={styles.imagetext}
                > {strings.UPLOAD_IMAGE}</Text>
            </TouchableOpacity>

            {uploading ? <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
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


const styles = StyleSheet.create({
    input1: {
        marginTop: moderateVerticalScale(10)
    },
    txtinput1: {
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        color: colors.blackOpacity66,
        fontSize: textScale(14),
    },
    imgstyle:
    {
        height: "20%", width: "70%",
        justifyContent: "center",
        alignSelf: "center"
    },
    imageview: {
        marginTop: moderateScale(10),
        flex: 0.1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "baseline",

    },
    imagetext: {
        fontSize: textScale(16),
        alignSelf: "center",
        alignItems: "center",
        color: colors.DarkBlue,
        fontWeight: "500"
    },

});


export default Offers;
