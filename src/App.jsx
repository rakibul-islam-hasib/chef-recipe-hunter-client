import React, { useEffect, useState } from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/shared/Footer';

const App = () => {
  const [navBackground, setNavBackground] = useState('bg-[#5A6169]'); // Initial background color of the nav element
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const pathName = location.pathname;
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [pathName])
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) { // When the user scrolls down
        setNavBackground('bg-black'); // Change the background color of the nav element to black
      } else { // When the user scrolls to the top
        setNavBackground('bg-[#343D47]'); // Change the background color of the nav element to the initial color
      }
    };
    window.addEventListener('scroll', handleScroll); // Add a scroll event listener to the window object
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener when the component unmounts
    };
  }, []);
  return (
    <div className='relative'>
      <div className={`${navBackground} ${isLogin && 'bg-black'} z-20 fixed top-0 w-full`}>
        <NavBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer /> {/* Footer component */}
      </div>
    </div>
  );
};

export default App;