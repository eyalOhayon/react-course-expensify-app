import * as firebase from 'firebase'; 
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyArB1biUz9L3kWx79-Da-ISpQBG0foJlBc",
    authDomain: "expensify-6d59c.firebaseapp.com",
    databaseURL: "https://expensify-6d59c-default-rtdb.firebaseio.com",
    projectId: "expensify-6d59c",
    storageBucket: "expensify-6d59c.appspot.com",
    messagingSenderId: "436634873311",
    appId: "1:436634873311:web:0def1e7d5886a5650c686a",
    measurementId: "G-B25PP5ZGTY"
  };


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 900,
//     createdAt: 23090 
// });


// database.ref('expenses').push({
//   description: 'water bill',
//   amount: 300,
//   createdAt: 21000 
// });


// database.ref('expenses').push({
//   description: 'electric bill',
//   amount: 600,
//   createdAt: 21123
// });




// database.ref('expenses').on('child_changed', (childSnap) => {
//     console.log(childSnap.key, childSnap.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnap) => {
//         expenses.push({
//             id: childSnap.key,
//             ...childSnap.val()
//         });
//     });
//     console.log(expenses);
// });








// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 100,
//     createdAt: -21000 
// });


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val().name, 'height is', snapshot.val().attributes.height)
// });


// setTimeout(() => {
//     database.ref().set({
//         name: "Eyal Ohayon",
//         attributes: {
//             height: 150,
//             whight: 65
//     }}).then(() => {
//         console.log('data is saved');
//     }).catch((e) => {
//         console.log('this failed', e);
//     });
        
// }, 3500);

// firebase.database().ref().update({
//     name: "other",
//     'attributes/height': 200
// }).then(() => {
//     console.log('data is updated');
// }).catch((e) => {
//     console.log('remove failed', e);
// });


// firebase.database().ref().set({
//     name: "Eyal Ohayon",
//     attributes: {
//         height: 150,
//         whight: 65
//     }
// });