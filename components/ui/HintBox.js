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
        borderRadius: 25,
        backgroundColor: Colors.bamboo,
        marginTop: '15%',
      },
    content: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingTop: '6.5%'
    }
});