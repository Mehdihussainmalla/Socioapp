
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

const electonicCard = (props) => {
    // console.log(props, "props are")
    const { navigation } = props?.data;
    //  console.log(navigation, "shdoidjs")
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState(null);
    const [data, setData] = useState(null)

    // const [showMore, setShowMore] = useState(false) // we handle the show more state here
    // const onShowMore = () => setShowMore(true)
    // const onShowLess = () => setShowMore(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                await firestore().collection("accessories")
                    // .where("accessoryType", "==", )
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
                            setData(newArr);
                            // setproducts(list)
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
                onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN,  {data:item} )}
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

        <FlatList
            renderItem={renderItem}
            numColumns={3}
            data={data}
            extraData={data}
        />
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



