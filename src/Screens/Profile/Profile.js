import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Wrappercontainer from '../../Components/wrappercontainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors';
import { textScale } from '../../styles/responsiveSize'
import { moderateScale } from 'react-native-size-matters'
import actions from '../../redux/actions'
import { useSelector } from 'react-redux'
import { styles } from './style'



const Profile = () => {
  // const { user, logout } = useContext(AuthContext);
  const userData = useSelector((state) => state?.userStatus?.userData?.user);
  //  console.log(userData, "userData from profile")
  const email = userData?.email;
  const image = userData?.PhotoURL;
  const displayName = userData?.displayName;
  const Uid = userData?.uid;

  const handleLogout = () => {
    actions.Logout();
  }
  return (
    <Wrappercontainer>
      <ScrollView>
        <View>
          <Header isBackIcon={true} title={"My Profile"} />
          <View>

            <View style={styles.container}>
              <View style={styles.imgstyle} >
                {!!image ? <Image style={styles.img}
                  source={{ uri: image }}
                /> : <Image style={{
                  width: 80,
                  height: 80,
                  // borderRadius: 0.5,
                  // borderWidth: 1
                }}
                  source={imagePath.profile_pic}
                />}
              </View>
              <View style={styles.displayview}>
                {!!displayName ?

                  <Text style={styles.displaystyle}>
                    {displayName}
                  </Text> :
                  <Text style={styles.name}>
                    Muntazir Mehdi
                  </Text>}
                {email ? <Text style={styles.email}>{email}</Text>
                  :
                  <Text>forexample@gmail.com</Text>}
                {Uid ? <Text style={styles.member}>id:{Uid}</Text>
                  :
                  <Text style={styles.member}>SILVER MEMBER</Text>
                }
              </View>
            </View>

            <View style={styles.descstyle}>
              <Text style={styles.desc}>2465 points Away to becoming Gold member</Text>
            </View>
          </View>

          <View style={styles.imagestyle}>
            <Image style={{ marginHorizontal: 1 }}
              source={imagePath.white_circle} />
            <View style={styles.profilestyle}>
              <Text style={styles.profiletxt}>Profile</Text>
              <View >
                <Text style={styles.profiledesc}>
                  Complete your profile to earn 100
                  reward points.</Text>
              </View>
            </View>
          </View>

          <View style={styles.orderstyle}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.orderview}>

                <Image
                  style={styles.ordericon}
                  source={imagePath.digital_order} />

                <Text style={styles.ordertxt}>Digital orders</Text>
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