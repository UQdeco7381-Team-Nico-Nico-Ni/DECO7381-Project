import { StyleSheet, Text, View, Button } from 'react-native';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.rootContainer}>
        <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title='Back' />
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});