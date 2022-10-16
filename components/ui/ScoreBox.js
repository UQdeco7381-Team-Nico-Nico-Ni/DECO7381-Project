import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Colors } from '../../constants/styles';

const ScoreBox = ({points}) => {
  return (
    <View style={styles.container}><Text style={styles.text}>{points}</Text></View>
  )
}

export default ScoreBox

const styles = StyleSheet.create({
    container:{
        height: 45,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        backgroundColor: Colors.bamboo,
        margin: 10,
      },
      text: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
      }
});