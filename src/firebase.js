

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  

  const firebaseConfig ={
    apiKey: "yourkey",
  authDomain: "",
  projectId: "professionaled-ef789",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db=app.firestore();
  export const auth = app.auth();
  export { db };
