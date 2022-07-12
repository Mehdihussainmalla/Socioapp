import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import { styles } from './style';
import firestore from '@react-native-firebase/firestore';
import navigationStrings from '../../navigation/navigationStrings';
import strings from '../../constants/lang';
import { useSelector } from 'react-redux';


const AddressDetails = ({ navigation }) => {


    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const Uid = userData?.uid;
    // console.log(Uid,"userdata>>>>>")
    const [state, setState] = useState({
        fullName: "",
        phoneNumber: "",
        alternateNumber: "",
        pincode: "",
        stateName: "",
        city: "",
        houseNumber: "",
        roadName: "",
        landMark: "",
    })
    const { fullName, phoneNumber, alternateNumber, pincode,
        stateName, city, houseNumber, roadName, landMark } = state;
    const updateState = data => setState({ ...state, ...data })

    const [show, setShow] = useState(true);
    const [enable, setEnable] = useState(true);
    const onClick = () => {
        setShow(false)

    }
    const shopAddress = () => {
        setEnable(false)
    }
    //................firebase collection ...............//

    const addressCollection = async () => {
        try {

            await firestore().collection(`AddAddress${Uid}`).add({
                fullName: fullName,
                phoneNumber: phoneNumber,
                alternateNumber: alternateNumber,
                pincode: pincode,
                stateName: stateName,
                city: city,
                houseNumber: houseNumber,
                roadName: roadName,
                landMark: landMark
            })
                .then(() => {
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
                            value={alternateNumber}
                            onChangeText={(alternateNumber) => updateState({ alternateNumber })}
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
                            <TouchableOpacity

                                activeOpacity={0.5}>
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
                        activeOpacity={0.5}
                        style={styles.homeiconstyle}>
                        <Image
                            style={styles.homeicon}
                            source={imagePath.Home_icon} />
                        <Text style={styles.hometxt}>{strings.HOME}</Text>
                    </TouchableOpacity >

                    <TouchableOpacity
                        // onPress={deliverAddress}
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
