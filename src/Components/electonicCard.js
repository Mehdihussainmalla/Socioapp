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
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories")
                    // .orderBy("accessoryType", "asc")

                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>>")
                        res.forEach(doc => {

                            const { accoryImage, accessoryType, rate } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                accessoryType,
                                rate
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
        console.log(item, "items are")
        return (
            <>
                <TouchableOpacity style={styles.container}>

                    <Image style={styles.imagestyle}

                        source={{ uri: item?.accoryImage }}
                    />
                    <Text style={{
                        fontSize: textScale(12),
                        alignSelf: "center",
                        fontWeight: "500"
                    }}>
                        {item?.accessoryType}</Text>
                    <Text style={{
                        fontSize: textScale(12),
                        alignSelf: "center",
                        color: colors.redB
                    }}>
                        {item?.rate}</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <FlatList
            // horizontal

            data={products}
            // numColumns={3}
            renderItem={renderItem}
        />
    )
};


const styles = StyleSheet.create({
    container: {
        // borderWidth: moderateScale(0.2),
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(5),
        marginRight: moderateScale(10),
        height: moderateScale(150),
        justifyContent: "center",
        marginTop: moderateScale(10),

    },
    imagestyle: {
        width: width / moderateScale(3),
        height: moderateScale(110),
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
        alignSelf: "center"

    },
})

export default ElectronicCard;
