import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD6YnWQXmdschF1nLxZnB7y34PFcpGgF98",
  authDomain: "feedapp-cc815.firebaseapp.com",
  projectId: "feedapp-cc815",
  storageBucket: "feedapp-cc815.appspot.com",
  messagingSenderId: "876945232086",
  appId: "1:876945232086:web:1233b9dfe56a2f72857977",
  measurementId: "G-8HGDVYE7VQ",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

const App = initializeApp(firebaseConfig);

export default App;
