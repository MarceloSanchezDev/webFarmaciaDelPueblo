import {
  getFullAddress,
  getWhatsappUrl,
  pharmacyContact,
} from '../../data/contactData';
import './Contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="section-kicker">Contacto</span>

          <h1>Estamos para ayudarte</h1>

          <p>
            Comunicate con {pharmacyContact.name} para consultar disponibilidad,
            servicios, obras sociales o información sobre medicamentos.
          </p>

          <div className="contact-hero__actions">
            <a
              className="primary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>

            <a
              className="secondary-button"
              href={pharmacyContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <span className="material-symbols-outlined" aria-hidden="true">
            location_on
          </span>

          <div>
            <h2>Dirección</h2>
            <p>{getFullAddress()}</p>

            <a
              href={pharmacyContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="contact-card">
          <span className="material-symbols-outlined" aria-hidden="true">
            call
          </span>

          <div>
            <h2>Teléfono</h2>
            <p>{pharmacyContact.phone}</p>

            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-card">
          <span className="material-symbols-outlined" aria-hidden="true">
            schedule
          </span>

          <div>
            <h2>Horarios</h2>

            <ul className="contact-hours">
              {pharmacyContact.openingHours.map((item) => (
                <li key={item.day}>
                  <strong>{item.day}</strong>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-card">
          <span className="material-symbols-outlined" aria-hidden="true">
            medical_services
          </span>

          <div>
            <h2>Servicios</h2>

            <ul className="contact-services">
              {pharmacyContact.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-card">
          <div>
            <span className="section-kicker">Ubicación</span>

            <h2>Encontranos fácilmente</h2>

            <p>
              Usá el mapa para llegar a la farmacia o escribinos por WhatsApp
              para confirmar horarios y atención disponible.
            </p>

            <a
              className="secondary-button"
              href={pharmacyContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>

          <div className="contact-map-embed">
            <iframe
              title={`Ubicación de ${pharmacyContact.name}`}
              src={pharmacyContact.mapsUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;