const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the latest commit date from git
  const commitDate = execSync('git log -1 --format=%cI', { encoding: 'utf-8' }).trim();
  
  // If no commit date found, use current date
  const lastUpdate = commitDate || new Date().toISOString();
  
  // Create .env file in the root directory
  const envPath = path.join(__dirname, '..', '.env');
  const envContent = `REACT_APP_LAST_UPDATE=${lastUpdate}\n`;
  
  fs.writeFileSync(envPath, envContent, 'utf-8');
  
  console.log(`✓ Updated last update timestamp: ${lastUpdate}`);
} catch (error) {
  // Fallback to current date if git command fails
  const lastUpdate = new Date().toISOString();
  const envPath = path.join(__dirname, '..', '.env');
  const envContent = `REACT_APP_LAST_UPDATE=${lastUpdate}\n`;
  
  fs.writeFileSync(envPath, envContent, 'utf-8');
  
  console.log(`⚠ Git command failed, using current date: ${lastUpdate}`);
}


