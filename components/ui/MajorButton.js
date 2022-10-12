import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/styles";

function MajorButton({ children, onPress, color }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        (backgroundColor = { color }),
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default MajorButton;

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 55,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    shadowColor: "#000000",
    justifyContent: "center",
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.lightTouch,
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
