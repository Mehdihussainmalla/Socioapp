import {
  StyleSheet, Text, View, Image, Alert, ScrollView
  , TouchableOpacity
} from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import ButtonComp from '../../Components/Button'
import { styles } from './style'
import imagePath from '../../constants/imagePath'


const SearchScreen = ({ route }) => {
  const item = route?.params?.data
  // console.log(item, "data is")
  return (
    <Wrappercontainer>

      <View style={{ flex: 1 }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 220, }}>
          <Header isBackIcon={true}
          // title={item?.productName}
          />
          <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
            <Text style={{ paddingTop: 8, }}>{item?.productName}</Text>
            <TouchableOpacity activeOpacity={0.5}
              onPress={() => alert("waiting to add")}
            >
              <Image style={{ marginLeft: 90 }} source={imagePath.add_icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.imgstyle}

              source={{ uri: item?.productImage }} />
            <Text style={styles.txtstyle}>{item?.productCategory}</Text>
            <Text style={styles.namestyle}>{item?.productName}</Text>
            <Text style={styles.pricestyle}>price range: {item?.price} only</Text>
            <Text style={styles.descstyle}>{item?.description}</Text>
            <Text style={{
              backgroundColor: colors.redB,
              alignSelf: "center",
              marginTop: 10,
              color: colors.white, padding: 3, fontWeight: "700"
            }}> 35% discount</Text>
          </View>
        </ScrollView>
      </View>

      <ButtonComp

        onPress={() => Alert.alert("item added sucessfully")}
        ButtonText='Buy' />


    </Wrappercontainer>
  )
}
export default SearchScreen;
