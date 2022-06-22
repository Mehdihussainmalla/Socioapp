
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
import { moderateScale } from 'react-native-size-matters';
import navigationStrings from '../navigation/navigationStrings';
import { useNavigation } from '@react-navigation/native';

const electonicCard = (props) => {
    // console.log(props, "propsssss>>>>")
    const navigation=useNavigation();
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);
    const [data, setData] = useState(null)
    const [showMore, setShowMore] = useState([])

    useEffect(() => {



        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories")
                    // .where("accessories", "==",)
                    .orderBy("accessoryType", "asc")

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



    const renderItem = ({ item, index }) => {

        // console.log(item, "items areeeee")
        // if (showMore) {
        return (

            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.CATEGORY_ITEMS, { data: item})}
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

        )

    }

    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                    style={{ color: colors.redB, fontWeight: "500", paddingRight: 20 }}
                    onPress={() => setData(products)} >showMore</Text>
                <Text
                    style={{ color: colors.DarkBlue, fontWeight: "500" }}
                    onPress={() => setData(showMore)} >showless</Text>
            </View>

            <FlatList
                renderItem={renderItem}
                numColumns={3}
                data={data}
                extraData={data}
            />
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
    }
});

//make this component available to the app
export default electonicCard;



