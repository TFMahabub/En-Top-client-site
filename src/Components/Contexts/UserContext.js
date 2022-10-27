import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Provider = new GoogleAuthProvider()

const githubProvider = new GithubAuthProvider()

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
    setLoading(true)
    return signOut( auth )
  }

  //sign In With Google-Popup
  const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, Provider)
  }

  // sign in with github-popup
  const signInWithGithub = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  //update profile-
  const updateUserProfile = fullName =>{
    setLoading(true)
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
    updateUserProfile, loading, signInWithGithub
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;