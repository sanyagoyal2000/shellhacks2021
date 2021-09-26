

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  

  const firebaseConfig ={
    apiKey: "AIzaSyDBgcDZX63JrL9_iplHBNFBohI2bWyebiA",
  authDomain: "professionaled-ef789.firebaseapp.com",
  projectId: "professionaled-ef789",
  storageBucket: "professionaled-ef789.appspot.com",
  messagingSenderId: "1062030497100",
  appId: "1:1062030497100:web:ee10cdc093a54dc0c1ebe9"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db=app.firestore();
  export const auth = app.auth();
  export { db };