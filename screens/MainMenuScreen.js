import React from "react";
import { View, StyleSheet, Button, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

function MainMenuScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      {/* load game image */}
      <Image
        source={require("../assets/images/appLogo/applogo.png")}
        style={styles.image}
      ></Image>
      <View style={styles.container}>
        {/* new game btn */}
        <Pressable
          style={styles.buttonPink}
          onPress={() => {
            navigation.navigate("GameScreen");
          }}
        >
          <Text style={styles.buttonFont}>New Game</Text>
        </Pressable>
        {/* profile btn */}
        <Pressable
          style={styles.buttonGreen}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={styles.buttonFont}>Profile</Text>
        </Pressable>
        {/* leader board btn */}
        <Pressable
          style={styles.buttonPink}
          onPress={() => {
            navigation.navigate("LeaderBoard");
          }}
        >
          <Text style={styles.buttonFont}>Leader Board</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.babyCream,
    alignItems: "center",
    justifyContent: "center",
  },
  // container: {
  //   borderTop: 30,
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  buttonPink: {
    width: 200,
    height: 55,
    backgroundColor: Colors.bashfulness,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  buttonGreen: {
    width: 200,
    height: 55,
    backgroundColor: Colors.pineTree,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  buttonFont: {
    // fontFamily: WendyOne,
    color: Colors.lightTouch,
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});
