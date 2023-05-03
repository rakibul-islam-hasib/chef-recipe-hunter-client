import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const Privet = ({children}) => {
    const {user} = useContext(AuthContext); 
    const location = useLocation();
    if(!user){
      return  <Navigate to="/login" replace state={{from : location.pathname}} />;
    }
    return children;
};

export default Privet;