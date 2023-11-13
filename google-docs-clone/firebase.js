import firebase from "firebase";

/*  

YOUR FIREBASE CONFIG GOES HERE

*/

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
