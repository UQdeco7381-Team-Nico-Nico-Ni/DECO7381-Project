import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../ui/FlatButton";
import ResetForm from "./ResetForm";
import { Colors } from "../../constants/styles";

function ResetContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { password, confirmPassword } = credentials;

    password = password.trim();

    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !passwordIsValid ||
      (!isLogin && (!passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ password });
  }

  return (
    <View style={styles.authContent}>
      <ResetForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "" : "Log in"}
        </FlatButton>
      </View>
    </View>
  );
}

export default ResetContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
  },
  buttons: {
    marginTop: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
