import { StyleSheet, Text, View } from "react-native";
import RecordList from "./RecordList";

function RecordOutput({ records, fallbackText }) {
  let content = <Text style={styles.inforText}>{fallbackText}</Text>;

  if (records.length > 0) {
    content = <RecordList records={records} />;
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

export default RecordOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    // backgroundColor: GlobalStyles.colors.primary700,
  },
  inforText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    margin: 32,
  },
});