import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../service/firebase";


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {


  const [userName, setUserName] = useState('')
  const [userPhoto, setUserPhoto] = useState('')

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    const auth = getAuth(app);
    const response = await signInWithPopup(auth, provider);
    console.log(response);
    const { user }  = response

    setUserName(user.displayName)
    setUserPhoto(user.photoURL)
  };

  const authContextData = {
    signIn,
    userName,
    userPhoto
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
