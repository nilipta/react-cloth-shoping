import firebase from 'firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyDteL7cULQuKwWt0a0Kp1RDaUn9Z4Ri4xQ",
    authDomain: "nilipta-clients-redux.firebaseapp.com",
    databaseURL: "https://nilipta-clients-redux.firebaseio.com",
    projectId: "nilipta-clients-redux",
    storageBucket: "nilipta-clients-redux.appspot.com",
    messagingSenderId: "246292366899",
    appId: "1:246292366899:web:0d063d843a0115f6530546",
    measurementId: "G-PZ7Z5Y97PD"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;