import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCI2lVdoHBnTm2LVPJ8HvNoJCzjlntxLp8",
  authDomain: "coderecrute.firebaseapp.com",
  projectId: "coderecrute",
  storageBucket: "coderecrute.appspot.com",
  messagingSenderId: "1014678575511",
  appId: "1:1014678575511:web:96e83bdea0f36bf3dc4cd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export default app;
