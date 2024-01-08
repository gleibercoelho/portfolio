import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
    <App/>
    
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
