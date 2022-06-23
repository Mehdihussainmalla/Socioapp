import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'

const SearchScreen = ({ navigation }) => {
  // const { data } = route?.params
  // console.log(data, "data is")
  return (
    <Wrappercontainer>
      <Header isBackIcon={true}
        title={"search screen"} />
    </Wrappercontainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})