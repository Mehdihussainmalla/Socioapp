//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import Header from '../../Components/Header';
import { textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';

const CategoryItems = ({ route }) => {
    const { data } = route?.params;
    const category = data.accessoryType;
    console.log(category, "category is")
    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("itemdetails")
                    .where("accessoryType", "==", category)
                    .get().then((res) => {
                        console.log(res.size, "res >>>>>>>")
                        res.forEach(doc => {

                            const { accoryImage, accessoryType, rate } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                accessoryType,
                                rate,
                            })
                            setproducts(list);
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
        console.log(item, "items are>>>>>")
        return (
            <View style={{
                marginTop: 30, height: "70%",
                marginVertical: 50,
                borderWidth: 0.9,
                flexDirection: "row"
            }}>
                <Image
                    style={{ width: "40%" }}
                    source={{ uri: item.accoryImage }} />
                <Text style={{
                    fontSize: textScale(20),
                    paddingLeft: 20,
                    marginTop: 10, color: colors.redB,
                    fontWeight: "500"
                }}>
                    {item?.accessoryType}
                </Text>
                <Text>{item.rate}</Text>

            </View>
        )

    }

    return (
        <Wrappercontainer>
            <Header isBackIcon={true} />
            <FlatList
                renderItem={renderItem}
                data={products} />
        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default CategoryItems;



