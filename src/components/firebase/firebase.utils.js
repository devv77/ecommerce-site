import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDeJuMohsC_Di5M1BuI5OZDPd9WaDhR0CM",
    authDomain: "crwn-udemy-db.firebaseapp.com",
    databaseURL: 'https://crwn-udemy-db-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: "crwn-udemy-db",
    storageBucket: "crwn-udemy-db.appspot.com",
    messagingSenderId: "448717205388",
    appId: "1:448717205388:web:cc6412c705df29c577b0a9",
    measurementId: "G-RNTV8LLYPJ"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const sighInWithGoogle=() => auth.signInWithPopup(provider);

  export default firebase;