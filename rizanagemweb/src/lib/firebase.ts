import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Temporarily hardcoding these to bypass the "undefined" error
const firebaseConfig = {
  apiKey: "AIzaSyDL_KOm4tepQTxFfz8_-j5UPt_e3avNIAk",
  authDomain: "rizana-gems.firebaseapp.com",
  projectId: "rizana-gems",
  storageBucket: "rizana-gems.firebasestorage.app",
  messagingSenderId: "835681794966",
  appId: "1:835681794966:web:b963f40f0f88fc4bdc7bb7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db };