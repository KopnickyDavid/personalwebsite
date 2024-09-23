import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/mainpage/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';

import Footer from './components/footer/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

