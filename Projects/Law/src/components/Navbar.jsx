import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down
      setShowNavbar(false);
    } else {
      // If scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); // Close dropdown if click is outside
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    document.addEventListener('mousedown', handleOutsideClick); // Detect outside clicks

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div
      className={`text-white fixed top-5 z-50 container right-0 left-0 transition-transform duration-500 px-3 md:px-0 ${
        showNavbar ? 'translate-y-0' : '-translate-y-[8rem]'}`}>
      <div className='p-5 px-6 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-[7px] rounded-full'>
      <Link to="/">
      <div>
        {/* <img src="/images/logo2.webp" alt="logo" className='w-36' /> */}
      <h1>Prudential Coorperate & Legal Services</h1></div></Link>
        <div>
          <ul className='md:flex items-center gap-8 hidden'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/teams"><li>Our Teams</li></Link>
            <Link to="/service"><li>Services</li></Link>
            <Link className='hidden md:block lg:hidden' to="/contact"><li>Contact</li></Link>
            <Link className='hidden lg:block' to="/contact"><li className='p-3 bg-white text-black rounded-full px-8'>Contact</li></Link>
          </ul>

          <div className="relative md:hidden" ref={dropdownRef}>
            <button className='text-2xl' onClick={toggleDropdown}>
              <RiMenu4Line />
            </button>
            {showDropdown && (
              <div className="absolute top-full -right-5 mt-7 bg-black bg-opacity-60 drop-shadow-md backdrop-blur-md text-white rounded-lg shadow-lg p-4 w-[355px]">
                <ul className="flex flex-col gap-4 items-center">
                  <Link onClick={toggleDropdown} to="/"><li>Home</li></Link>
                  <Link onClick={toggleDropdown} to="/about"><li>About</li></Link>
                  <Link onClick={toggleDropdown} to="/teams"><li>Our Teams</li></Link>
                  <Link onClick={toggleDropdown} to="/service"><li>Services</li></Link>
                  <Link onClick={toggleDropdown} to="/contact"><li>Contact</li></Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
