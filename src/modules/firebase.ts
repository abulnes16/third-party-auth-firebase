import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import environment from "../config";

const firebaseConfig: FirebaseOptions = {
  apiKey: environment.firebaseApiKey,
  authDomain: environment.firebaseAuthDomain,
  projectId: environment.firebaseProjectID,
  storageBucket: environment.firebaseStorageBucket,
  messagingSenderId: environment.firebaseMessagingSender,
  appId: environment.firebaseAppID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firbeaseAuth = getAuth(firebaseApp);
