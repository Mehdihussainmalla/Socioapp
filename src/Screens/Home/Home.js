import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image,
    ImageBackground, Dimensions
} from 'react-native';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import { styles } from './styles';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import TextInputComponent from '../../Components/Input';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { moderateScaleVertical, sliderWidth, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Home = (props) => {
    const { navigation } = props;
    // console.log("props are", props)
    const { user } = useContext(AuthContext);
    const [snapState, setSnapState] = useState(0);

    const data = [{

        key: 1,
        title: `Gaming Controllers`,
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

        image: imagePath.men_collar,

    }]
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 3);

    const renderItem = ({ item }) => {
        // console.log(item, "items are")
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: "50%", height: "30%", marginTop: moderateScale(15) }}>
                <Image
                    style={{
                        width: width / 1.22, justifyContent: 'center',
                        borderRadius: moderateScale(10), borderWidth: moderateScale(1,)
                    }}
                    source={item?.image} />
                {/* <Text style={{fontSize:14, color:colors.redC}}>
                    {item?.title}</Text> */}
            </TouchableOpacity>
        )
    }

    return (
        <Wrappercontainer >
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                activeOpacity={0.5}
                style={styles.drawerstyle}>
                <Image source={imagePath.hamsburg} />
                <Header title="Home" />

                <TouchableOpacity style={{
                    marginRight: moderateScaleVertical(40)
                    , marginTop: 10, width: "7%"
                }} >
                    <Image
                        source={imagePath.add_icon} />
                </TouchableOpacity>
            </TouchableOpacity>
            {/* <ImageBackground style={{ width: "100%", height: "60%", }}
                source={imagePath.bgc_icon}> */}
            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}
                style={{
                    flexDirection: "row",
                    marginTop: moderateScaleVertical(20),
                    justifyContent: "space-between",
                    borderRadius: moderateVerticalScale(5),
                    borderWidth: 1,
                }}>
                <Text style={{ paddingTop: moderateScale(7), paddingHorizontal: moderateScale(15) }}>search</Text>
                <Image style={{
                    marginTop: moderateVerticalScale(5),
                    marginRight: moderateVerticalScale(10)
                }}
                    source={imagePath.search_icon} />
            </TouchableOpacity>


            <View>

                <Carousel layout="stack"
                    data={data}
                    // itemHeight={ITEM_HEIGHT}
                    // itemWidth={ITEM_WIDTH}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={moderateScale(width - 70)}
                    // sliderWidth={moderateScale(width - 25)}
                    renderItem={renderItem}
                    onSnapToItem={index => setSnapState(index)}
                    scrollEnabled={data.length > 1 ? true : false}
                />

                <Pagination
                    activeDotIndex={snapState}
                    containerStyle={{ paddingVertical: 0, marginTop: 0 }}
                    dotColor={colors.redB}
                    dotStyle={{ width: 12, height: 12, borderRadius: 12 / 2 }}
                    inactiveDotStyle={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    activeOpacity={0.8}
                    dotContainerStyle={{ marginHorizontal: 2, paddingTop: 0 }}
                    dotsLength={data.length}

                />
            </View>

            {/* </ImageBackground> */}

        </Wrappercontainer>

    );
};


export default Home;
