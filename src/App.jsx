import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('./pages/Home/Home'));
const History = lazy(() => import('./pages/History/History'));
const Services = lazy(() => import('./pages/Services/Services'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Community = lazy(() => import('./pages/Community/Community'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <ScrollToTop />
      <Navbar />

      <div id="main-content" tabIndex="-1">
        <Suspense fallback={<div className="page-loading" role="status">Cargando contenido…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default App;
