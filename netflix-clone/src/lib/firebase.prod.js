import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

// register an app in firebase and copy config data from script
const config = {
  apiKey: "AIzaSyCXKc2Zt1-xwCULkECNl-u00gLNMPOozPw",
  authDomain: "netflix-clone-56141.firebaseapp.com",
  databaseURL: "https://netflix-clone-56141.firebaseio.com",
  projectId: "netflix-clone-56141",
  storageBucket: "netflix-clone-56141.appspot.com",
  messagingSenderId: "141819428910",
  appId: "1:141819428910:web:f02015d7b03381e1259fbf",
};

const firebase = Firebase.initializeApp(config);

// This line should be commented after first save, so we don't get duplicate data
// seedDatabase(firebase);

export { firebase };
