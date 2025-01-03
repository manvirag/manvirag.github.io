// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
            manvirag
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>about </NavLink>
        </li>
        <li>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? "active-link" : "")}>writing</NavLink>
        </li>
        {/* Social media links */}
        <li style={{ marginTop: '20px' }}>
          <div className="social-links" style={{ display: 'flex', marginTop: '10px' }}>
            <a href="https://github.com/manvirag" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" style={{ fontSize: '20px', color: '#000' }}></i>
            </a>
            <a href="https://twitter.com/manvirag" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter" style={{ fontSize: '20px', color: '#000' }}></i>
            </a>
            <a href="https://linkedin.com/in/manvirag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" style={{ fontSize: '20px', color: '#000' }}></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
