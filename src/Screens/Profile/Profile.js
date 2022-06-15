import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import { AuthContext } from '../../navigation/AuthProvider'
import colors from '../../styles/colors';
import { textScale } from '../../styles/responsiveSize'
import { moderateScale } from 'react-native-size-matters'
import actions from '../../redux/actions'


const Profile = () => {
  // const { user, logout } = useContext(AuthContext);
  // const image = user?._user?.photoURL;
  // console.log("user is ", user?._user?.email)

  const handleLogout=()=>{
    actions.Logout();
  }
  return (
    <Wrappercontainer>
      <ScrollView>
        <View>
          <Header isBackIcon={true} title={"My Profile"} />
          <View>

            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <View style={{ height: "38%", marginTop: 10, marginHorizontal: 10 }} >
                <Image style={{
                  width: 80,
                  height: 80,
                  borderRadius: 0.5,
                  borderWidth: 1
                }} 
                // source={{ uri: image }}
                 />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: "700", color: colors.blackOpacity66 }}>
                  {/* {user?._user?.displayName} */}
                  </Text>
                <Text style={{ fontWeight: "400", color: colors.blackOpacity43 }}>
                  {/* {user?._user?.email} */}
                  </Text>
                <Text style={{ color: colors.green }}>SILVER MEMBER</Text>
              </View>
            </View>

            <View style={{ marginHorizontal: 8, marginTop: 10 }}>
              <Text style={{ color: colors.blackOpacity43 }}>2465 points Away to becoming Gold member</Text>
            </View>
          </View>

          <View style={{
            backgroundColor: "#F7CB00", marginVertical: 10, paddingVertical: 20, flexDirection: "row", justifyContent: "flex-start",
            marginHorizontal: 1, borderWidth: 0.5,
          }}>
            <Image style={{ marginHorizontal: 1 }}
              source={imagePath.white_circle} />
            <View style={{ flexDirection: "column", marginHorizontal: 1, }}>
              <Text style={{ marginTop: moderateScale(5), color: colors.white, fontWeight: "800" }}>Profile</Text>
              <View >
                <Text style={{ marginTop: moderateScale(10), color: colors.white, fontSize: textScale(12) }}>
                  Complete your profile to earn 100
                  reward points.</Text>
              </View>
            </View>
          </View>

          <View style={{
            marginHorizontal: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10
          }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>

                <Image
                  style={{ marginTop: moderateScale(3) }}
                  source={imagePath.digital_order} />

                <Text style={{ marginRight: 10, paddingLeft: 10, fontSize: textScale(13) }}>Digital orders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("in process")}
              activeOpacity={0.7}>
              <Image source={imagePath.forward_arrow} />
            </TouchableOpacity>
          </View>

          <View style={{
            marginHorizontal: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            marginTop: moderateScale(8)
          }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>

                <Image
                  style={{ marginTop: moderateScale(3) }}
                  source={imagePath.digital_order} />

                <Text style={{ marginRight: 10, paddingLeft: 10, fontSize: textScale(13) }}>Digital orders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("in process")}
              activeOpacity={0.7}>
              <Image source={imagePath.forward_arrow} />
            </TouchableOpacity>
          </View>

          <View style={{
            marginHorizontal: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            marginTop: moderateScale(8)
          }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>

                <Image
                  style={{ marginTop: moderateScale(3) }}
                  source={imagePath.digital_order} />

                <Text style={{ marginRight: 10, paddingLeft: 10, fontSize: textScale(13) }}>Digital orders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("in process")}
              activeOpacity={0.7}>
              <Image source={imagePath.forward_arrow} />
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row",
            borderWidth: moderateScale(0.5),
            borderRadius: moderateScale(5),
            marginVertical: moderateScale(10),
            padding: moderateScale(5)
          }}>
            <Image source={imagePath.location} />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: textScale(16), fontWeight: "500" }}>Store Locator</Text>
              <Text style={{
                fontSize: textScale(12), color: colors.blackOpacity66,

              }}>Find the nearest Geekay store.</Text>
            </View>
          </View>

          <View style={{
            marginHorizontal: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10
          }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>

                <Image style={{ marginTop: moderateScale(3) }}
                  source={imagePath.help} />

                <Text style={{ marginRight: 10, paddingLeft: 10, fontSize: textScale(14) }}>help</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("in process")}
              activeOpacity={0.7}>
              <Image
                source={imagePath.forward_arrow} />
            </TouchableOpacity>
          </View>

          <View style={{
            marginHorizontal: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10
          }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>

                <Image style={{ marginTop: moderateScale(3) }}
                  source={imagePath.setting_icon} />

                <Text style={{ marginRight: 10, paddingLeft: 10, fontSize: textScale(14) }}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("in process")}
              activeOpacity={0.7}>
              <Image
                source={imagePath.forward_arrow} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            // onPress={() => logout()}
            activeOpacity={0.7}
            style={{ flexDirection: "row", }}>
            <Image source={imagePath.logout_icon} />
            <Text style={{
              marginHorizontal: moderateScale(25), paddingTop: moderateScale(8),
              fontSize: textScale(15),
              fontWeight: "500"
            }}>LOGOUT</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </Wrappercontainer>
  )
}

export default Profile