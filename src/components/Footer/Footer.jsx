import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__brand">
        <h3>Farmacia Del Pueblo</h3>
        <p>Más de un siglo acompañando a nuestra comunidad.</p>
      </div>

      <div className="footer__column">
        <h4>Contacto</h4>
        <a href="https://wa.me/" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </div>

      <div className="footer__column">
        <h4>Horarios</h4>
        <p>Lunes a viernes</p>
        <p>Consultar horarios disponibles</p>
      </div>

      <div className="footer__column">
        <h4>Dirección</h4>
        <p>Agregar dirección real de la farmacia</p>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Farmacia Del Pueblo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;