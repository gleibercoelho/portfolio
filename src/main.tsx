import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Switch>
    <Route path='/*' element={<App/>} />
    </Switch>
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
