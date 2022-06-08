import { View, Text } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'

const Profile = () => {
  return (
    <Wrappercontainer>
    <View>
      <Header isBackIcon={true} title={"Profile"}/>
      <Text>Profile</Text>
    </View>
    </Wrappercontainer>
  )
}

export default Profile