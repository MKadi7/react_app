import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function HelpPage() {
  return (
    <div>
      <h2>Help</h2>
      <nav>
        <ul>
          <li><Link to="add">Add</Link></li>
          <li><Link to="remove">Remove</Link></li>
          <li><Link to="change">Change</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpPage;
