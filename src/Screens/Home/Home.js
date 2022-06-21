import React, { useEffect, useState } from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import imagePath from '../../constants/imagePath';
import { styles } from './styles';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScale } from 'react-native-size-matters';
import { width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardView from '../../Components/card';
import ElectronicCard from '../../Components/electonicCard';
import strings from '../../constants/lang';
import firestore from '@react-native-firebase/firestore';
const Home = ({ navigation}) => {

    const [snapState, setSnapState] = useState(0);
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
                            console.log(list, "list is>>>>>>")

                        })

                    })
            } catch (error) {
                console.log(error, "error occurred")

            }
        }
        fetchData();

    }, [])


    const data = [{

        key: 1,
        title: 'Shopping e-barnds',
        image: imagePath.spices_hub,

    },
    {
        key: 2,
        title: 'Shopping e-barnds',
        image: imagePath.fruits_stock,

    },
    {
        key: 3,
        title: 'Gaming Furniture',

        image: imagePath.spices_hub,

    },
    {
        key: 4,
        image: imagePath.watch,

    },
    {
        key: 5,
        image: imagePath.spices_hub,
    },

    ]
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    const renderItem = ({ item }) => {
     console.log(item, "items from home render are")
        return (
            <>
            <TouchableOpacity style={{ width: "90%",
             height: "20%", 
             marginTop: moderateScale(10) }}>
 <Image 
            style={{
                height:"600%",
            width: width / 1.22,}}
            source={{uri:item?.accoryImage}}/>
            </TouchableOpacity>
           
            </>

            // <TouchableOpacity
            //     activeOpacity={0.8}
            //     style={{ width: "50%", height: "20%", marginTop: moderateScale(10) }}>
            //     <Image
            //         style={{
            //             width: width / 1.22, justifyContent: 'center',
            //             borderRadius: moderateScale(10), borderWidth: moderateScale(1,)
            //         }}
            //         source={item?.image} />
            // </TouchableOpacity>
        )
    }

    return (
        <Wrappercontainer >
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    activeOpacity={0.5}
                    style={styles.drawerstyle}>
                    <Image source={imagePath.hamsburg} />
                </TouchableOpacity>
                <Header title={strings.HOME} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={styles.searchstyle}>
                <Text style={styles.searchtxt}>{strings.SEARCH}</Text>
                <Image style={styles.searchicon}
                    source={imagePath.search_icon} />
            </TouchableOpacity>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}

            <View>

                <Carousel layout="stack"
                    data={products}
                    itemHeight={ITEM_HEIGHT}
                    // sliderHeight={100}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={moderateScale(width - 70)}
                    renderItem={renderItem}
                    onSnapToItem={index => setSnapState(index)}
                    scrollEnabled={data.length > 1 ? true : false}

                />

                <Pagination
                    activeDotIndex={snapState}
                    containerStyle={styles.containerstyle}
                    dotColor={colors.redB}
                    dotStyle={styles.dotstyle}
                    inactiveDotStyle={styles.inactivedotstyle}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    activeOpacity={0.8}
                    dotContainerStyle={styles.dotcontainer}
                    dotsLength={data.length}

                />
            </View>

            <CardView  />
            <View style={styles.viewstyle}>
                <Text style={styles.accessorries}>{strings.ACCESSORIES} </Text>
            </View>
            <View>
                <ElectronicCard  />

            </View>

            {/* </ScrollView> */}
        </Wrappercontainer>

    );
};


export default Home;
