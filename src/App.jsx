import React from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="bg-primary">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default App;