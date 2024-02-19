import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "pt",
  resources: {
    en: {
      global: global_en
    },
    pt: {
      global: global_pt
    }
  }

})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Router basename="/portfolio/">
      <Routes>
    <Route path='/*' element={<App/>} />
    </Routes>
    </Router>
    </I18nextProvider>
  </React.StrictMode>
);
