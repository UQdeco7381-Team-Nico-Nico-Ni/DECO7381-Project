import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainMenuScreen from "./screens/MainMenuScreen";
import SortingScreen from "./screens/SortingScreen";
import LeaderBoard from "./screens/LeaderBoard";
import Profile from "./screens/Profile";

import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IoniconsIconButton from "./components/ui/IoniconsIconButton";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: { backgroundColor: Colors.bashfulness },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.springGreen },
      }}
    >
      <Stack.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{
          title: "Welcome To Litter Panda!",
          headerShown: true,
          headerRight: ({ tintColor }) => (
            <IoniconsIconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="GameScreen"
        component={SortingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const [userName, setUserName] = useState();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const userName = await AsyncStorage.getItem("userName");

      if (storedToken) {
        authCtx.authenticate(storedToken);
        authCtx.getUser(userName);
        setUserName(userName);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
