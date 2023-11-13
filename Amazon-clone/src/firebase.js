import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX3vZsYA6aHvddgcW9RxuOQCmB-7YMLjM",
  authDomain: "clone-1454f.firebaseapp.com",
  projectId: "clone-1454f",
  storageBucket: "clone-1454f.appspot.com",
  messagingSenderId: "243799274562",
  appId: "1:243799274562:web:8c82592493a265f3d069db",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
