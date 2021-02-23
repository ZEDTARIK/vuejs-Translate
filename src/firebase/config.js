import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTaCrm3fTMvbTIwKX7-uYDdkxwgenjw3A",
    authDomain: "vuejs3-50356.firebaseapp.com",
    projectId: "vuejs3-50356",
    storageBucket: "vuejs3-50356.appspot.com",
    messagingSenderId: "76217019640",
    appId: "1:76217019640:web:5681edce6f2fc84c559f0d"
};

// init fireBase
firebase.initializeApp(firebaseConfig);
// init fireStore
const db = firebase.firestore();

export { db };