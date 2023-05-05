import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
import { MoonLoader } from 'react-spinners'


export const AuthContext = createContext(null); // Create a context object
const AuthProviders = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null); // [1]
    const [error, setError] = useState(null); // Add error state

    const auth = getAuth(app);
    const register = async (email, password) => {
        setLoader(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setLoader(false);
            setError(error); // Update error state
            throw error;
        }
    }
    const update = async (photo_url, name) => {
        setLoader(true);
        try {
            return await updateProfile(auth.currentUser, { photoURL: photo_url, displayName: name });
        } catch (error) {
            setLoader(false);
            throw error;
        }
    }
    // login with email and password
    const login = async (email, password) => {
        setLoader(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setLoader(false);
            setError(error.code); // Update error state
            throw error;
        }
    }
    let googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = ()=> { 
        setLoader(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            // console.log(user)
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])
    // console.log(error)
    const providerValue = { register, update, login, googleLogin, githubLogin , user , logOut , error}
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