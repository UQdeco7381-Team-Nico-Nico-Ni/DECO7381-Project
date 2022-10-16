import { View, Text, StyleSheet, Modal, Pressable, Image } from "react-native";
import { Colors } from "../../constants/styles";
import ScoreBox from "./ScoreBox";

const ResultModal = ({
  modalVisible,
  text,
  point,
  leftButton,
  rightButton,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.banner}
            source={require("../../assets/images/backgroundImage/banner_hooray.png")}
            resizeMode="cover"
          />
          <Text style={styles.modalText}>Game Completed!</Text>
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.emoji}>
            <ScoreBox points={point} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonPink} onPress={leftButton}>
              <Text style={styles.buttonFont}>Back {"\n"}home</Text>
            </Pressable>
            <View style={styles.space}></View>
            <Pressable style={styles.buttonGreen} onPress={rightButton}>
              <Text style={styles.buttonFont}>Upload result</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: "70%",
    alignItems: "center",
  },
  modalView: {
    width: "70%",
    height: "57%",
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
  modalText: {
    top: -140,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: Colors.bigStone,
    fontWeight: "bold",
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    top: -80,
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
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  banner: {
    top: -150,
    zIndex: 1,
  },
  emoji: {
    top: -140,
    zIndex: 1,
  },
});
