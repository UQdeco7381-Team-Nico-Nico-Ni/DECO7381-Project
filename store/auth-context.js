import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  currentUser: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [currentUser, setCurrentUser] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  function getUser(user) {
    setCurrentUser(user)
  }

  const value = {
    token: authToken,
    currentUser: currentUser,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    getUser: getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
