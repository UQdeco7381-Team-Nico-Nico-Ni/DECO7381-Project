import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from 'expo-app-loading';

import Header from "./components/Header";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/open-sans-regular.ttf"),
    "open-sans-bold": require("./assets/fonts/open-sans-bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Litter Panda" />
      <GameNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
