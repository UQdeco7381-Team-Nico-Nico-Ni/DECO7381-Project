import { useState } from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import GameModeModal from "../components/ui/GameModeModal";

function MainMenuScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      {/* load background image */}
      {/* <ImageBackground source={require("../assets/images/backgroundImage/mainMenu.png")} style={styles.backgroundImage}></ImageBackground> */}

      {/* load game image */}
      <Image
        source={require("../assets/images/appLogo/applogo.png")}
        style={styles.image}
      ></Image>
      <View style={styles.modal}>
        {modalVisible && (
          <GameModeModal
            text="Select the Game Mode"
            modalVisible={modalVisible}
            topButton={() => {
              navigation.navigate("Welcome");
              setModalVisible(false);
            }}
            middleButton={() => {
              navigation.navigate("GameScreen");
              setModalVisible(false);
            }}
            bottomButton={() => {
              setModalVisible(false);
            }}
            // text="Are you sure to Exit?"
          ></GameModeModal>
        )}
      </View>
      <View style={styles.container}>
        {/* new game btn */}
        <Pressable
          style={styles.buttonPink}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonFont}>New Game</Text>
        </Pressable>
        {/* profile btn */}
        <Pressable
          style={styles.buttonGreen}
          onPress={() => {
            navigation.navigate("ProfileScreen");
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
        {/* test board btn */}
        <Pressable
          style={styles.buttonPink}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonFont}>Test Button</Text>
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
    width: 220,
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
    width: 220,
    height: 55,
    backgroundColor: Colors.pineTree,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "black",
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
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
