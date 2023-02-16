import { AuthClient } from "./AuthClient";
import { initializeApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export const createFirebaseAuthClient = (auth: Auth): AuthClient => {
  // Initialize Firebase

  return {
    register: async (username, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          username,
          password
        );
        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: error instanceof Error ? error.message : String(error),
        };
      }
    },
    login: async (username, password) => {
      try {
        await signInWithEmailAndPassword(auth, username, password);
      } catch (error) {
        return {
          success: false,
          message: error instanceof Error ? error.message : String(error),
        };
      }
      return { success: true };
    },
    logout: async () => {
      try {
        await signOut(auth);
      } catch (error) {
        return {
          success: false,
          message: error instanceof Error ? error.message : String(error),
        };
      }
      return { success: true };
    },
    useAuthState: () => useAuthState(auth),
  };
};
