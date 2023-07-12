import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@/theme';
import '@/index.css';

import AppRoutes from '@/routes/AppRoutes';

const App = () => (
  <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
