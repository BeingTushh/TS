import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookTestPage from './pages/BookTestPage';
// import ResultsPage from './pages/ResultsPage'; // This line has been removed
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ReviewsPage from './pages/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

// --- NEW: Import the new page components ---
import InternshipApplicationPage from './pages/InternshipApplicationPage';
import ApplicationSuccessPage from './pages/ApplicationSuccessPage';
import ManpowerSupplyPage from './pages/ManpowerSupplyPage'; // Import the new page
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-light-bg text-dark-slate font-opensans">
        <Navbar />
        <main className="flex-grow pt-20"> {/* pt-20 to offset sticky navbar height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-test" element={<BookTestPage />} />
            {/* <Route path="/results" element={<ResultsPage />} /> // This line has been removed */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />

            {/* --- NEW: Add the routes for the internship application flow --- */}
            <Route path="/internship-application" element={<InternshipApplicationPage />} />
            <Route path="/application-success" element={<ApplicationSuccessPage />} />
            
            {/* --- NEW: Add the route for the manpower supply page --- */}
            <Route path="/manpower-supply" element={<ManpowerSupplyPage />} />

            

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
