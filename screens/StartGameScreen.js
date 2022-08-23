import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import { ScreenOrientation } from "expo";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );
  const allGarbages = ["Bottles", "Papers", "Meat", "Vegetable"];
  const recycleGarbages = ["Bottles", "Papers"];
  const generalWaste = ["Meat", "Vegetable"];
  const [selectGarbage, setSelectGarbage] = useState(
    allGarbages[Math.floor(Math.random() * allGarbages.length)]
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.addEventListener("change", updateLayout).remove;
    };
  });

  const generalWasteHandler = guess => {
    if (generalWaste.includes(guess)) {
        setConfirmed(true);
    }
  };

  const recycleWasteHandler = guess => {
    if (recycleGarbages.includes(guess)) {
        setConfirmed(true);
    }
  };

  const restartHandler = () => {
    setSelectGarbage(allGarbages[Math.floor(Math.random() * allGarbages.length)]);
    setConfirmed(false)
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>Correct!</BodyText>
        <MainButton onPress={restartHandler}>NEW GAME</MainButton>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Select the Correct Bin</TitleText>
            {/* <View style={styles.imageContainer}>
        <Image source={require('../assets/panda_icon.png')} style={styles.image} resizeMode="cover" />
        </View> */}
            <Card style={styles.inputContainer}>
              <TitleText>{selectGarbage}</TitleText>
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="General"
                    color={Colors.general}
                    onPress={() => generalWasteHandler(selectGarbage)}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Recycle"
                    color={Colors.recycle}
                    onPress={() => recycleWasteHandler(selectGarbage)}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  //   button: {
  //     width: Dimensions.get("window").width / 4,
  //   },
  input: {
    width: 80,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: (Dimensions.get("window").height * 0.7) / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default StartGameScreen;
