import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../ui/CustomButton";
import Input from "./Input";

function ResetForm({ isLogin, onSubmit, credentialsInvalid }) {
  const navigation = useNavigation();

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const { password: passwordIsInvalid, confirmPassword: passwordsDontMatch } =
    credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        <Input
          label="Confirm Password"
          onUpdateValue={updateInputValueHandler.bind(this, "confirmPassword")}
          secure
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
        />

        <View style={styles.buttons}>
          <CustomButton onPress={submitHandler}>
            {isLogin ? "Submit" : "Login"}
          </CustomButton>
        </View>
        <View style={styles.buttons}>
          <CustomButton onPress={goBack}>Cancel</CustomButton>
        </View>
      </View>
    </View>
  );
}

export default ResetForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
