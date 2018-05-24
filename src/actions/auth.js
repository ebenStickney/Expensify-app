import { firebase, googleAuthProvider } from '../firebase/firebase';

//runs this method to generate the google auth as a popup.
//Setting up action gen for our auth confirmations
export const login = (uid) => ({
  type: "LOGIN",
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};
