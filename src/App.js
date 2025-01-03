// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css"; // Add your styles here

// Individual section components
const AboutMe = () => (
  <div>
    <h2>About Me</h2>
    <p>Hi, I am a software engineer with experience in building scalable applications...</p>
  </div>
);

const Blogs = () => (
  <div>
    <h2>My Blogs</h2>
    <p>Check out my latest articles on software development and technology.</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>My Projects</h2>
    <p>Here are some of the projects I have worked on...</p>
  </div>
);

const Talks = () => (
  <div>
    <h2>My Talks</h2>
    <p>Presentations and talks I have delivered at various events.</p>
  </div>
);

const Profiles = () => (
  <div>
    <h2>Profiles</h2>
    <p>Connect with me on LinkedIn, GitHub, and Twitter.</p>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Left Navigation Section */}
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link" : "")}>Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/talks" className={({ isActive }) => (isActive ? "active-link" : "")}>Talks</NavLink>
            </li>
            <li>
              <NavLink to="/profiles" className={({ isActive }) => (isActive ? "active-link" : "")}>Profiles</NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content Section */}
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/profiles" element={<Profiles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;