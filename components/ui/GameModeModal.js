import { View, Text, StyleSheet, Modal, Pressable, Alert } from "react-native";
import { Colors } from "../../constants/styles";

const GameModeModal = ({
  modalVisible,
  text,
  topButton,
  middleButton,
  bottomButton,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonPink} onPress={topButton}>
              <Text style={styles.buttonFont}>Tutorial Mode</Text>
            </Pressable>
            <Pressable style={styles.buttonGreen} onPress={middleButton}>
              <Text style={styles.buttonFont}>Challenge Mode</Text>
            </Pressable>
            <Pressable style={styles.buttonPink} onPress={bottomButton}>
              <Text style={styles.buttonFont}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GameModeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: "60%",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "50%",
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
    marginBottom: 25,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.bigStone,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  space: {
    width: "10%",
  },
  buttonPink: {
    width: 220,
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
    width: 220,
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
    fontSize: 22,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
