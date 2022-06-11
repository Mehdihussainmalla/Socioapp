import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import imagePath from '../../constants/imagePath';
import { AuthContext } from '../../navigation/AuthProvider';
import { styles } from './styles';
import Header from '../../Components/Header';
import Wrappercontainer from '../../Components/wrappercontainer';
import TextInputComponent from '../../Components/Input';
import navigationStrings from '../../navigation/navigationStrings';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Home = (props) => {
    const { navigation } = props;
    // console.log("props are", props)
    const { user } = useContext(AuthContext);

    const data = [{

        key: 1,
        title: `Gaming Controllers`,
        image: imagePath.bgc_icon,
     
    },
    {
        key: 2,
        title: 'Shopping e-barnds',
        image: imagePath.bgc_icon,
       
    },
    {
        key: 3,
        title: 'Gaming Furniture',

        image: imagePath.bgc_icon,
   
    }]

    const renderItem = ({ item }) => {
        console.log(item, "items are")
        return (

            <View style={{ width: "30%", height: "30%"}}>
                <Image source={item?.image} />
                <Text style={{fontSize:14, color:colors.redC}}>
                    {item?.title}</Text>
            </View>
        )
    }

    return (
        <Wrappercontainer>
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
            <ImageBackground style={{ width: "100%", height: "60%", }}
                source={imagePath.bgc_icon}>
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
                    <Text style={{ paddingTop: 6, paddingHorizontal: 15 }}>search</Text>
                    <Image style={{
                        marginTop: moderateVerticalScale(5),
                        marginRight: moderateVerticalScale(10)
                    }}
                        source={imagePath.search_icon} />
                </TouchableOpacity>

            </ImageBackground>
            <View>

                <Carousel
                    data={data}
                    //    renderItem={renderItem}
                    itemWidth={moderateScale(width - 65)}
                    sliderWidth={moderateScale(width - 0)}
                    renderItem={renderItem}
                    scrollEnabled={data.length > 1 ? true : false}
                />

                <Pagination
                    containerStyle={{ paddingVertical: 0, marginTop: 0 }}
                    dotsLength={data.length}
                    dotStyle={{ width: 12, height: 12, borderRadius: 10, }}
                    dotColor={colors.redB}
                    inactiveDotColor={colors.Light_blue}
                    dotContainerStyle={{ marginHorizontal: 2, paddingTop: 0,}}
                />
            </View>



        </Wrappercontainer>

    );
};


export default Home;
