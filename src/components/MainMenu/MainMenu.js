import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Tasks</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
