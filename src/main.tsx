
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  console.log("Mounting React app...");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <App />
  );
} catch (err) {
  console.error("React Mount Error:", err);
  document.body.innerHTML = `<div style="color: white; padding: 20px;">Error: ${err.message}</div>`;
}
