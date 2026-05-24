import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

// Kill browser auto scroll-restoration so the page always lands at top
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { WhatsAppFab } from './components/WhatsApp';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import BuiltForYou from './pages/BuiltForYou';
import About from './pages/About';
import Contact from './pages/Contact';
import useLanguage from './i18n/useLanguage';
import Chatbot from './components/Chatbot';

function ScrollToTop() {
  const { pathname } = useLocation();
  // useLayoutEffect runs synchronously BEFORE paint — beats Safari's scroll-restore
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};
const pageTransition = { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] };

function PageWrap({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrap><Home /></PageWrap>} />
        <Route path="/about" element={<PageWrap><About /></PageWrap>} />
        <Route path="/portfolio" element={<PageWrap><Portfolio /></PageWrap>} />
        <Route path="/built-for-you" element={<PageWrap><BuiltForYou /></PageWrap>} />
        <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const lang = useLanguage((s) => s.lang);
  const dir = useLanguage((s) => s.dir);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <div className={`app-root ${dir}`}>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppFab />
      <Chatbot />
    </div>
  );
}

export default App;
