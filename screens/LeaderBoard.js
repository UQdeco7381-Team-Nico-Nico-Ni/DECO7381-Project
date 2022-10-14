import { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import { fetchRecords, fetchPersonalRecords } from "../util/htttp";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import RecordOutput from "../components/ui/RecordsUI/RecordOutput";
import { AuthContext } from "../store/auth-context";

// Buttons
import EntypoIconButton from "../components/ui/EntypoIconButton";

const LeaderBoard = (props) => {
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
          <Text style={styles.headerFont}>LeaderBoard</Text>
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../assets/images/avatar/avatar.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.personRecord}>My best: {personRecord}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <RecordOutput
          records={fetchedRecords}
          fallbackText="No records found!"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 9,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 40,
    flexDirection: "row",
  },
  title: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  iconContainer: {
    justifyContent: "flex-start",
  },
  profile: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
    resizeMode: 'contain',
  },
  personRecord: {
    textAlign: "center",
    width: 180,
    height: 38,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 15,
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 7,
  },
  headerFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.bigStone,
  },
});

export default LeaderBoard;