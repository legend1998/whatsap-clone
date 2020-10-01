// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPkwisokFKNPJL8d9m-3MDSS0PGFmF4B8",
  authDomain: "whatsapp-clone-d7dd8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d7dd8.firebaseio.com",
  projectId: "whatsapp-clone-d7dd8",
  storageBucket: "whatsapp-clone-d7dd8.appspot.com",
  messagingSenderId: "1029429307425",
  appId: "1:1029429307425:web:fcbef2a435975e0f6a9b60",
  measurementId: "G-3TN7C2BHGL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
