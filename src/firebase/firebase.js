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

  database.ref('traits/dopeness').set('eh..okay')

  database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} could be described as ${val.traits.dopeness}.`);
  });

 setTimeout( () => {
   database.ref().update({'traits/dopeness': 'dope, level midnight'});
 }, 7000);

  // database.ref()
  // .once('value')
  // .then( (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch( (e) => {
  //   console.log('error:', e);
  // });
  //
  // database.ref().set({
  //   name: 'Eben',
  //   age: 33,
  //   location: {
  //     city: 'Portland',
  //     state: 'Oregon'
  //   }
  // })
  // .then( () => {console.log('data passed')})
  // .catch( (e) => {console.log('error', e)});
  //
  //
  // // database.ref('traits').set({
  // //   funny: true,
  // //   single: false,
  // //   desireToCode: 10
  // // }).then( () => {console.log('data passed test!')})
  // // .catch( (e) => {console.log('error!!', e)});
  // //
  // // database.ref('traits/single').remove()
  // // .then( () => {console.log('Yo shit is gone')})
  // // .catch( (e) => { console.log('naw, brah', e)});
  // //
  // // database.ref().update({'location/state': 'Maine', 'traits/desireToCode': 11})
  // // .then( () => {console.log('Yo shit is updated')})
  // // .catch( (e) => { console.log('naw, brah', e)});
