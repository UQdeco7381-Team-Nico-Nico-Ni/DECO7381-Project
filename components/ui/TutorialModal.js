import { View, Text, StyleSheet, Modal, Pressable, Image } from "react-native";
import { Colors } from "../../constants/styles";

const TutorialModal = ({ modalVisible, text, centerButton }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.banner}
            source={require("../../assets/images/backgroundImage/banner_hooray.png")}
            resizeMode="cover"
          />
          <Text style={styles.modalText}>{text}</Text>
          <Image
            style={styles.emoji}
            source={require("../../assets/images/backgroundImage/emoji_hooray.png")}
            resizeMode="cover"
          />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonPink} onPress={centerButton}>
              <Text style={styles.buttonFont}>END</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TutorialModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: "50%",
    alignItems: "center",
  },
  modalView: {
    width: "70%",
    height: "45%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    top: -140,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    top: -75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  space: {
    width: "10%",
  },
  buttonPink: {
    width: 100,
    height: 50,
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
    width: 100,
    height: 50,
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
  banner: {
    top: -150,
    zIndex: 1,
  },
  emoji: {
    top: -130,
    zIndex: 1,
  },
});
