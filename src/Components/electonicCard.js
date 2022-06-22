
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


const arr = [1, 2, 3, 4, 5]


const electonicCard = () => {
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories")
                    // .orderBy("productName", "asc")

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
                            //  console.log(list, "list is")

                        })

                    })
            } catch (error) {
                console.log(error, "error occurred")

            }
        }
        fetchData();

    }, [])

    const renderItem = ({ item }) => {
        console.log(item, "items areeeee")
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.container}>
                    <Image
                        style={styles.imagestyle}
                        source={{ uri: item?.accoryImage }} />
                    <Text style={{
                        fontSize: 12, alignSelf: "center",
                        fontWeight: "500"
                    }}>{item.accessoryType}</Text>
                    <Text style={{ color: colors.redB, alignSelf: "center" }}>{item?.rate}</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <FlatList
            renderItem={renderItem}
            numColumns={3}
            data={products}
        />
    );
};


const styles = StyleSheet.create({
    container: {
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(5),
        marginRight: moderateScale(15),
        height: moderateScale(200),
        justifyContent: "center",
        marginTop: moderateScale(1),
        backgroundColor: "#F5F5F5"
    },
    imagestyle: {
        width: width / moderateScale(4.2),
        height: moderateScale(110),
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
        alignSelf: "center"
    }
});

//make this component available to the app
export default electonicCard;



