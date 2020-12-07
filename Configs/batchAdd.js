import React from 'react';
import 'firebase/firestore';
import { firebase } from './firebaseConfig2'


export default function() {

    alert("here")
    return;


    var providers =  []

    var db = firebase.firestore();
    var batch = db.batch()

    providers.forEach((doc) => {

    var docRef = db.collection("Providers").doc(); //automatically generate unique id
    batch.set(docRef, doc);
    });

    batch.commit()

};