import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    
    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // email password create user

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //on auth state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        };

    },[]);

    const authInfo = {
         user,
         loading,
         googleLogin,
         logOut,
         registerUser
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;