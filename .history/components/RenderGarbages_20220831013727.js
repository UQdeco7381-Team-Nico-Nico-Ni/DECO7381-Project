import * as React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";
import Colors from "../constants/Colors";
import DragBox from "../components/DragBox";
import { GARBAGES } from "../data/dummy-data";


const RenderGarbages = (props) => {
  const [testAA, setTestAA] = React.useState(GARBAGES);

  return testAA.map((garbage) => {
    <div key={garbage.id}>
    <br/>
    <li>
    Note ID: {garbage.id}
    <br/>
    Note: {garbage.note}
    <br/>
    </li>
</div>

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