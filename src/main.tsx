
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found");
  document.body.innerHTML = '<div style="color: white; text-align: center; padding-top: 50px;">Erro: Elemento root não encontrado.</div>';
} else {
  rootElement.innerHTML = '<div style="color: white; text-align: center; padding-top: 50px;">Iniciando aplicação...</div>';
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
}
