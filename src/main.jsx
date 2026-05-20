import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Watchlist from './pages/Watchlist.jsx';
import Education from './pages/Education.jsx';
import Community from './pages/Community.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import Screener from './pages/Screener.jsx';
import Portfolio from './pages/Portfolio.jsx';
import './styles.css';

const ROUTES = {
  '/':           Home,
  '/dashboard':  Dashboard,
  '/watchlist':  Watchlist,
  '/screener':   Screener,
  '/portfolio':  Portfolio,
  '/education':  Education,
  '/community':  Community,
  '/disclaimer': Disclaimer,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#') || a.target === '_blank') return;
      e.preventDefault();
      window.history.pushState({}, '', href);
      setPath(href);
      window.scrollTo(0, 0);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [path]);

  const Page = ROUTES[path] || Home;

  return (
    <div className="page">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
