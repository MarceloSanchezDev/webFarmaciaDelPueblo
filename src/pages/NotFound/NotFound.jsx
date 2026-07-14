import { Link } from 'react-router-dom';
import {
  getWhatsappUrl,
  pharmacyContact,
} from '../../data/contactData';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found">
        <div className="not-found__content">
          <span className="not-found__code">404</span>

          <span className="section-kicker">Página no encontrada</span>

          <h1>La página que buscás no existe</h1>

          <p>
            Es posible que la dirección esté mal escrita, que el enlace haya
            cambiado o que la sección ya no esté disponible en{' '}
            {pharmacyContact.name}.
          </p>

          <div className="not-found__actions">
            <Link className="primary-button" to="/">
              Volver al inicio
            </Link>

            <Link className="secondary-button" to="/servicios">
              Ver servicios
            </Link>

            <a
              className="secondary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="not-found__visual" aria-hidden="true">
          <span className="material-symbols-outlined">
            local_pharmacy
          </span>
        </div>
      </section>
    </main>
  );
}

export default NotFound;