import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBJ3rSo6wNPmUkbrtfTNPnFuokSqVzJLk",
  authDomain: "clone-9a4e9.firebaseapp.com",
  projectId: "clone-9a4e9",
  storageBucket: "clone-9a4e9.appspot.com",
  messagingSenderId: "752575394000",
  appId: "1:752575394000:web:a24b8f48109cad756f2ed5",
  measurementId: "G-KHM20YF59Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
