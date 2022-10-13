import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Colors } from '../../constants/styles';

const HintBox = ({hint}) => {
  return (
    <View style={styles.container}><Text style={styles.content}>{hint}</Text></View>
  )
}

export default HintBox

const styles = StyleSheet.create({
    container:{
        height: 56,
        width: 250,
        borderRadius: 10,
        backgroundColor: Colors.babyBlue,
      },
    content: {
        fontSize: 18,
        textAlign: 'center',
    }
});