import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';
import { moderateScaleVertical } from '../styles/responsiveSize';

const WrapperContainer = ({
  children,
  bgColor = colors.white,
  statusBarColor = colors.blackOpacity10,
  barStyle ="dark-content",
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
     
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{ backgroundColor: bgColor, flex: 1,paddingVertical:moderateScale(10),paddingHorizontal:moderateScaleVertical(10)}}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
