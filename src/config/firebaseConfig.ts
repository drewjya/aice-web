import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { // Have the firebase config here
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_MESSAGING_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBQ1C4O_nPkPzzr35iVZbwypuSNWm-UW9U",
//     authDomain: "testing-b7d59.firebaseapp.com",
//     projectId: "testing-b7d59",
//     storageBucket: "testing-b7d59.appspot.com",
//     messagingSenderId: "377561562113",
//     appId: "1:377561562113:web:fa832b39fbe3e7688e5400",
//     measurementId: "G-17BFQ5HXB2"
// };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const firestore = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, firestore };