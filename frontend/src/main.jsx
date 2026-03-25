import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/companion.css';
import './assets/css/admin.css';
import './assets/css/errol.css';
import './assets/css/user.css';
import './assets/css/style.css';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
