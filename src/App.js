import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Add your styles here
import Sidebar from './SideBar'; // Import the Sidebar component
import AboutMe from './AboutMe'; // Import the AboutMe component
import Blogs from './Blogs'; // Import the Blogs component
import Manvirag from './Manvirag'

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Left Navigation Section */}
        <Sidebar /> {/* Use the Sidebar component here */}

        {/* Main Content Section */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Manvirag />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
