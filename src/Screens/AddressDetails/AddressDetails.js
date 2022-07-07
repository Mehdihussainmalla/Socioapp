//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { styles } from './style';
const AddressDetails = ({navigation}) => {
    
    return (
        <Wrappercontainer>
            <Header 
            onPress={()=>navigation.goBack()}
            isBackIcon={true}
                title={strings.ADDRESS_DETAILS} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInputComponent
                    input={styles.fullnametxt}
                    placeholder={strings.FULL_NAME} />

                <TextInputComponent
                    input={styles.phonestyle}
                    placeholder={strings.PHONE_REQUIRED} />
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.alternatenumber}>
                        {strings.ADD_ALTERNATE_NUMBER}</Text>
                </TouchableOpacity>

                <View style={styles.mainstylepincode}>
                    <View style={styles.pinview}>
                        <TextInputComponent
                            input={styles.pincodeinput}
                            placeholder={strings.PINCODE} />
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
                            placeholder={strings.STATE_REQUIRED} />
                    </View>
                    <View style={styles.citystyle}>
                        <TextInputComponent
                            input={styles.cityinput}
                            placeholder={strings.CITY}/>
                    </View>
                </View>
                <TextInputComponent
                    input={styles.houseinput}
                    placeholder={strings.HOUSE}/>
                <TextInputComponent
                    input={styles.roadinput}
                    placeholder={strings.ROAD} />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.showstyle}>
                    <Text style={styles.showtxt}>{strings.SHOW}</Text>
                </TouchableOpacity>

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
                        activeOpacity={0.5}
                        style={styles.workiconstyle}>
                        <Image
                            style={styles.officeicon}
                            source={imagePath.OFFICE_ICON} />
                        <Text style={styles.officetxt}>{strings.WORK}</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComp
                    btnStyle={styles.btnstyle}
                    ButtonText={strings.SAVE_ADDRESS} />
            </ScrollView>
        </Wrappercontainer>
    );
};

export default AddressDetails;
