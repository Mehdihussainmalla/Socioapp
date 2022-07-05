
import React, { useEffect, useState } from 'react';
import {
    View, Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    RefreshControl
} from 'react-native';
import colors from '../styles/colors';
import { height, textScale, width } from '../styles/responsiveSize';
import firestore from '@react-native-firebase/firestore';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import navigationStrings from '../navigation/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import strings from '../constants/lang';

const electonicCard = (props) => {
    // console.log(props, "propsssss>>>>")
    const navigation = useNavigation();
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);
    const [data, setData] = useState(null)
    const [showMore, setShowMore] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {



        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories")
                    .orderBy("accessoryType", "asc")
                    .get().then((res) => {
                        // console.log(res.size, "res>>>> from home is>sdsds>")
                        res.forEach(doc => {

                            const { accoryImage, accessoryType, rating, productName,
                                productCategory, price, Details, totalPrice, discount, deliveryCharges } = doc.data();
                            list.push({
                                key: doc.id,
                                accoryImage,
                                accessoryType,
                                rating,
                                productName,
                                productCategory,
                                price,
                                Details,
                                totalPrice,
                                discount,
                                deliveryCharges,
                            })
                            const newArr = list.slice(0, 3)
                            setShowMore(newArr)
                            setData(newArr);
                            setproducts(list)
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

    const hanldeShowMore = () => {
        setShow(false)
        setData(products)
    }

    const hanldeShowLess = () => {
        setShow(true)
        setData(showMore)
    }

    const renderItem = ({ item }) => {
        console.log(item, "items are")
        const name = item.accessoryType;
        const myArray = name.split(" ")
        const slice6words = myArray.slice(0, 2);
        const accessoryType = slice6words.join(' ');


        return (

            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.CATEGORY_ITEMS, { data: item })}
                activeOpacity={0.5}
                style={styles.container}>

                <Image
                    style={styles.imagestyle}
                    source={{ uri: item?.accoryImage }} />
                <Text style={styles.accessoryTypestyle}>{accessoryType}</Text>
                <Text style={styles.pricetxt}>{item?.price}</Text>
                <Text style={styles.ratestyle}>{item?.rating}</Text>


            </TouchableOpacity>

        )

    }

    return (
        <View>


            <FlatList
                renderItem={renderItem}
                numColumns={3}
                data={data}
                extraData={data}
            />
            <View style={styles.textshowhidestyle}>

                {
                    show ?
                        <View style={styles.showhidestyle}>
                            <Text
                                style={styles.showhidetxt}
                                onPress={hanldeShowMore} >{strings.SHOWMORE}</Text>
                        </View> :
                        <View style={styles.showhidestyle}>
                            <Text
                                style={styles.showhidetxt}
                                onPress={hanldeShowLess} >{strings.SHOWLESS}</Text>
                        </View>
                }

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(5),
        marginRight: moderateScale(15),
        height: moderateScale(200),
        justifyContent: "center",
        marginTop: moderateScale(1),


    },
    imagestyle: {
        width: width / moderateScale(4.2),
        height: moderateScale(110),
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
        alignSelf: "center"
    },
    showhidestyle:
    {
        backgroundColor: colors.redB,
        padding: moderateVerticalScale(2),
        borderWidth: 0.5,
        borderRadius: moderateScale(5)
    },
    showhidetxt:
    {
        color: colors.white,
        fontWeight: "500",
    },
    accessoryTypestyle:
    {
        fontSize: textScale(12),
        alignSelf: "center",
        fontWeight: "500"
    },
    ratestyle:
        { color: colors.redB, alignSelf: "center" },
    textshowhidestyle:
    {
        flexDirection: "row",
        marginTop: moderateScale(5),
        justifyContent: "center"
    },
    pricetxt:
    {
        fontSize: textScale(12),
        alignSelf: "center",
        fontWeight: "500"
    }
});

//make this component available to the app
export default electonicCard;



