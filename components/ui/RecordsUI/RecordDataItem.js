import { StyleSheet, Text, View } from "react-native";

const RecordDataItem = (props) => {
  return (
    <View style={styles.recordItem}>
    <View>
      <Text style={[styles.textBase, styles.description]}>
        {props.player}
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
      backgroundColor: 'white',
      padding: 8,
      marginVertical: 3,
    //   backgroundColor: GlobalStyles.colors.primary500,
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 6,
      elevation: 3,
    //   shadowColor: GlobalStyles.colors.gray500,
      shadowRadius: 4,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
    },
    textBase: {
    //   color: GlobalStyles.colors.primary50,
        paddingHorizontal: 12,
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
