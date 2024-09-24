import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-customPurpleL to-customPurpleR text-white p-4 w-full fixed left-0 top-0 z-10'>
      <div className='container mx-auto flex justify-between items-center w-full'>
        {/* Logo */}
        <div className='logo'>
          <img
            src='https://tnpl.cricket/assets/images/tnpl-logo.png' // Replace with your logo path
            alt='Logo'
            className='h-12' // Adjust height based on your logo
          />
        </div>

        {/* Navigation */}
        <nav className='flex space-x-8 font-bebas text-xl'>
          <Link to="/" className='hover:text-hoverYellow'>HOME</Link>
          <Link to="/matches" className='hover:text-hoverYellow'>MATCHES</Link>
          <Link to="/videos" className='hover:text-hoverYellow flex items-center'>
            VIDEOS <span className='ml-1'>&#x25BC;</span>
          </Link>
          <Link to="/stats" className='hover:text-hoverYellow'>STATS</Link>
          <Link to="/points-table" className='hover:text-hoverYellow'>POINTS TABLE</Link>
          <Link to="/news" className='hover:text-hoverYellow'>NEWS</Link>
          <Link to="/photos" className='hover:text-hoverYellow'>PHOTOS</Link>
          <Link to="/teams" className='hover:text-hoverYellow'>TEAMS</Link>
          <Link to="/about" className='hover:text-hoverYellow flex items-center'>
            ABOUT <span className='ml-1'>&#x25BC;</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
