import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
        
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: '1',
//     note: '1',
//     amount: 1,
//     createdAt: '1'
// });



// database.ref('notes/-L7QL49CRaxNxJpoVzaK').remove();

// database.ref('notes').push({
//     title: 'Bleep blop bloop',
//     body: 'oh hai'
// });

// const firebaseNotes = {
//     notes: {
//         randomid1: {
//             title: '1st Note',
//             body: 'Note body'
//         },
//         randomid2: {
//             title: '2nd Note',
//             body: 'Note body'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: '1st Note',
//     body: 'Note body'
// }, {
//     id: '134',
//     title: '2nd Note',
//     body: 'Note body'
// }];

// database.ref('notes').set(notes);

// const onDataChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(2);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//   name: 'Bone Mahone',
//   age: 223,
//   isMortal: false,
//   stressLevel: 6,
//   job: {
//       title: 'Czar of Compliance',
//       company: 'Bohmeian Grove'
//   },
//   location: {
//       city: 'Detroit',
//       state: 'Michigan'
//   }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Failed to save', e);
// });

// database.ref().update({
//     stressLevel: 5000,
//     'job/company': 'Skull & Bones',
//     'location/city': 'Grand Rapids'
// });

// database.ref('isMortal')
//     .remove()
//     .then(() => {
//         console.log('Data removed');
//     }).catch((e) => {
//         console.log('Failed to remove data', e);
//     });