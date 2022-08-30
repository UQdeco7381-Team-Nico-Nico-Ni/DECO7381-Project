import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

const TestScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <DragDropContainer>
          <Text>Drag Me!</Text>
        </DragDropContainer>

        <DropTarget>
          <Text>asdf</Text>
        </DropTarget>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: (Dimensions.get("window").height * 0.7) / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default TestScreen;