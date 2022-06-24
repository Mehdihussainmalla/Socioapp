import React, { useEffect, useState } from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';
import imagePath from '../../constants/imagePath';
import { styles } from './styles';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import { moderateScale } from 'react-native-size-matters';
import { sliderWidth, width } from '../../styles/responsiveSize';
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
                    // console.log(res.size, "res>>>> from home is>sdsds>")
                    setTotalOfferCount(res.size)
                    res.forEach(doc => {

                        const { offerImage } = doc.data();
                        list.push({
                            key: doc.id,
                            offerImage



                        })
                        setproducts(list);
                        if (loading) {
                            setloading(false)
                        }
                        // console.log(list, "list is")

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
        // console.log(item, "items are >>>")
        return (
            <TouchableOpacity style={{
                borderWidth: 1,
                padding: 0,
                borderRadius: 10,
                alignItems: 'center',

            }}>
                <Image source={{ uri: item?.offerImage }}
                    style={{ width: width - 110, height: width / 2.30 }}
                    resizeMode="stretch" />
            </TouchableOpacity>
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

                <Carousel
                    data={products}
                    renderItem={renderItem}
                    layout='stack'
                    sliderWidth={sliderWidth}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setActiveSlide(index)} />
                <Pagination

                    dotsLength={totalOfferCount}
                    activeDotIndex={activeSlide}

                    dotStyle={{
                        marginVertical: moderateScale(0),
                        width: 12,
                        height: 12,
                        borderRadius: 5,
                    }}

                    inactiveDotStyle={{

                        // Define styles for inactive dots here
                    }}

                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />


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
