import { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import { fetchRecords, fetchPersonalRecords } from "../util/htttp";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import RecordOutput from "../components/ui/RecordsUI/RecordOutput";
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

  useEffect(() => {
    async function getRecords() {
      setIsFetching(true);
      try {
        const records = await fetchRecords();
        setFetchedRecords(records);
      } catch (error) {
        setError("Could not fetch Records!");
      }
      setIsFetching(false);
    }
    getRecords();
  }, []);

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
        <Text>User Name: {userName}</Text>
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
        <Pressable
          style={styles.buttonPink}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonFont}>Return</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  buttonContainer: {
    flex: 4,
    alignItems: "center",
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
    flex: 1,
    alignItems: "center",
  },
  buttonPink: {
    width: 200,
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
    width: 200,
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
});

export default ProfileScreen;