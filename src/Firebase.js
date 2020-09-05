import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ( {
    apiKey: "AIzaSyDFJGxesGHHLecM1nkrIx7Zg4vdn1oZfY4",
    authDomain: "clone-806ab.firebaseapp.com",
    databaseURL: "https://clone-806ab.firebaseio.com",
    projectId: "clone-806ab",
    storageBucket: "clone-806ab.appspot.com",
    messagingSenderId: "206455666502",
    appId: "1:206455666502:web:d522ec989490fbbb739747",
    measurementId: "G-4EJY6VMCRC"
  });
  
//   const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };