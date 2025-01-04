// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the left arrow icon

const Sidebar = ({ isBlogDetail, backto }) => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar">
      <ul>
      { isBlogDetail  && 
       <li>
       
         <button onClick={() => navigate(`/${backto}`)} className="back-button" >
                <FontAwesomeIcon icon={faArrowLeft} className="fa-2x" />
              </button>
              </li>
            }
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
            manvirag
          </NavLink>
        </li>
        <li>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? "active-link" : "")}>techwriting</NavLink>
        </li>
        <li>
          <NavLink to="/lifewriting" className={({ isActive }) => (isActive ? "active-link" : "")}>writing</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>about </NavLink>
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
            <a href="https://medium.com/@manvirag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-medium" style={{ fontSize: '19px', color: '#000' }}></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
