import * as React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";
import Colors from "../constants/Colors";
import DragBox from "../components/DragBox";
import { GARBAGES } from "../data/dummy-data";


const RenderGarbages = (props) => {
  const [items, setItems] = React.useState(['red','blue']);
  const [received, setReceived] = React.useState([]);
  const [staged, setStaged] = React.useState([]);
  const [testAA, setTestAA] = React.useState(GARBAGES);

  return testAA.map((garbage) => {
    <DraxProvider>
    <View style={styles.palette}>
      <DragBox id={garbage.id} title={garbage.title} />
    </View>
    </DraxProvider>
  });
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      paddingTop: 40,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    centeredContent: {
      justifyContent: "center",
      alignItems: "center",
    },
    receivingZone: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    receiving: {
      borderColor: "red",
      borderWidth: 2,
    },
    incomingPayload: {
      marginTop: 10,
      fontSize: 24,
    },
    received: {
      marginTop: 10,
      fontSize: 18,
    },
    palette: {
      paddingTop: 30,
      flexDirection: "row",
      justifyContent: "space-around",
      height: "60%",
    },
    draggableBox: {
      width: 60,
      height: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
    },
    magenta: {
      backgroundColor: "#ffaaff",
    },
    general: {
      backgroundColor: Colors.general,
    },
    recycle: {
      backgroundColor: Colors.recycle,
    },
    dragging: {
      opacity: 0.2,
    },
    hoverDragging: {
      borderColor: "magenta",
      borderWidth: 2,
    },
    stagedCount: {
      fontSize: 18,
    },
  });

  export default RenderGarbages;