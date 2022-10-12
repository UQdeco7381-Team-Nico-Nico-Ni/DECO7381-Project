// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBfUf6HbU4NWLO8dg-rTxF2Qm0cwSEl-4",
  authDomain: "react-native-course-b2439.firebaseapp.com",
  databaseURL: "https://react-native-course-b2439-default-rtdb.firebaseio.com",
  projectId: "react-native-course-b2439",
  storageBucket: "react-native-course-b2439.appspot.com",
  messagingSenderId: "322464858974",
  appId: "1:322464858974:web:30be809a494414d641c5cf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ) {
    app =  firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth }