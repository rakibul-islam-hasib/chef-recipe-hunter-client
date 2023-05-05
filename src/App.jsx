import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Scroll from './hooks/scroll';
import Footer from './components/pages/shared/Footer';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './providers/AuthProviders';
import { MoonLoader } from 'react-spinners';
const App = () => {
  const { loader } = useContext(AuthContext);
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
        <Footer />
      </div>
      <Scroll />
      <Toaster />
    </div>
  );
};

export default App;