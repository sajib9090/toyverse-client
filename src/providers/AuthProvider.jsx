import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
         user,
         loading,
         googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;