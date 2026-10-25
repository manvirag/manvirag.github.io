// src/BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Import rehype-raw for raw HTML parsing
import './App.css';

const headingText = (node) => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(headingText).join('');
  if (React.isValidElement(node)) return headingText(node.props.children);
  return '';
};

const slugify = (text) => {
  const primary = text.split('(')[0];
  return primary
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

const heading = (Tag) => ({ children, ...props }) => {
  const id = props.id || slugify(headingText(children));
  return (
    <Tag id={id} {...props}>
      {children}
    </Tag>
  );
};

const MarkdownLink = ({ href, children, ...props }) => {
  if (href?.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const id = decodeURIComponent(href.slice(1));
          const el = document.getElementById(id);
          if (!el) return;
          const container = el.closest('.content');
          if (container) {
            const top =
              el.getBoundingClientRect().top -
              container.getBoundingClientRect().top +
              container.scrollTop -
              16;
            container.scrollTo({ top, behavior: 'smooth' });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

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

      {/* Display blog tags */}
      <div className="blog-tags">
        {blog.tags.map((tag) => (
          <Link key={tag} className="tag">
            {tag}
          </Link>
        ))}
      </div>

      <ReactMarkdown
        className="markdown-content"
        children={markdownContent}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}   // 👈 ADD THIS
        components={{
          a: MarkdownLink,
          h1: heading('h1'),
          h2: heading('h2'),
          h3: heading('h3'),
          h4: heading('h4'),
          h5: heading('h5'),
          h6: heading('h6'),
          img: ({ ...props }) => (
            <img {...props} style={{ width: '100%', height: 'auto', margin: '1em 0' }} />
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
            </video>
          ),
        }}
      />
    </div>
  );
};

export default BlogDetail;
