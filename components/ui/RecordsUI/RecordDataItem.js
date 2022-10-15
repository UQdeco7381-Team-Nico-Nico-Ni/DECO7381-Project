import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/styles";

const RecordDataItem = (props) => {
  return (
    <View style={styles.recordItem}>
    <View>
      <Text style={[styles.textBase, styles.description]}>
        {props.player.slice(0, props.player.indexOf('@'))}
      </Text>
    </View>
    <View style={styles.pointContainer}>
      <Text style={styles.point}>{props.point}</Text>
    </View>
  </View>
  )
}

export default RecordDataItem

const styles = StyleSheet.create({
    recordItem: {
      backgroundColor: Colors.springGreen,
      padding: 6,
      marginVertical: 5,
    //   backgroundColor: GlobalStyles.colors.primary500,
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 6,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    textBase: {
    //   color: GlobalStyles.colors.primary50,
        paddingHorizontal: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 2,
      fontWeight: "bold",
    },
    pointContainer: {
      paddingHorizontal: 12,
      paddingVertical: 4,
    //   backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      minWidth: 80,
    },
    point: {
    //   color: GlobalStyles.colors.primary500,
      fontWeight: "bold",
    },
  });
