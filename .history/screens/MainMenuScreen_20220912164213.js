import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/styles';

function MainMenuScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text>Main Menu</Text>
          <Button
            title="New Game"
            onPress={() => {
                navigation.navigate('SortingScreen');
            }}
          />
        </View>
      );
}

export default MainMenuScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.springGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});