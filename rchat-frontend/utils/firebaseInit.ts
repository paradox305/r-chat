import { FIREBASE_CONFIG } from "@/constants/firebase_config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = FIREBASE_CONFIG;

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
