import { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import GameModeModal from "../components/ui/GameModeModal";

function MainMenuScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      {/* load background image */}
      <ImageBackground
        source={require("../assets/images/backgroundImage/mainMenu.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.modal}>
          {modalVisible && (
            <GameModeModal
              text="Select the Game Mode"
              modalVisible={modalVisible}
              topButton={() => {
                navigation.navigate("TutorialScreen");
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
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
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
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
