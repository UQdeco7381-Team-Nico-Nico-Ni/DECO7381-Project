import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

// Buttons
import EntypoIconButton from "../components/ui/EntypoIconButton";

const LeaderBoard = (props) => {
  const navigation = useNavigation();

  // Track the game state, set the condition of generate the game cards
//   useEffect(() => {
//     if (selectedCards.length < 4) {
//       if (garbages.length != 0) {
//         const pickedNum = parseInt(generateRandomBetween(0, garbages.length));
//         const pickItem = garbages[pickedNum];
//         setSelectedCards((selectedCards) => [...selectedCards, pickItem]);
//         setGarbages(garbages.filter((item) => item !== pickItem));
//       }
//     }
//   }, [selectedCards.length]);

  // Generate the game cards UI components
//   const renderGridItem = (selectedCards) => {
//     return selectedCards.map((garbage) => {
//       return (
//         <DragBox
//           key={garbage.id}
//           id={garbage.id}
//           title={garbage.title}
//           imageUrl={garbage.imageUrl}
//           category={garbage.category}
//           onDragDrop={() => deleteItem(garbage)}
//         />
//       );
//     });
//   };

  return (
      <View style={styles.headerContainer}>
        <EntypoIconButton
          style={styles.buttonContainer}
          icon="arrow-with-circle-left"
          size={36}
          color={Colors.rose}
          onPress={() => {
            navigation.navigate("MainMenu");
          }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    padding: 12,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  binsContainer: {
    flex: 1,
    padding: 12,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
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
  receiving: { // the receiving animation effects
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
    width: 100,
    flex: 1,
    justifyContent: "center",
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
});

export default LeaderBoard;