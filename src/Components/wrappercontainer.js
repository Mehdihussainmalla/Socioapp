import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';

const WrapperContainer = ({
  children,
  bgColor = colors.grayOpacity51,
  statusBarColor = colors.whiteOpacity77,
  barStyle = 'dark-content',
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{ backgroundColor: bgColor, flex: 1,paddingVertical:20}}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
