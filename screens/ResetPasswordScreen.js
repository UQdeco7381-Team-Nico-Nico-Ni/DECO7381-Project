import { useContext, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import ResetContent from "../components/Auth/ResetContent";
import { resetPassword } from "../util/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ResetPasswordScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  async function submitHandler({ password }) {
    setIsAuthenticating(true);
    try {
      const token = await AsyncStorage.getItem("token");
      resetPassword(token, password).then(authCtx.logout());
      Alert.alert("Password Updated! Please Login Again!");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Resetting..." />;
  }

  return <ResetContent isLogin onAuthenticate={submitHandler} />;
}

export default ResetPasswordScreen;
