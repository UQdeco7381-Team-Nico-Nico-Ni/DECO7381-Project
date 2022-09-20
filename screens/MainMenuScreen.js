import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

function MainMenuScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Button
        title="New Game"
        onPress={() => {
          navigation.navigate("GameScreen");
        }}
      />
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Button
        title="Leader Board"
        onPress={() => {
          navigation.navigate("LeaderBoard");
        }}
      />
    </View>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.springGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
