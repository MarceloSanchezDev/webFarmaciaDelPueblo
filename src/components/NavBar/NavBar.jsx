import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="/" className="navbar__brand">
        <div className="navbar__logo">
          <span className="material-symbols-outlined">local_pharmacy</span>
        </div>

        <span>Farmacia Del Pueblo</span>
      </a>

      <nav className="navbar__links">
        <a href="/">Inicio</a>
        <a href="/historia">Nuestra historia</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Ubicación y contacto</a>
        <a href="/comunidad">Comunidad</a>
      </nav>

      <a className="navbar__whatsapp" href="https://wa.me/" target="_blank">
        <span className="material-symbols-outlined">chat</span>
        WhatsApp
      </a>
    </header>
  );
};

export default Navbar;