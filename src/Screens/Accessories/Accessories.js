//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/Input';
import Wrappercontainer from '../../Components/wrappercontainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { textScale } from '../../styles/responsiveSize';


// create a component
const Accessories = () => {
    const [state, setState] = useState({
        accoryImage,
        accessoryType,
        rate,
        aboutProduct,
        stars,
        ratings,
    });
    const { accoryImage, accessoryType, rate, aboutProduct, stars, ratings, } = state;
    const updateState = (data) => setState({ ...state, ...data })

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
                            marginTop: moderateScale(10)
                        }}
                            source={imagePath.profile_pic} />
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: textScale(14), color: colors.redB, fontWeight: "600" }}>upload Image</Text>
                        </View>
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

            <ButtonComp
                onPress={() => submitData()}
                ButtonText={'Submit'} />
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

