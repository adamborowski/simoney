import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export const createApp = (config: FirebaseConfig) => {
  const app = initializeApp(config);
  const auth = getAuth(app);
  return { app, auth };
};
