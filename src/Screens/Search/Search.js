import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'

const SearchScreen = ({ route }) => {
  // const { data } = route?.params
  // console.log(data, "data is")
  return (
    <Wrappercontainer>
      <Header isBackIcon={true}
        title={"Item List"} />

      <View style={{ marginTop: 20, height: "90%", marginLeft: 10 }}>
        <Image
          style={{ height: "20%", width: "30%" }}
          source={{ uri: data.accoryImage }} />
        <Text style={{
          fontSize: textScale(14),
          color: colors.blackOpacity70,
          paddingLeft: 20
        }}>{data.accessoryType}</Text>

        <Text style={{color:colors.redB,paddingLeft: 10}}>{data.rate}</Text>
      </View>
    </Wrappercontainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})