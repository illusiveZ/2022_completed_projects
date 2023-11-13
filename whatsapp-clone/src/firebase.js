import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgLFxfuUCtPYdlpiwd4gHLAO4AGNK5j4k",
  authDomain: "whatsapp-cloned-b0dc6.firebaseapp.com",
  projectId: "whatsapp-cloned-b0dc6",
  storageBucket: "whatsapp-cloned-b0dc6.appspot.com",
  messagingSenderId: "755175311609",
  appId: "1:755175311609:web:cc732427c4647baf8afa28",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
