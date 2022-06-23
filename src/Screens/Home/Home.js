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
import { moderateScale } from 'react-native-size-matters';
import { width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardView from '../../Components/card';
import ElectronicCard from '../../Components/electonicCard';
import strings from '../../constants/lang';
import firestore from '@react-native-firebase/firestore';
const Home = (props) => {
    const { navigation } = props;
    //    console.log(props,"props are")

    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);
    const [activeSlide, setActiveSlide] = useState();
    const [totalOfferCount, setTotalOfferCount] = useState();

    useEffect(() => {

        fetchData();

    }, [])
    const fetchData = async () => {
        try {
            const list = [];
            await firestore().collection("offers")
                .get().then((res) => {
                    console.log(res.size, "res>>>> from home is>sdsds>")
                    setTotalOfferCount(res.size)
                    res.forEach(doc => {

                        const { offerImage } = doc.data();
                        list.push({
                            key: doc.id,
                            offerImage,


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

    // console.log(Object.keys(data).length, "dhufhsdf")

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    const renderItem = ({ item }) => {
        // console.log(item, "items from home render are")
        return (

            <View
                style={{
                    borderWidth: 1,
                    padding: 0,
                    borderRadius: 10,
                    alignItems: 'center',

                }}>

                <Image source={{ uri: item?.offerImage }}
                    style={{ width: width - 110, height: width / 2.30 }}
                    resizeMode="stretch" />
            </View>
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
            <ScrollView showsVerticalScrollIndicator={false}>

                <View>

                    <Carousel
                        data={products}
                        renderItem={renderItem}
                        layout='stack'
                        onSnapToItem={(index) => setActiveSlide(index)}
                        sliderWidth={moderateScale(width - 30)}
                        itemWidth={moderateScale(width - 110)}
                    />
                    <Pagination

                        dotsLength={totalOfferCount}
                        activeDotIndex={activeSlide}
                        // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                        dotStyle={{
                            marginVertical: moderateScale(0),
                            width: 12,
                            height: 12,
                            borderRadius: 5,

                            // backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}

                        inactiveDotStyle={{

                            // Define styles for inactive dots here
                        }}

                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>

                <CardView />
                <View style={styles.viewstyle}>
                    <Text style={styles.accessorries}>{strings.ACCESSORIES} </Text>
                </View>
                <View>
                    <ElectronicCard
                    //  data={props}
                    />

                </View>

            </ScrollView>
        </Wrappercontainer>

    );
};


export default Home;
