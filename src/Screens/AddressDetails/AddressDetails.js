//import liraries
import { FirebaseStorageTypes } from '@react-native-firebase/storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import strings, { changeLanguage } from '../../constants/lang';
import colors from '../../styles/colors';
import { styles } from './style';
import firestore from '@react-native-firebase/firestore';
import navigationStrings from '../../navigation/navigationStrings';


const AddressDetails = ({ navigation }) => {

    const [state, setState] = useState({
        fullName: "",
        phoneNumber: "",
        alternateNumnber: "",
        pincode: "",
        stateName: "",
        city: "",
        houseNumber: "",
        roadName: "",
        landMark: "",
    })
    const { fullName, phoneNumber, alternateNumnber, pincode,
        stateName, city, houseNumber, roadName, landMark } = state;
    const updateState = data => setState({ ...state, ...data })

    const [show, setShow] = useState(true);
    const [enable, setEnable] = useState(true);
    const [addressType, setAddressType] = useState(true);


    const onClick = () => {
        setShow(false)

    }
    const shopAddress = () => {
        setEnable(false)
    }

    const deliverAddress=()=>{
        setAddressType(false)
    }

    //................firebase collection ...............//

    const addressCollection = async () => {
        try {

            await firestore().collection(`AddAddress`).add({
                fullName: fullName,
                phoneNumber: phoneNumber,
                alternateNumnber: alternateNumnber,
                pincode: pincode,
                stateName: stateName,
                city: city,
                houseNumber: houseNumber,
                roadName: roadName,
                landMark: landMark
            })
                .then((res) => {
                    // console.log(res, "response for address is")
                    navigation.navigate(navigationStrings.ORDER_SUMMARY)
                })

        } catch (error) {
            console.log(error, "error occurred ")
        }
    }
    return (
        <Wrappercontainer>
            <Header
                onPress={() => navigation.goBack()}
                isBackIcon={true}
                title={strings.ADDRESS_DETAILS} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInputComponent
                    input={styles.fullnametxt}
                    placeholder={strings.FULL_NAME}
                    value={fullName}
                    onChangeText={(fullName) => updateState({ fullName })}
                />

                <TextInputComponent
                    input={styles.phonestyle}
                    placeholder={strings.PHONE_REQUIRED}
                    value={phoneNumber}
                    onChangeText={(phoneNumber) => updateState({ phoneNumber })}
                />
                {show ? <TouchableOpacity
                    onPress={onClick}
                    activeOpacity={0.5}>
                    <Text style={styles.alternatenumstyle}>+
                        {strings.ADD_ALTERNATE_NUMBER}</Text>
                </TouchableOpacity> :
                    <View>
                        <TextInputComponent
                            value={alternateNumnber}
                            onChangeText={(alternateNumnber) => updateState({ alternateNumnber })}
                            input={styles.phonestyle}
                            placeholder={strings.ADD_ALTERNATE_NUMBER} />
                        <View style={styles.closebtn}>
                            <Text onPress={() => setShow(true)}
                                style={styles.closetxt}
                            >{strings.CLOSE}</Text>
                        </View>
                    </View>
                }

                <View style={styles.mainstylepincode}>
                    <View style={styles.pinview}>
                        <TextInputComponent
                            input={styles.pincodeinput}
                            placeholder={strings.PINCODE}
                            value={pincode}
                            onChangeText={(pincode) => updateState({ pincode })}
                        />
                    </View>
                    <View style={styles.locationstyle}>
                        <View style={styles.gpsstyle}>
                            <Image
                                style={styles.gpsicon}
                                source={imagePath.GPS} />
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text style={styles.currentstyle}>{strings.CURRENT_LOCATION}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.statecitystyle}>
                    <View style={styles.statestyle}>
                        <TextInputComponent
                            input={styles.stateinput}
                            placeholder={strings.STATE_REQUIRED}
                            value={stateName}
                            onChangeText={(stateName) => updateState({ stateName })}
                        />
                    </View>
                    <View style={styles.citystyle}>
                        <TextInputComponent
                            input={styles.cityinput}
                            placeholder={strings.CITY}
                            value={city}
                            onChangeText={(city) => updateState({ city })}
                        />
                    </View>
                </View>
                <TextInputComponent
                    input={styles.houseinput}
                    placeholder={strings.HOUSE}
                    value={houseNumber}
                    onChangeText={(houseNumber) => updateState({ houseNumber })}
                />
                <TextInputComponent
                    input={styles.roadinput}
                    placeholder={strings.ROAD}
                    value={roadName}
                    onChangeText={(roadName) => updateState({ roadName })}
                />
                {enable ? <TouchableOpacity
                    onPress={shopAddress}
                    activeOpacity={0.5}
                    style={styles.showstyle}>
                    <Text style={styles.showtxt}>{strings.SHOW}</Text>
                </TouchableOpacity> :
                    <View>
                        <TextInputComponent
                            input={styles.phonestyle}
                            value={landMark}
                            onChangeText={(landMark) => updateState({ landMark })}
                            placeholder={strings.NEARBY_ADDRESS} />
                        <TouchableOpacity onPress={() => setEnable(true)}
                            style={styles.closebtn}>
                            <Text
                                style={styles.closetxt}
                            >{strings.CLOSE}</Text>
                        </TouchableOpacity>
                    </View>
                }

                <View style={styles.typestyle}>
                    <Text style={styles.typetxt}>{strings.TYPE}</Text>
                </View>
                <View style={styles.typeaddress}>
                    <TouchableOpacity
                    onPress={deliverAddress}
                        activeOpacity={0.5}
                        style={styles.homeiconstyle}>
                        <Image
                            style={styles.homeicon}
                            source={imagePath.Home_icon} />
                        <Text style={styles.hometxt}>{strings.HOME}</Text>

                    </TouchableOpacity >
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.workiconstyle}>
                        <Image
                            style={styles.officeicon}
                            source={imagePath.OFFICE_ICON} />
                        <Text style={styles.officetxt}>{strings.WORK}</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComp
                    onPress={addressCollection}
                    btnStyle={styles.btnstyle}
                    ButtonText={strings.SAVE_ADDRESS} />
            </ScrollView>
        </Wrappercontainer>
    );
};

export default AddressDetails;
