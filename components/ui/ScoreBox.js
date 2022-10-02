import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Colors } from '../../constants/styles';

const ScoreBox = ({points}) => {
  return (
    <View style={styles.container}><Text>{points}</Text></View>
  )
}

export default ScoreBox

const styles = StyleSheet.create({
    container:{
        height: 56,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        backgroundColor: Colors.babyBlue,
      }
});