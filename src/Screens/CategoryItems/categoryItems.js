//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ColorPropType } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import Header from '../../Components/Header';
import { textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/Button';

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

                            const { accoryImage, accessoryType, rate, description } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                accessoryType,
                                rate,
                                description
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
        // console.log(item, "items are>>>>>")
        return (
            <View style={styles.container}>


                <Image
                    style={styles.imgstyle}
                    source={{ uri: item.accoryImage }} />

                <View style={styles.compstyle}>


                    <Text style={styles.accorystyle}>
                        {item?.accessoryType}
                    </Text>
                    <Text style={styles.ratestyle}>
                        {item.rate}</Text>
                    <Text style={styles.desc}>
                        {item?.description}</Text>
                    <ButtonComp
                        btnStyle={styles.buttonstyle}
                        ButtonText='Buy' />
                </View>

            </View>
        )

    }

    return (
        <Wrappercontainer>
            <Header isBackIcon={true} 
            title={category}
            textstyle={{fontWeight:"bold"}}/>
            <Text style={{fontSize:textScale(12),
                color:colors.blackOpacity66,
                alignSelf:"center"}}>
                    All kinds of {category} are availabe</Text>
            <FlatList
                renderItem={renderItem}
                data={products} />
        </Wrappercontainer>
    );
};

const styles = StyleSheet.create({
    container:
    {
        padding: moderateScale(5),
        borderWidth: 0.5,
        margin: moderateScale(8),
        height: moderateScale(140),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
    },
    buttonstyle: {
        width: "85%", height: moderateScale(38),
        marginTop:moderateScale(10),
    },
    desc:
    {
        width: width / 2.3,
        paddingLeft: moderateScale(10)
    },
    ratestyle:
    {
        color: colors.redB,
        paddingLeft:moderateScale(10),

    },
    accorystyle:
    {
        textAlign: 'center',
        fontSize: textScale(14),
        textAlign: 'justify',
        marginBottom: moderateScale(6),
        paddingLeft:moderateScale(10),
        fontWeight: "500"
    },
    compstyle:
    {
        width: width /moderateScale(2.3),
        paddingLeft: moderateScale(10)
    },
    imgstyle:
    {
        width: width / 2.3,
        height: width / 3,
    }
});

export default CategoryItems;



