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
import colors from '../../styles/colors';
// import deviceInfoModule, { DeviceInfo} from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';
const Home = ({ navigation }) => {
    // const { navigation } = props;
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [activeSlide, setActiveSlide] = useState();
    const [totalOfferCount, setTotalOfferCount] = useState();
    
    
    useEffect(() => {
      DeviceInfo.getUniqueId().then((uniqueId) => {
        console.log(uniqueId,"unique id++++++++++")
        });
        fetchData();
       

    }, [])
   
    const fetchData = async () => {
        try {
            await firestore().collection("offers")
                .get().then((res) => {
                    const list = [];
                    // console.log(res.size, "res>>>> from home is>sdsds>")
                    setTotalOfferCount(res.size)
                    res.forEach(doc => {

                        const { offerImage } = doc.data();
                        list.push({
                            key: doc.id,
                            offerImage
                        })

                        if (loading) {
                            setloading(false)
                           
                        }
                        // console.log(list, "list is")

                    })

                    setproducts(list);
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

            <TouchableOpacity style={styles.Carouselstyle}>
                <Image source={{ uri: item?.offerImage }}
                    style={styles.Carouselimg}
                    resizeMode={strings.STRECH} />
            </TouchableOpacity>
        )
    }


    return (
        <Wrappercontainer>
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
                    sliderWidth={moderateScale(width - 50)}
                    itemWidth={moderateScale(width - 0)}
                    scrollEnabled={products.length > 1 ? true : false}
                    horizontal
                    onSnapToItem={(index) => setActiveSlide(index)} />
                <Pagination

                    dotsLength={totalOfferCount}
                    activeDotIndex={activeSlide}
                    containerStyle={styles.containerstyle}
                    dotColor={colors.redB}
                    dotStyle={styles.dotstyle}
                    inactiveDotStyle={styles.inactivestyle}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    activeOpacity={0.8}
                    dotContainerStyle={styles.dotcontainer}
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
