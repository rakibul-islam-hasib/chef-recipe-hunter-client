import React, { createContext } from 'react';

export const AuthContext = createContext(null); // Create a context object
const AuthProviders = ({ children }) => {

    const providerValue = {user : null}
    return (
        <AuthContext.Provider value={providerValue}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;