// src/components/BlogList.js
import React from 'react';
import './App.css'; // Ensure your CSS file is imported
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Format day as "01", "02", etc.
  const options = { month: 'short', year: 'numeric' }; // Get short month name and year
  const formattedDate = date.toLocaleDateString('en-US', options); // Get month and year
  return `${day} ${formattedDate.split(' ')[0]} ${formattedDate.split(' ')[1]}`; // Return formatted date
};

const BlogList = ({head, blogData}) => {
  return (
    <div className="writing">
      <h2>{head}</h2>
      <ul>
        {blogData.map((blog, index) => (
          <li key={blog.id} className="blog-item">
          <h3 className="blog-title">{blog.title.replace(/\.$/, '')}</h3>
          <h4 className="blog-subheading">{blog.subheading}</h4>
          <p className="published-date">{formatDate(blog.publishedDate)}&nbsp; {/* Non-breaking space */}</p>
            <p>.</p>
            <Link to={blog.link} className="read-more">
              Read&rarr; {/* Right arrow added */}
            </Link>
            {/* Render <hr /> only if this is not the last blog */}
            {index < blogData.length - 1 && <hr/>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
