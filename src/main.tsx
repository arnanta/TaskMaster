import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ThemeContextWrapper } from '@/contexts/ThemeContext/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
);
