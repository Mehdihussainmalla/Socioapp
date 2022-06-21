//import liraries
import React, { useEffect, useState } from 'react';
import {
    View, Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import colors from '../styles/colors';
import { height, textScale, width } from '../styles/responsiveSize';
import firestore from '@react-native-firebase/firestore';
import { moderateScale } from 'react-native-size-matters';


const ElectronicCard = () => {
    const [accessory, setAccessory] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories").orderBy("accessoryName", "desc")

                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>>")
                        res.forEach(doc => {

                            const { accoryImage, accessoryType, rate } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                accessoryType,
                                rate,


                            })
                            setAccessory(list);
                            if (loading) {
                                setloading(false)
                            }
                            console.log(list, "list is")

                        })

                    })
            } catch (error) {
                console.log(error, "error occurred")

            }
        }
        fetchData();

    }, [])
    const renderItem = ({ item }) => {
        // console.log(item, "dfdfjf>>>>>")
        return (
           
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.liststyle}>
                <Image
                    style={styles.imgstyle}
                    source={{ uri: item?.accoryImage }} />

                <Text style={styles.typestyle}>
                    {item.accessoryType}</Text>
                <Text style={styles.ratestyle}>{item.rate}</Text>

            </TouchableOpacity>

        )

    }


    return (
        <View>
            <FlatList
                numColumns={3}
                data={accessory}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    liststyle:
    {
        marginTop: moderateScale(10),
        justifyContent: 'center',
        width: width / moderateScale(3.5),
        height: height / moderateScale(4.9),
        marginHorizontal: moderateScale(5),
        // backgroundColor: "red",
    },
    imgstyle:
    {
        width: width / moderateScale(4),
        height: height / moderateScale(8.5),
        alignContent: "center",
        alignSelf: "center"
    },
    typestyle:
    {
        alignSelf: "center",
        fontWeight: "400",
        fontSize: textScale(11)
    },
    ratestyle:
    {
        alignSelf: "center", fontWeight: "300",
        fontSize: textScale(10),
        color: "red"
    }
})

export default ElectronicCard;
