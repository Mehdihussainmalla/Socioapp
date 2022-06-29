//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Wrappercontainer from '../../Components/wrappercontainer';
import firestore from '@react-native-firebase/firestore';
import Header from '../../Components/Header';
import ButtonComp from '../../Components/Button';
import { styles } from './styles';
import actions from '../../redux/actions';
import navigationStrings from '../../navigation/navigationStrings';
import { useSelector } from 'react-redux';
const CategoryItems = ({ route, navigation }) => {

    const userData = useSelector((state) => state?.userStatus?.userData?.user);
    const Uid = userData?.uid
    // console.log(Uid,"userdata isss")

    const { data } = route?.params;
    const productId = data?.key
    const productName = data?.accessoryType;
    // console.log(productName)
    // console.log(id,"idddd")
    // console.log(data,"data is")

    const category = data.accessoryType;
    console.log(category, "category is")
    const [products, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    const fetchData = async () => {
        try {
            const list = [];
            await firestore().collection("itemdetails")
                .where("accessoryType", "==", category)
                .get().then((res) => {
                    // console.log(res.size, "res >>>>>>>")
                    res.forEach(doc => {

                        const { accoryImage, rate, description,accessoryType } = doc.data();
                        list.push({
                            key: doc.id,
                            accoryImage,
                            accessoryType,
                            rate,
                            description
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
    //..............add data to cart........//

    const firebaseCart = async () => {
        try {
            await firestore().collection(`Cart${Uid}`).add({
                productName: productName,
                Uid: Uid,
                productId: productId,
            })
            navigation.navigate(navigationStrings.CART)
        } catch (error) {
            console.log(error, "error occurred")

        }

    }

    useEffect(() => {
        fetchData();

    }, [])


    const renderItem = ({ item }) => {
        // console.log(item, "items are>>>>>")
        return (
            <View style={styles.container}>


                <Image
                    style={styles.imgstyle}
                    source={{ uri: item.accoryImage }} />

                <View style={styles.compstyle}>


                    <Text style={styles.accorystyle}>
                        {item?.accessoryType}
                    </Text>
                    <Text style={styles.ratestyle}>
                        {item.rate}</Text>
                    <Text style={styles.desc}>
                        {item?.description}</Text>
                    <ButtonComp
                        onPress={firebaseCart}
                        btnStyle={styles.buttonstyle}
                        ButtonText='Add to Cart' />
                </View>

            </View>
        )

    }

    return (
        <Wrappercontainer>
            <Header isBackIcon={true}
                onPress={() => navigation.goBack()}
                title={category}
                textstyle={{ fontWeight: "bold" }} />
            {!!products ? <View>
                <Text style={styles.headingstyle}>
                    All kinds of {category} are availabe</Text>
                <FlatList
                    renderItem={renderItem}
                    data={products} />
            </View> :
                <View >
                    <View style={styles.nostockstyle}>
                        <Text style={styles.txt}>No {category} available</Text>
                    </View>

                    <ButtonComp
                        btnStyle={{ width: "88%" }}
                        onPress={() => navigation.goBack()}
                        ButtonText={"Go Back"} />
                </View>

            }

        </Wrappercontainer>
    );
};



export default CategoryItems;



