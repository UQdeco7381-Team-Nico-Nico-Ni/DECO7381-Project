import { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import { fetchPersonalRecords } from "../util/htttp";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import { AuthContext } from "../store/auth-context";

// Buttons
import EntypoIconButton from "../components/ui/EntypoIconButton";

const ProfileScreen = (props) => {
  const authCtx = useContext(AuthContext);

  const navigation = useNavigation();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [userName, setUserName] = useState(authCtx.currentUser);
  const [personRecord, setPersonRecord] = useState();
  const [fetchedRecords, setFetchedRecords] = useState([]);

  // Get the personal best record from database
  useEffect(() => {
    async function getPersonalRecords() {
      setIsFetching(true);
      try {
        const record = await fetchPersonalRecords(userName);
        setPersonRecord(record);
      } catch (error) {
        console.log(userName);
        setError("Could not fetch Personal Records!");
      }
      setIsFetching(false);
    }
    getPersonalRecords();
  }, []);

  // Handle the ok button
  function errorHandler() {
    setError(null);
    navigation.goBack();
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/backgroundImage/profile.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            <EntypoIconButton
              icon="arrow-with-circle-left"
              size={36}
              color={Colors.bigStone}
              onPress={() => {
                navigation.navigate("MainMenu");
              }}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.headerFont}>My Profile</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <Image
            source={require("../assets/images/avatar/avatar.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.profile}>{userName}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonPink}
            onPress={() => {
              navigation.navigate("ResetPassword");
            }}
          >
            <Text style={styles.buttonFont}>Change Password</Text>
          </Pressable>
          <Pressable style={styles.buttonGreen} onPress={authCtx.logout}>
            <Text style={styles.buttonFont}>Log out</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  buttonContainer: {
    flex: 3,
    alignItems: "center",
    marginBottom: 100,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",

  },
  title: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  profile: {
    flex: 2,
    alignItems: "center",
    color: Colors.elephantEar,
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonPink: {
    width: 280,
    height: 55,
    backgroundColor: Colors.bashfulness,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  buttonFont: {
    // fontFamily: WendyOne,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  buttonGreen: {
    width: 280,
    height: 55,
    backgroundColor: Colors.pineTree,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 33,
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  headerFont: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.bigStone,
  },
  image: {
    height: 120,
    width: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ProfileScreen;
