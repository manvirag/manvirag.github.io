import React from 'react';
import './LastUpdate.css';

const LastUpdate = () => {
  // Get the last update timestamp from the config file
  // This will be set during build time
  const lastUpdate = process.env.REACT_APP_LAST_UPDATE || new Date().toISOString();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="last-update">
      <span className="last-update-text">Last updated: {formatDate(lastUpdate)}</span>
    </div>
  );
};

export default LastUpdate;

