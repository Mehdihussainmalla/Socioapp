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
import { moderateVerticalScale } from 'react-native-size-matters';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

const Home = (props) => {
    const { navigation } = props;
    // console.log("props are", props)
    const { user } = useContext(AuthContext);
    return (
        <Wrappercontainer>
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
                activeOpacity={0.5}
                style={styles.drawerstyle}>
                <Image source={imagePath.hamsburg} />
                <Header title="Home" />

                <TouchableOpacity style={{marginRight:moderateScaleVertical(40)
                , marginTop:10, width:"7%"}} >
                <Image  
                source={imagePath.add_icon}/>
                </TouchableOpacity>
            </TouchableOpacity>
            <ImageBackground style={{ width: "100%", height: "60%", }}
                source={imagePath.bgc_icon}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate(navigationStrings.SEARCH_SCREEN)}
                activeOpacity={0.5}  
                style={{
                    flexDirection: "row",
                    marginTop: moderateScaleVertical(20),
                    justifyContent: "space-between",
                    borderRadius: moderateVerticalScale(5),
                    borderWidth: 1,
                }}>
                    <TextInputComponent
                        input={{ fontSize: textScale(16), }} placeholder='search' />

                    <Image style={{
                        marginTop: moderateVerticalScale(5),
                        marginRight: moderateVerticalScale(10)
                    }}
                        source={imagePath.search_icon} />
                </TouchableOpacity>
            </ImageBackground>



        </Wrappercontainer>

    );
};


export default Home;
