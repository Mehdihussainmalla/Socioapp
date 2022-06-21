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


const ElectronicCard = () => {
    const [accessory, setAccessory] = useState(null);
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {

                const list = [];
                await firestore().collection("accessories").orderBy("accoryName", "desc").get()
                    .then((res) => {
                        console.log(res, "res is >>>>")
                        res.forEach(doc => {
                            const { accoryImage, rate, accessoryType } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                rate,
                                accessoryType
                            })

                            console.log(list, "list isssss")
                            setAccessory(list)
                            if (loading) {
                                setloading(false)
                            }
                        })
                    }
                    )

            } catch (error) {
                console.log(error, "error occurred ")

            }
        }
        fetchdata();

    }, [])
    const renderItem = ({ item }) => {
        console.log(item, "dfdfjf>>>>>")
        return (


            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    marginTop: 10,
                    justifyContent: 'center',
                    width: width / 3.5,
                    height: height / 4.9,
                    marginHorizontal: 5,
                    // backgroundColor: "red",
                }}>
                <Image
                    style={{
                        width: width / 4,
                        height: height / 8.5,
                        alignContent: "center", alignSelf: "center"
                    }}
                    source={{ uri: item?.accoryImage }} />




                <Text style={{
                    alignSelf: "center",
                    fontWeight: "400",
                    fontSize: textScale(11)
                }}>
                    {item.accessoryType}</Text>
                <Text style={{
                    alignSelf: "center", fontWeight: "300",
                    fontSize: textScale(10),
                    color: "red"
                }}>{item.rate}</Text>

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

export default ElectronicCard;
