import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW0nl_Prf2FEBUzS2KjDt0U0ZsjWhKuOI",
  authDomain: "crwn-clothing-db-e91ad.firebaseapp.com",
  projectId: "crwn-clothing-db-e91ad",
  storageBucket: "crwn-clothing-db-e91ad.appspot.com",
  messagingSenderId: "790612711995",
  appId: "1:790612711995:web:d519be10e3ea3b52941a1e"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
}