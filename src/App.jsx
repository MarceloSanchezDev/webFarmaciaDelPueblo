import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Community from './pages/Community/Community';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/comunidad" element={<Community />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;