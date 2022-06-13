import React, { useState } from "react";
import {View,Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import imagePath from "../constants/imagePath";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import { width } from "../styles/responsiveSize";
import { Pagination } from "react-native-snap-carousel";
import colors from "../styles/colors";

export const CrouselComp = ({
    sliderWidth='',
    itemHeight='',
    dotColor="",
    layout="",
    itemWidth=''
    
}) => {

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
                style={{ width: "70%", height: "40%", marginTop: moderateScale(15) }}>
                <Image
                    style={{
                        width: width / 1.22, justifyContent: 'center',
                        borderRadius: moderateScale(10), borderWidth: moderateScale(1,)
                    }}
                    source={item?.image} />
            </TouchableOpacity>
        )
    }
return(
    <View>

        <Carousel layout={layout}
            data={data}
            itemHeight={itemHeight}
            // itemWidth={ITEM_WIDTH}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
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
)


}
