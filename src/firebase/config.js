
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyDxaIzCQXt4miwMp4nz7n3B0DdNqdaX1nE",
    authDomain: "ninja-firegram-7ad48.firebaseapp.com",
    projectId: "ninja-firegram-7ad48",
    storageBucket: "ninja-firegram-7ad48.appspot.com",
    messagingSenderId: "445772259135",
    appId: "1:445772259135:web:f40e620d0105bbf988fd8a"
  };

  firebase.initializeApp(firebaseConfig);


  const projectstorage=firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectstorage,projectFirestore,timestamp};
