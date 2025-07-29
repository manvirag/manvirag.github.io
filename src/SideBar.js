// Sidebar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isBlogDetail, backto }) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.add('dark-theme');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <nav className="sidebar">
      <ul>
        {isBlogDetail && (
          <li>
            <button onClick={() => navigate(`/${backto}`)} className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} className="fa-2x" />
            </button>
          </li>
        )}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
            manvirag
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? "active-link" : "")}>techwriting</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/lifewriting" className={({ isActive }) => (isActive ? "active-link" : "")}>writing</NavLink>
        </li> */}
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? "active-link" : "")}>
            writing
          </NavLink>
        </li>
        
        {/* Social media links */}
        <li style={{ marginTop: '20px' }}>
          <div className="social-links" style={{ display: 'flex', marginTop: '10px' }}>
            <a href="https://github.com/manvirag" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/manvirag" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/manvirag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://medium.com/@manvirag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </li>
        {/* Theme Toggle */}
        <li style={{ 
          marginTop: '40px',
          textAlign: 'right',
          paddingRight: '15px',
          paddingBottom: '20px'
        }}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              display: 'inline-block'
            }}
          >
            <FontAwesomeIcon 
              icon={isDarkMode ? faSun : faMoon} 
              style={{ 
                fontSize: '1.2rem',
                color: isDarkMode ? '#ffd700' : '#000'
              }} 
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
