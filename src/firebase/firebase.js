import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };



  firebase.initializeApp(config);


  const database = firebase.database();

  export { firebase, database as default };

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })
  //
  // // database.ref('expenses').on('value', (snapshot) => {
  // //   const expenses = [];
  // //   snapshot.forEach( (childSnapshot) => {
  // //     expenses.push( {
  // //       id: childSnapshot.key,
  // //       ...childSnapshot
  // //     })
  // //   })
  // //   console.log(expenses);
  // // });
  //
  // setTimeout( ()=> {
  //   database.ref('expenses/-LCjsBemcnZmppkjDNoE').update({description: 'yo mama'});
  // }, 3000);

  // database.ref('expenses')
  // .once('value')
  // .then( (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach( (childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //       })
  //       console.log(expenses);
  // })
// database.ref('expenses').push({description: 'car', amount: 120.00, note: '', createdAt: 3692});
//
// database.ref('expenses').push({description: 'internet', amount: 150.00, note: '', createdAt: 34642});
//
// database.ref('expenses').push({description: 'rent', amount: 1500.00, note: '', createdAt: 340292});
//
// database.ref('expenses').push({description: 'food', amount: 400.00, note: '', createdAt: 76292});
