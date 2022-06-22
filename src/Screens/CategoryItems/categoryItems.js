//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import storage from "@react-native-firebase/storage";
import Header from '../../Components/Header';

const CategoryItems = ({ route }) => {
    const { data } = route?.params;
    const category = data.accessoryType;
    console.log(category,"category is")
    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("itemdetails")
                    .where("accessoryType", "==", category)
                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>sdsds>")
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
    const renderItem=({item})=>{
        console.log(item, "items are>>>>>")
        return(
            <View>
                <Image
                style={{height:"200%", width:"50%"}}
                source={{uri:item.accoryImage}}/>
                <Text>
                    {item?.accessoryType}
                </Text>
            </View>
        )

    }

    return (
        <Wrappercontainer>
            <Header isBackIcon={true}/>
            <FlatList 
            renderItem={renderItem}
            data={products}/>
        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default CategoryItems;



