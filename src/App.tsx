import React from "react";
import "./App.css";
import { createFirebaseAuthClient } from "./features/authorization/client/firebaseAuthClient";
import { createApp } from "./common/api/client/firebaseApp";
import { AppConnected } from "./App.connected";

const client = createApp({
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ??
    (() => {
      throw new Error("No Firebase API key provided");
    })(),
  authDomain: "simoney-2023.firebaseapp.com",
  projectId: "simoney-2023",
  storageBucket: "simoney-2023.appspot.com",
  messagingSenderId: "411666894772",
  appId: "1:411666894772:web:1d0a1cde061c9769502ce1",
});
const authClient = createFirebaseAuthClient(client.auth);

export const App = () => <AppConnected authClient={authClient} />;
