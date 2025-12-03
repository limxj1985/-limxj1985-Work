import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import AbstractSubmission from './pages/AbstractSubmission';
import OralPresentation from './pages/OralPresentation';
import PosterPresentation from './pages/PosterPresentation';
import Registration from './pages/Registration';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/abstract-submission" element={<AbstractSubmission />} />
            <Route path="/oral-presentation" element={<OralPresentation />} />
            <Route path="/poster-presentation" element={<PosterPresentation />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;