import React from 'react';
import './Header.scss';
import { FaTasks } from 'react-icons/fa';
import MainMenu from '../MainMenu/MainMenu'; // Import MainMenu component

function Header() {
  return (
    <div>
      <header>
        <div className='title'><FaTasks /> Todo App</div>
        <div className='author'>by Muhammed Gadi</div>
      </header>
      <MainMenu /> {/* Include the MainMenu component */}
    </div>
  );
}

export default Header;
