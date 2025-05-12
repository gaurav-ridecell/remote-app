import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const renderMyApp = elementId => {
  createRoot(document.getElementById(elementId)).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

window.renderMyApp = renderMyApp;

// renderMyApp('root');
