import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'

const SearchScreen = ({ route }) => {
  const { data } = route?.params
  console.log(data, "data is")
  return (
    <Wrappercontainer>
      <View>
        <Image
          style={{ height: "20%", width: "30%" }}
          source={{ uri: data.accoryImage }} />
        <Text>{data.accessoryType}</Text>
        <Text>{data.rate}</Text>
      </View>
    </Wrappercontainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})