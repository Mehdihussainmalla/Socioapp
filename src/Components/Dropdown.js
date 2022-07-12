// //import liraries
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import imagePath from '../constants/imagePath';
// import colors from '../styles/colors';



// const Dropdown = ({
//     data = [],
//     value = {},
//     onSelect = () => { }


// }) => {
//     //   console.log(value,"value")
//     const onSelectedItem = (item) => {
//         setShowOptions(false)
//         onSelect(item)
//     }

//     const [showOptions, setShowOptions] = useState(false)
//     return (
//         <View style={{}}>
//             <TouchableOpacity
//                 onPress={() => setShowOptions(!showOptions)}
//                 style={{ flexDirection: "row", }}
//                 activeOpacity={0.8}>
//                 <Text style={{ paddingTop: 10, color: colors.redB }}>{!!value ? value.num : 1}</Text>
//                 <Image
//                     style={{ transform: [{ rotate: showOptions ? "180deg" : "0deg" }] }}

//                     source={imagePath.drop_down_icon} />
//             </TouchableOpacity>
//             {showOptions && (<View>{data.map((item, index) => {
//                 return (
//                     <TouchableOpacity 
//                         onPress={() => onSelectedItem(item)}
//                         activeOpacity={0.8}>

//                         <Text key={index}>{item.num}</Text>
//                     </TouchableOpacity>
//                 )
//             })}
//             </View>)}
//         </View>
//     );
// };


// const styles = StyleSheet.create({

// });


// export default Dropdown;


import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import imagePath from '../constants/imagePath';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: ' 1', value: '1' },
  { label: ' 2', value: '2' },
  { label: ' 3', value: '3' },
  { label: ' 4', value: '4' },
  { label: ' 5', value: '5' },
  { label: ' 6', value: '6' },
  { label: ' 7', value: '7' },
  { label: ' 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <>
       <View>
        {/* <Image 
        style={[[styles.label, isFocus && { color: 'blue' }]]}
        source={imagePath.drop_down_icon}/> */}
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select Item
        </Text> 
        </View>
        </>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 1,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 1,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 1,
    top: 15,
    // zIndex: 99,
    paddingHorizontal:50,
     fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft:10,
    color:"red"
  },
  iconStyle: {
    // width: 10,
    // height: 20,
  },
  inputSearchStyle: {
   height: 30,
    fontSize: 14,
  },
});
