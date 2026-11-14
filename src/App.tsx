import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { SafarisPage } from './pages/SafarisPage';
import { SafariDetailPage } from './pages/SafariDetailPage';
import { ExcursionsPage } from './pages/ExcursionsPage';
import { ExcursionDetailPage } from './pages/ExcursionDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top automatically upon route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-[#242424] bg-[#FAFAF7]">
        {/* Sticky Header with Logo, Navigation and WhatsApp CTA */}
        <Header />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/safaris" element={<SafarisPage />} />
            <Route path="/safaris/:id" element={<SafariDetailPage />} />
            <Route path="/excursions" element={<ExcursionsPage />} />
            <Route path="/excursions/:id" element={<ExcursionDetailPage />} />
            <Route path="/my-story" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Dark Forest Green Footer matching screenshot */}
        <Footer />

        {/* Floating WhatsApp Button on all pages */}
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
}
