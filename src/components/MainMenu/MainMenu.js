import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.scss'; // Import your SCSS file for styling

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/" className="menu-link">Tasks</Link>
        </li>
        <li>
          <Link to="/add" className="menu-link">Add</Link>
        </li>
        <li>
          <Link to="/help" className="menu-link">Help</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
