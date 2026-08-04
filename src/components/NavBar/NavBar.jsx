import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getWhatsappUrl, pharmacyContact } from '../../data/contactData';
import { navigationLinks } from '../../data/navigationData';
import logo from '../../assets/logot.png';
import './NavBar.css';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

return (
  <header className="site-header">
    <nav className="navbar" aria-label="Navegación principal">
      <Link className="navbar__brand" to="/" onClick={handleCloseMenu}>
        <img
          className="navbar__logo"
          src={logo}
          alt={pharmacyContact.name}
        />

        <span className="navbar__brand-title">
          <span className="navbar__brand-title-text">
            {pharmacyContact.name}
          </span>
        </span>
      </Link>

      <button
        type="button"
        className="navbar__toggle"
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {isMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      <div
        className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}
        id="primary-navigation"
      >
        <div className="navbar__links">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a
          className="navbar__whatsapp"
          href={getWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  </header>
);
}

export default Navbar;
