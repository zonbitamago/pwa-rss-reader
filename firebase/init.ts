import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
