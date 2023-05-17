import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDj0XjYx0hssJhGBjdD8hiWCC5Dpo6p4ys',
  authDomain: 'mymoney-22bd1.firebaseapp.com',
  projectId: 'mymoney-22bd1',
  storageBucket: 'mymoney-22bd1.appspot.com',
  messagingSenderId: '202083395984',
  appId: '1:202083395984:web:7dcea63008a9a6e0b1eb15',
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services for firestore and authentification
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
