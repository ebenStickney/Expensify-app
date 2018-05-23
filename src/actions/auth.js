import { firebase, googleAuthProvider } from '../firebase/firebase';

//runs this method to generate the google auth as a popup.
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};
