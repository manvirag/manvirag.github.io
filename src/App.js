import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css"; // Add your styles here
import Sidebar from './SideBar'; // Import the Sidebar component
import AboutMe from './AboutMe'; // Import the AboutMe component
import Blogs from './Blogs'; // Import the Blogs component
import Manvirag from './Manvirag'
import BlogDetail from "./BlogDetails";
import blogData from "./blogData";
import lifeblog from "./lifeblog"

// Main App Component
const App = () => {
  const [isBlogDetail, setIsBlogDetail] = useState(false);
  const [backTo, setBackTo] = useState("");
  const location = useLocation(); // Get the current location
  
  useEffect(() => {
    // Check if the current path is for a blog detail
    const pathParts = location.pathname.split('/');
    if (( pathParts[1] === 'writing' ||  pathParts[1] === 'lifewriting') && pathParts.length === 3) {
      setIsBlogDetail(true); 
      setBackTo(pathParts[1])// Set to true if it's /writing/:id
    } else {
      setIsBlogDetail(false);
    }
  });

  return (
    // <Router>
      <div className="app-container">
        {/* Left Navigation Section */}
        <Sidebar isBlogDetail={isBlogDetail} backto={backTo}/> {/* Use the Sidebar component here */}

        {/* Main Content Section */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Manvirag />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/writing" element={<Blogs head={"writing"} blogData = {blogData}/>} />
            {/* <Route path="/writing" element={<Blogs head={"tech writing"} blogData = {blogData}/>} /> */}
            {/* <Route path="/lifewriting" element={<Blogs head={"writing"} blogData = {lifeblog}/>} /> */}
            <Route path="/writing/:id" element={<BlogDetail blogData={blogData} markdownPath = {"blog"} />} />
            {/* <Route path="/lifewriting/:id" element={<BlogDetail blogData={lifeblog} markdownPath = {"lifeblog"} />} /> */}
          </Routes>
        </div>
      </div>
    // </Router>
  );
};

export default App;
