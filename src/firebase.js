import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwBep6_YHJyMHx8hQcAusefmFBuKAmY6M",
  authDomain: "collectable-1c1bd.firebaseapp.com",
  databaseURL: "https://collectable-1c1bd.firebaseio.com",
  projectId: "collectable-1c1bd",
  storageBucket: "collectable-1c1bd.appspot.com",
  messagingSenderId: "780079534798",
  appId: "1:780079534798:web:afa1c644fed10695c0b69f",
  measurementId: "G-PWC9F32MMN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
