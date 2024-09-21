import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/mainpage/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './pages/adminpanel/panel';
import NavBar from './components/navbar/navbar';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Footer from './components/footer/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
 }
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

