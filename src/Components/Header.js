import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import { moderateScaleVertical, textScale, width } from '../styles/responsiveSize';
const Header = ({
    container = '',
    textstyle,
    isBackIcon,
    title,
    onPress,
    imageStyle

}) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={{ ...styles.container, container }}>
            {!!isBackIcon && (

                <TouchableOpacity activeOpacity={0.5}
                    onPress={!!onPress ? onPress : () => goBack()} >
                    <Image style={{...styles.imageStyle, ...imageStyle}} source={imagePath.back_arrow} />
                </TouchableOpacity>
            )}
            <View style={{
                width: "90%"
            }}>
                <Text style={{ ...styles.textstyle,...textstyle }}>{title}</Text>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // backgroundColor: '#2c3e50',
        // paddingHorizontal:20,
        marginHorizontal: moderateScaleVertical(5)

    },
    textstyle: {
        fontSize: moderateScaleVertical(20),
        paddingVertical: moderateScaleVertical(4),
        fontWeight: "500",
        textAlign: "center"

    },
    imageStyle:
    { padding: moderateScaleVertical(13), 
        marginTop: moderateScaleVertical(4) }
});

export default Header;
