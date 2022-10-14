import { View, Text, StyleSheet, Modal, Pressable, Alert } from "react-native";
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
          <Text style={styles.modalText}>Game Completed!</Text>
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.score}>
            <ScoreBox points={point} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonPink} onPress={leftButton}>
              <Text style={styles.buttonFont}>Menu</Text>
            </Pressable>
            <View style={styles.space}></View>
            <Pressable style={styles.buttonGreen} onPress={rightButton}>
              <Text style={styles.buttonFont}>UPLOAD</Text>
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
    marginTop: "50%",
    alignItems: "center",
  },
  modalView: {
    width: "70%",
    height: "45%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
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
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  score: {
    justifyContent: "center",
    alignItems: "center",
  },
});
