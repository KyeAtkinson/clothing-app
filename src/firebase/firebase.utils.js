import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCISnsD6dqalD3r4-tb6b5d9ioKTscyDgY",
  authDomain: "clothing-app-f046b.firebaseapp.com",
  databaseURL: "https://clothing-app-f046b.firebaseio.com",
  projectId: "clothing-app-f046b",
  storageBucket: "",
  messagingSenderId: "100407217569",
  appId: "1:100407217569:web:15bee7366002d654464fe0",
  measurementId: "G-CTFRMR4T7Y"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
