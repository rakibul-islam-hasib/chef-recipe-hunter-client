import React from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='relative'>
      <div className="bg-primary z-20 fixed top-0 w-full">
        <NavBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default App;