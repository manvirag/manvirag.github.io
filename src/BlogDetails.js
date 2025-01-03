// src/BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the left arrow icon
import blogData from './blogData';
import './App.css'; // Optional: Create a CSS file for styling
import { useImageSize } from 'react-image-size';

const ImageComponent = ({ src }) => {
  const [dimensions, { loading, error }] = useImageSize(src);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <img src={require(src)} alt="Dynamic" style={{ maxWidth: '100%', height: 'auto' }} />
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const options = { month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `${day} ${formattedDate.split(' ')[0]} ${formattedDate.split(' ')[1]}`;
};


const BlogDetail = ({blogData, markdown}) => {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/markdown/${markdown}${id}.md`); // Adjust path as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [id]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) {
    return <div>Blog not found!</div>;
  }
  
  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p className="published-date-detail">Published: {formatDate(blog.publishedDate)}</p>
      <ReactMarkdown className="markdown-content" components={{
        img: ({node, ...props}) => (<img {...props} style={{ maxWidth: '100%', height: 'auto' }} />),
        video: ({ node, ...props }) => (
            <video {...props} controls style={{ maxWidth: '100%', height: 'auto' }}>
              Your browser does not support the video tag.
              <source src={props.src} type="video/mp4" />
              {/* Add additional source types if needed */}
            </video>
          ),
      }}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default BlogDetail;
