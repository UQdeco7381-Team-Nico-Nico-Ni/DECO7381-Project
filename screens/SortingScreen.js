import { useState, useEffect, useContext, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Alert,
  Animated,
  LogBox,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { DraxProvider, DraxView } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../constants/styles";
import DragBox from "../components/ui/DragBox";
import Timer from "../components/ui/Timer";
import ScoreBox from "../components/ui/ScoreBox";
import dataFile from "../data/garbagesList";
import { Category } from "../constants/GarbageInfo";
import { storeRecord } from "../util/htttp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import PopModal from "../components/ui/PopModal";
import ResultModal from "../components/ui/ResultModal";
import AppLoading from "expo-app-loading";
import FadeInView from "../components/ui/FadeInView";

// Buttons
import CustomButton from "../components/ui/CustomButton";
import EntypoIconButton from "../components/ui/EntypoIconButton";
import MaterialIconsButton from "../components/ui/MaterialIconsButton";

// Method of generate random numbers.
const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};

const SortingScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();

  const [received, setReceived] = useState([]);
  const [staged, setStaged] = useState([]);
  const [garbages, setGarbages] = useState(dataFile);
  const [selectedCards, setSelectedCards] = useState([]);
  const [point, setPoint] = useState(0);
  const [userName, setUserName] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [error, setError] = useState();
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);

  const authCtx = useContext(AuthContext);

  const closeModal = () => {
    setModalVisible(false);
    setIsGameEnd(false);
  };

  const backToMenu = () => {
    navigation.navigate("MainMenu");
  };

  const endGame = () => {
    setIsGameEnd(true);
  };

  // trigger when made the mistake
  const hintTriggered = () => {
    setIsWrong(false);
  };

  // Track the game state, set the condition of generate the game cards
  useEffect(() => {
    if (selectedCards.length < 4) {
      if (garbages.length != 0) {
        const pickedNum = parseInt(generateRandomBetween(0, garbages.length));
        const pickItem = garbages[pickedNum];
        setSelectedCards((selectedCards) => [...selectedCards, pickItem]);
        setGarbages(garbages.filter((item) => item !== pickItem));
      }
    }
    // Ending contents
    if (
      garbages &&
      garbages.length == 0 &&
      selectedCards &&
      selectedCards.length == 0
    ) {
      setIsGameEnd(true);
    }
  }, [selectedCards.length]);

  // Get the current user
  useEffect(() => {
    async function fetchUser() {
      const storedToken = await AsyncStorage.getItem("token");
      const userName = await AsyncStorage.getItem("userName");

      if (storedToken) {
        authCtx.authenticate(storedToken);
        setUserName(userName);
      }

      setIsTryingLogin(false);
    }

    fetchUser();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    const record = {
      player: userName,
      point: point,
    };
    try {
      await storeRecord(record);
      setIsSubmitting(false);
      Alert.alert("The result has been upload!");
    } catch (error) {
      setError("Fail to record!");
      setIsSubmitting(false);
      Alert.alert("Fail to record!");
    }
    navigation.goBack();
  }

  // Generate the game cards UI components
  const renderGridItem = (selectedCards) => {
    return selectedCards.map((garbage) => {
      return (
        <DragBox
          key={garbage.id}
          id={garbage.id}
          title={garbage.title}
          imageUrl={garbage.imageUrl}
          category={garbage.category}
          onDragDrop={() => deleteItem(garbage)}
          onDragStart={() => hintTriggered()}
        />
      );
    });
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  // Delete card items
  const deleteItem = (garbage) => {
    setSelectedCards(selectedCards.filter((item) => item.id !== garbage.id));
  };

  // Handle the ok button
  function errorHandler() {
    setError(null);
    navigation.goBack();
  }

  return (
    <DraxProvider>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <EntypoIconButton
          style={styles.buttonContainer}
          icon="arrow-with-circle-left"
          size={36}
          color={Colors.rose}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <View style={styles.headerSpace}></View>
        <Timer
          style={styles.buttonContainer}
          timeUpMethod={() => {
            endGame();
          }}
        />
        <ScoreBox points={point} style={styles.buttonContainer} />
      </View>
      <View style={styles.modal}>
        {modalVisible && (
          <PopModal
            modalVisible={modalVisible}
            leftButton={backToMenu}
            rightButton={closeModal}
            text="Are you sure to Exit?"
          ></PopModal>
        )}
      </View>
      <View style={styles.modal}>
        {isGameEnd && (
          <ResultModal
            modalVisible={isGameEnd}
            leftButton={backToMenu}
            rightButton={handleSubmit}
            point={point}
            text="Score"
          ></ResultModal>
        )}
      </View>

      {/* Cards Section */}
      <GestureHandlerRootView>
        <View style={styles.palette}>
          <View style={styles.garbagesList}>
            {renderGridItem(selectedCards)}
          </View>
        </View>
      </GestureHandlerRootView>

      <View style={styles}>{isWrong && <FadeInView text="mistake" />}</View>

      {/* Bins Section */}
      <View style={styles.container}>
        <DraxView
          // General Bin
          style={[styles.centeredContent, styles.receivingZone]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const bin_image = require("../assets/images/bins/General_Bin.png");
            const combinedStyles = [
              styles.centeredContent,
              styles.receivingZone,
            ];
            return (
              <>
                <View style={styles.binsContainer}>
                  <ImageBackground
                    source={bin_image}
                    resizeMode="stretch"
                    style={styles.binImage}
                  ></ImageBackground>
                </View>
              </>
            );
          }}
          // Handle the result of drag.
          onReceiveDragDrop={(event) => {
            if (event.dragged.payload == Category.general) {
              setPoint(point + 200);
            } else {
              setIsWrong(true);
            }
          }}
        />

        <DraxView
          // Recycle Bin
          style={[styles.centeredContent, styles.receivingZone]}
          receivingStyle={styles.receiving}
          dragPayload={staged.join(" ")}
          draggable={staged.length > 0}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const dragging = viewState && viewState.dragStatus !== 0;
            const bin_image = require("../assets/images/bins/Recycling_Bin.png");
            const combinedStyles = [
              styles.centeredContent,
              styles.receivingZone,
            ];
            if (dragging) {
              combinedStyles.push({ opacity: 0.2 });
            } else if (receivingDrag) {
              combinedStyles.push(styles.receiving);
            }
            return (
              <View style={styles.binsContainer}>
                <ImageBackground
                  source={bin_image}
                  resizeMode="stretch"
                  style={styles.binImage}
                ></ImageBackground>
              </View>
            );
          }}
          // Handle the result of drag.
          onReceiveDragDrop={(event) => {
            if (event.dragged.payload == Category.recycle) {
              setPoint(point + 200);
            } else {
              setIsWrong(true);
            }
          }}
        />

        <DraxView
          // Green Bin
          style={[styles.centeredContent, styles.receivingZone]}
          receivingStyle={styles.receiving}
          dragPayload={staged.join(" ")}
          draggable={staged.length > 0}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const dragging = viewState && viewState.dragStatus !== 0;
            const bin_image = require("../assets/images/bins/Green_Bin.png");
            const combinedStyles = [
              styles.centeredContent,
              styles.receivingZone,
            ];

            // Handle the dragging and receiving animation
            if (dragging) {
              combinedStyles.push({ opacity: 0.2 });
            } else if (receivingDrag) {
              combinedStyles.push(styles.receiving);
            }
            return (
              <View style={styles.binsContainer}>
                <ImageBackground
                  source={bin_image}
                  resizeMode="stretch"
                  style={styles.binImage}
                ></ImageBackground>
              </View>
            );
          }}
          // Handle the result of drag.
          onReceiveDragDrop={(event) => {
            if (event.dragged.payload == Category.green) {
              setPoint(point + 200);
            } else {
              setIsWrong(true);
            }
          }}
        />
      </View>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  binsContainer: {
    flex: 1,
    padding: 12,
    paddingTop: 10,
    flexDirection: "row",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  receivingZone: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  receiving: {
    // the receiving animation effects
    borderColor: "red",
    borderWidth: 2,
  },
  palette: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    height: "50%",
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  binImage: {
    height: 170,
    flex: 1,
  },
  dragging: {
    opacity: 0.2,
  },
  gameOver: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
  },
  garbagesList: {
    margin: 10,
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hintBox: {
    alignItems: "center",
  },
  headerSpace: {
    paddingLeft: "15%",
  },
});

export default SortingScreen;
