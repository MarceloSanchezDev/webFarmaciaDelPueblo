import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import History from './pages/History/History'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Community from './pages/Comunity/Comunity'
function App() {

  return (
         <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/servicios" element={<Services />} />
              <Route path="/contacto" element={<Contact />} />
 <Route path="/comunidad" element={<Community />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
