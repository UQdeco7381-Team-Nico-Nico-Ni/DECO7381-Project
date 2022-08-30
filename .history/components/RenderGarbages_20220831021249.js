import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";
import Colors from "../constants/Colors";
import DragBox from "../components/DragBox";
import { GARBAGES } from "../data/dummy-data";


const RenderGarbages = (props) => {
  const [testAA, setTestAA] = React.useState(GARBAGES);

  return testAA.map((garbage) => {
    return (
    <DraxProvider>
    <View>
      <DragBox id={garbage.id} title={garbage.title} />
    </View>
    </DraxProvider>
    )
  });
};



  export default RenderGarbages;