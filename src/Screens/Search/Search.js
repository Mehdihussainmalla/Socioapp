import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import ButtonComp from '../../Components/Button'
import { styles } from './style'

const SearchScreen = ({ route }) => {
  const item = route?.params?.data
  // console.log(item, "data is")
  return (
    <Wrappercontainer>
      <View style={{ flex: 1 }}>
        <Header isBackIcon={true}
          title={item?.productName} />
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
      </View>
      <ButtonComp

        onPress={() => Alert.alert("item added sucessfully")}
        ButtonText='Buy' />


    </Wrappercontainer>
  )
}
export default SearchScreen;
