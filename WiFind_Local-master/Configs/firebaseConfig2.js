import * as firebase from 'firebase';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDoHX3opw9Tg4cvBlTR60xePFVP59Nwwx0",
    authDomain: "wifind-test2.firebaseapp.com",
    projectId: "wifind-test2",
    storageBucket: "wifind-test2.appspot.com",
    messagingSenderId: "673781457835",
    appId: "1:673781457835:web:a2a2b5229b5204887aa8ee",
    measurementId: "G-N84N7Q6X8G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };