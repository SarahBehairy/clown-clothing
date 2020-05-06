import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDR4_9qlRiXk_Q4G8jcyNCCDQtYdmtnKl0",
    authDomain: "crown-db-52d7a.firebaseapp.com",
    databaseURL: "https://crown-db-52d7a.firebaseio.com",
    projectId: "crown-db-52d7a",
    storageBucket: "crown-db-52d7a.appspot.com",
    messagingSenderId: "99609309277",
    appId: "1:99609309277:web:0d7875ffbee0448426ddb4",
    measurementId: "G-J0BFR3T2TT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;