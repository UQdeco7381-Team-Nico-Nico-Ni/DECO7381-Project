import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.darkPine,
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingHorizontal: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 287,
    height:50,
    borderRadius: 20,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.rose,
  },
});
