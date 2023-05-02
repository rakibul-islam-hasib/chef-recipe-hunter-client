import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
import { MoonLoader } from 'react-spinners'


export const AuthContext = createContext(null); // Create a context object
const AuthProviders = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const auth = getAuth(app);
    const register = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const update = (photo_url, name) => {
        return updateProfile(auth.currentUser, { photoURL: photo_url, displayName: name })
    }
    // login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    let googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            // console.log(user)
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])
    const providerValue = { register, update, login, googleLogin  , githubLogin}
    if (loader) {
        return <div className="h-screen flex justify-center items-center">
            <MoonLoader color="#36d7b7" />
        </div>
    }
    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;