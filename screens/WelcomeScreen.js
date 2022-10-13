import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';
import { auth } from "../util/firebase";
import { getUserData } from "../util/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');
  const [token, setToken] = useState();
  const [userName, setUserName] = useState();

  const authCtx = useContext(AuthContext);
//   const token = authCtx.token;

  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const userName = await AsyncStorage.getItem("userName");

      if (storedToken) {
        authCtx.authenticate(storedToken);
        setToken(storedToken)
        setUserName(userName)
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://react-native-course-b2439-default-rtdb.firebaseio.com/message.json?auth=' +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
      <Text>{userName}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
