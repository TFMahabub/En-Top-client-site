import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState('')

  //signUp-
  const signUp = (email, password) =>{
    return createUserWithEmailAndPassword( auth, email, password)
  }

  //Login-
  const logInUser = (email, password) =>{
    return signInWithEmailAndPassword( auth, email, password);
  }





  const authInfo = { user, signUp, logInUser };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;