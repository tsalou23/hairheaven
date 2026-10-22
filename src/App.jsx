import React from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from '@/lib/i18n';
import SiteLayout from '@/components/site/SiteLayout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Team from '@/pages/Team';
import Reviews from '@/pages/Reviews';
import Book from '@/pages/Book';
import Contact from '@/pages/Contact';
import AdminBookings from '@/pages/AdminBookings';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return <div style={{padding:'2rem',fontFamily:'monospace',color:'red'}}>
        <b>Error:</b> {this.state.error.message}<br/><pre>{this.state.error.stack}</pre>
      </div>;
    }
    return this.props.children;
  }
}

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminBookings />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <LanguageProvider>
            <Router>
              <ScrollToTop />
              <AuthenticatedApp />
            </Router>
            <Toaster />
          </LanguageProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App