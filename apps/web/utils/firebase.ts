import firebase from "firebase/app";
import "firebase/auth";

type SignInWithEmailAndPasswordArgs = {
  email: string;
  password: string;
};

const clientSignInWithEmailAndPassword = ({
  email,
  password,
}: SignInWithEmailAndPasswordArgs) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const clientCreateUserWithEmailAndPassword = ({
  email,
  password,
}: SignInWithEmailAndPasswordArgs) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

const clientSignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  return firebase.auth().signInWithPopup(provider);
};

const clientLogout = () => {
  return firebase.auth().signOut();
};

export {
  clientSignInWithEmailAndPassword,
  clientCreateUserWithEmailAndPassword,
  clientSignInWithGoogle,
  clientLogout,
};
