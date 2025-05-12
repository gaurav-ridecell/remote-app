import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const renderMyApp = (elementId, token) => {
  createRoot(document.getElementById(elementId)).render(
    <StrictMode>
      <App token={token} />
    </StrictMode>
  );
};

window.mount = renderMyApp;

// renderMyApp('root');
