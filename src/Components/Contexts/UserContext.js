import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Provider = new GoogleAuthProvider()

const auth = getAuth(app)
export const AuthContext = createContext()






const UserContext = ({children}) => {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(true)

  //signUp-
  const signUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email, password)
  }

  //Login-
  const logInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword( auth, email, password);
  }

  //Sign Out-
  const signOutUser = () =>{
    return signOut( auth )
  }

  //sign In With Google-Popup
  const signInWithGoogle = () =>{
    return signInWithPopup(auth, Provider)
  }

  //update profile-
  const updateUserProfile = fullName =>{
    return updateProfile(auth.currentUser, {
      displayName: fullName
    })
  }



  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  },[])



  const authInfo = { user, signUp, logInUser, signOutUser, signInWithGoogle,
    updateUserProfile,loading
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;