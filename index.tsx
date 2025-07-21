
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Mock process.env.API_KEY for development in this environment
// In a real build, this would be set by the environment
if (!import.meta.env.VITE_GEMINI_API_KEY) {
  console.warn("VITE_GEMINI_API_KEY not found in environment. Using placeholder. Ensure VITE_GEMINI_API_KEY is set for Gemini features.");
}


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
