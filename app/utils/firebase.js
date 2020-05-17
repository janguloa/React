import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD-keGz5wKcp3kp0rIZgQN7kd4a7B2u6Q0",
    authDomain: "tenedores-66157.firebaseapp.com",
    databaseURL: "https://tenedores-66157.firebaseio.com",
    projectId: "tenedores-66157",
    storageBucket: "tenedores-66157.appspot.com",
    messagingSenderId: "920025867675",
    appId: "1:920025867675:web:a9bb391010f5ac9de0ed3e"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);