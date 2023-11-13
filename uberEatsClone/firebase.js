import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq5lXyNkY8N9zuLqEwLtQPH_51uEKqCVU",
  authDomain: "uber-eats-rn-e88eb.firebaseapp.com",
  projectId: "uber-eats-rn-e88eb",
  storageBucket: "uber-eats-rn-e88eb.appspot.com",
  messagingSenderId: "63855135050",
  appId: "1:63855135050:web:8f835bc47aacf710fb99b3",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
