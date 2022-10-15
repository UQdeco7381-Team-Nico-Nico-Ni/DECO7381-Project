import { useState } from "react";
import { Alert, StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../ui/FlatButton";
import ResetForm from "./ResetForm";

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

    if (!passwordIsValid || (!isLogin && !passwordsAreEqual)) {
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
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/backgroundImage/profile.png")}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.authContent}>
          <ResetForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.buttons}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin ? "" : "Log in here"}
            </FlatButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ResetContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    alignItems: "center",
  },
  buttons: {
    marginTop: 8,
  },
});
