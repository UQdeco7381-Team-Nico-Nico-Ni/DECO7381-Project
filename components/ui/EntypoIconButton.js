import { Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function EntypoIconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Entypo name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default EntypoIconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
