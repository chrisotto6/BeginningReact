import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaEpH_5l2MIALVMM0kBxWPcveAAkISVag",
  authDomain: "catch-of-the-day-chris-otto.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chris-otto.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
