import * as React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";
import Colors from "../constants/Colors";
import DragBox from "../components/DragBox";
import { GARBAGES } from "../data/dummy-data";


const RenderGarbages = (props) => {
  const [testAA, setTestAA] = React.useState(GARBAGES);

  return testAA.map((garbage) => {
    <>
    <DraxProvider>
    <View style={styles.container}>
      <DragBox id={garbage.id}  />
    </View>
    </DraxProvider>
    </>
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
    palette: {
      paddingTop: 30,
      flexDirection: "row",
      justifyContent: "space-around",
      height: "60%",
    },
  });

  export default RenderGarbages;