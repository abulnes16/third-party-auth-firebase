export interface Environment {
  firebaseApiKey?: string;
  firebaseAuthDomain?: string;
  firebaseProjectID?: string;
  firebaseStorageBucket?: string;
  firebaseMessagingSender?: string;
  firebaseAppID?: string;
}

const environment: Environment = {
  firebaseApiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  firebaseProjectID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  firebaseStorageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSender: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppID: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default environment;
