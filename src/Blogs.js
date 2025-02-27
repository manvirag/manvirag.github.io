// src/components/BlogList.js
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import blogData from './blogData'; // Import blog data from external file

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const options = { month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `${day} ${formattedDate.split(' ')[0]} ${formattedDate.split(' ')[1]}`;
};

const BlogList = ({ head }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(blogData.flatMap(blog => blog.tags))];
  const filteredBlogs = selectedTag ? blogData.filter(blog => blog.tags.includes(selectedTag)) : blogData;

  return (
    <div className="writing">
      <h2>{head}</h2>
      
      <div className="tags-container">
        <button onClick={() => setSelectedTag(null)} className={selectedTag === null ? 'active' : ''}>All</button>
        {allTags.map(tag => (
          <button 
            key={tag} 
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <ul>
        {filteredBlogs.map((blog, index) => (
          <li key={blog.id} className="blog-item">
            <h3 className="blog-title">
              <Link to={blog.link} className="blog-title-link">
                  {blog.title.replace(/\.$/, '')}
              </Link>
            </h3>

            <h4 className="blog-subheading">{blog.subheading}</h4>
            <p className="published-date">{formatDate(blog.publishedDate)}</p>
            <Link to={blog.link} className="read-more">Read &rarr;</Link>
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="tag" 
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            
            {index < filteredBlogs.length - 1 && <hr/>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
