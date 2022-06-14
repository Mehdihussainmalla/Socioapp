//import liraries
import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { height, textScale, width } from '../styles/responsiveSize';

const electronicData = [{
    key: 1,
    image: imagePath.cameras,
    title: "digital cameras",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"

},
{
    key: 2,
    image: imagePath.laptops,
    title: "high confgurations",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"

},
{
    key: 3,
    image: imagePath.watch,
    title: "live long access",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 4,
    image: imagePath.mobile,
    title: "cheap and roboustic",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 5,
    image: imagePath.cameras,
    title: "digital cameras",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 6,
    image: imagePath.mobile,
    title: "cheap and roboustic",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 7,
    image: imagePath.cameras,
    title: "digital cameras",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 8,
    image: imagePath.mobile,
    title: "cheap and roboustic",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
{
    key: 9,
    image: imagePath.watch,
    title: "cheap and roboustic",
    rate: "AED 159.99",
    release: "releasing 21 jun 2022"
},
]

const renderItem = ({ item }) => {
    // console.log(item?.image, "dfdfjf>>>>>")
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                marginTop: 10, justifyContent: 'center',
                width: width / 3.5,
                height: height / 4.9,
                marginHorizontal: 5,

                // marginVertical: 30,
                // borderRadius: 10,
                // borderWidth: 0.5,
                // backgroundColor: "red"
            }}>

            <Image
                style={{
                    width: width / 4,
                    height: height / 8.5,
                    alignContent: "center", alignSelf: "center"
                }}
                source={item?.image} />
            <Text style={{ alignSelf: "center", fontWeight: "400", fontSize: textScale(11) }}>{item.title}</Text>
            <Text style={{
                alignSelf: "center", fontWeight: "300",
                fontSize: textScale(10),
                color: "red"
            }}>{item.rate}</Text>
            <Text style={{
                alignSelf: "center",
                fontSize: textScale(10),
                color: colors.blackOpacity66
            }}>{item.release}</Text>
        </TouchableOpacity>
    )

}
const ElectronicCard = () => {

    return (
        <View>
            <FlatList
                numColumns={3}
                data={electronicData}
                renderItem={renderItem}
                // keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ElectronicCard;
