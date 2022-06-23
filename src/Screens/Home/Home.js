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

const Home = ({ navigation }) => {

    const [snapState, setSnapState] = useState(0);

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

    // console.log(Object.keys(data).length, "dhufhsdf")

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    const renderItem = ({ item }) => {
        //     console.log(item, "items from home render are")
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: "50%", height: "20%", marginTop: moderateScale(10) }}>
                <Image
                    style={{
                        width: width / 1.22, justifyContent: 'center',
                        borderRadius: moderateScale(10), borderWidth: moderateScale(1,)
                    }}
                    source={item?.image} />
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

                <View>

                    <Carousel layout="stack"
                        data={data}
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
