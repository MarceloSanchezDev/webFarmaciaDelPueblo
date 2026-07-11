import {
  getFullAddress,
  getWhatsappUrl,
  pharmacyContact,
} from '../../data/contactData';
import { navigationLinks } from '../../data/navigationData';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-brand">
          <h2>{pharmacyContact.name}</h2>
          <p>
            Atención cercana, asesoramiento profesional y compromiso con la
            salud de la comunidad.
          </p>
        </section>

        <section>
          <h3>Navegación</h3>

          <nav className="footer-links" aria-label="Navegación secundaria">
            {navigationLinks.map((link) => (
              <a key={link.path} href={link.path}>
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        <section>
          <h3>Contacto</h3>

          <ul className="footer-list">
            <li>{getFullAddress()}</li>
            <li>{pharmacyContact.phone}</li>
            <li>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Horarios</h3>

          <ul className="footer-list">
            {pharmacyContact.openingHours.map((item) => (
              <li key={item.day}>
                {item.day}: {item.hours}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {pharmacyContact.name}. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;