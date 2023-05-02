import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
export const AuthContext = createContext(null); // Create a context object
const AuthProviders = ({ children }) => {
    const auth = getAuth(app);
    const register = (email , password) =>{ 
        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const providerValue = { register}
    return (
        <AuthContext.Provider value={providerValue}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;