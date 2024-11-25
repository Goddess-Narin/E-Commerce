import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [load, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }

    //create user login email
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider)
    }

    //login
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user is available or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
        });
        return () => {
            return unsubscribe()
        }
    })

    //logout fuction
    const logout = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout,
        signUpWithGmail
    }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
