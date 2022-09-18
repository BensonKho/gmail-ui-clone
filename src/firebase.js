import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlnxmZjSJqdv0z8LAaMsNFF-p3RHP2AdY",
    authDomain: "ui-clone-1e022.firebaseapp.com",
    projectId: "ui-clone-1e022",
    storageBucket: "ui-clone-1e022.appspot.com",
    messagingSenderId: "239981749989",
    appId: "1:239981749989:web:0664a2b45dd3d17649160c",
    measurementId: "G-KMK1HG40KS"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export { db, auth, provider };