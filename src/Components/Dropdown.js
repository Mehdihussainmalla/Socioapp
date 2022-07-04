//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';



const Dropdown = ({
    data = [],
    value = {},
    onSelect = () => { }


}) => {
    //   console.log(value,"value")
    const onSelectedItem = (item) => {
        setShowOptions(false)
        onSelect(item)
    }

    const [showOptions, setShowOptions] = useState(false)
    return (
        <View style={{}}>
            <TouchableOpacity
                onPress={() => setShowOptions(!showOptions)}
                style={{ flexDirection: "row", }}
                activeOpacity={0.8}>
                <Text style={{ paddingTop: 10, color: colors.redB }}>{!!value ? value.num : 1}</Text>
                <Image
                    style={{ transform: [{ rotate: showOptions ? "180deg" : "0deg" }] }}

                    source={imagePath.drop_down_icon} />
            </TouchableOpacity>
            {showOptions && (<View>{data.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => onSelectedItem(item)}
                        activeOpacity={0.8}>

                        <Text key={(String(index))}>{item.num}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>)}
        </View>
    );
};


const styles = StyleSheet.create({

});


export default Dropdown;
