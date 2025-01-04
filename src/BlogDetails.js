// src/BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Import rehype-raw for raw HTML parsing
import './App.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const options = { month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `${day} ${formattedDate.split(' ')[0]} ${formattedDate.split(' ')[1]}`;
};

const BlogDetail = ({ blogData, markdownPath }) => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/markdown/${markdownPath}${id}.md`); // Load the markdown based on ID
        if (!response.ok) {
          throw new Error('Failed to load content');
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
  }, [id, markdownPath]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found!</div>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p className="published-date-detail">Published: {formatDate(blog.publishedDate)}</p>
      <ReactMarkdown
        className="markdown-content"
        children={markdownContent}
        rehypePlugins={[rehypeRaw]} // Enable raw HTML parsing
        components={{
          img: ({ ...props }) => (
            <img {...props} style={{ width: '1000px', height: 'auto', margin: '1em 0' }} />
          ),
          video: ({ ...props }) => (
            <video
              {...props}
              controls
              style={{
                maxWidth: '100%',
                height: 'auto',
                margin: '1em 0',
                borderRadius: '8px',
              }}
            >
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ),
        }}
      />
    </div>
  );
};

export default BlogDetail;
