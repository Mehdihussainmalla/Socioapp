//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
const AddressDetails = ({navigation}) => {
    
    return (
        <Wrappercontainer>
            <Header 
            onPress={()=>navigation.goBack()}
            isBackIcon={true}
                title={"Add Address Details"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInputComponent
                    input={{ borderWidth: 0.9, marginVertical: 20, }}
                    placeholder='Full Name (Required)*' />

                <TextInputComponent
                    input={{ borderWidth: 0.9, marginVertical: 10, }}
                    placeholder='Phone Number (Required)*' />
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{ color: "blue", fontWeight: "300", paddingLeft: 10 }}>+Add Alternative phone number</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                    <View style={{ flex: 0.5 }}>
                        <TextInputComponent
                            input={{ borderWidth: 0.9 }}
                            placeholder='Pincode(Required)*' />
                    </View>
                    <View style={{
                        flex: 0.5,
                        marginRight: 10,
                        marginTop: 5
                    }}>
                        <View style={{
                            backgroundColor: "blue",
                            flexDirection: "row",
                            justifyContent: 'center',
                        }}>
                            <Image
                                style={{ tintColor: "white", marginTop: 6, marginLeft: 0 }}
                                source={imagePath.GPS} />
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text style={{
                                    color: colors.white, paddingTop: 6,
                                    fontWeight: "600", padding: 2
                                }}>use my current location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 15 }}>
                    <View style={{ flex: 0.5 }}>
                        <TextInputComponent
                            input={{ borderWidth: 0.9, }}
                            placeholder='State (Required)*' />
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <TextInputComponent
                            input={{ borderWidth: 0.9 }}
                            placeholder='City(Required)*' />
                    </View>
                </View>
                <TextInputComponent
                    input={{ borderWidth: 0.9, marginTop: 15 }}
                    placeholder='House No.,Building Name (Required)*' />
                <TextInputComponent
                    input={{ borderWidth: 0.9, marginTop: 15 }}
                    placeholder='Road name, Area, Colony (Required)*' />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{ marginTop: 16 }}>
                    <Text style={{ fontWeight: "300", color: "blue" }}>+Add nearby famous shop/mall/LandMark</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontWeight: "500", color: colors.blackOpacity66 }}>Type of address</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            flexDirection: "row", justifyContent: "flex-start", flex: 0.3,
                            borderWidth: 0.5, borderRadius: 20,
                        }}>
                        <Image
                            style={{ tintColor: "blue" }}
                            source={imagePath.Home_icon} />
                        <Text style={{
                            paddingLeft: 10, alignSelf: "center",
                            fontWeight: "500", color: colors.blackOpacity66
                        }}>Home</Text>

                    </TouchableOpacity >
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ flexDirection: "row", justifyContent: "center",
                         flex: 0.5, marginLeft: 20, borderWidth: 0.5, borderRadius: 20, }}>
                        <Image
                            style={{ tintColor: "blue", marginTop: 8 }}
                            source={imagePath.OFFICE_ICON} />
                        <Text style={{
                            paddingLeft: 10, alignSelf: "center",
                            fontWeight: "500", color: colors.blackOpacity66
                        }}>Work</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComp
                    btnStyle={{ marginTop: 127, width: "95%", marginLeft: 10 }}
                    ButtonText='Save Address' />
            </ScrollView>
        </Wrappercontainer>
    );
};


const styles = StyleSheet.create({

});
export default AddressDetails;
