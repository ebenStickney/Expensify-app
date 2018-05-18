import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDykfbH2DJrwPx0Ss_usMpO9r6ISGo5YQY",
    authDomain: "expensify-bb217.firebaseapp.com",
    databaseURL: "https://expensify-bb217.firebaseio.com",
    projectId: "expensify-bb217",
    storageBucket: "expensify-bb217.appspot.com",
    messagingSenderId: "202787155255"
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
