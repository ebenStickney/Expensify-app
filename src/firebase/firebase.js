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
  firebase.database().ref().set({
    testing: 'is working'
  });
