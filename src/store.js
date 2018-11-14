import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Custom Reducers



const firebaseConfig = {
  apiKey: "AIzaSyDEeyyuc04gFucYcR1ycbw22eg1cq2Iuos",
  authDomain: "react-clients-17a0a.firebaseapp.com",
  databaseURL: "https://react-clients-17a0a.firebaseio.com",
  projectId: "react-clients-17a0a",
  storageBucket: "react-clients-17a0a.appspot.com",
  messagingSenderId: "1034971072055"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Next we have to initialize the firebase instance
firebase.initializeApp(firebaseConfig);
// Next we initialize firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})