import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import CustomButton from "../ui/CustomButton";
import Input from "./Input";

function ResetForm({ isLogin, onSubmit, credentialsInvalid }) {
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
        <View>
          <ImageBackground
            source={require("../../assets/images/backgroundImage/login.png")}
            style={styles.backgroundImage}
          ></ImageBackground>
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
