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

  export const  createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`/users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              });
          } catch (error) {
              console.log('error creating user', error.message);
          }

      }
      return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;