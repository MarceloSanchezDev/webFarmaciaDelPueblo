import "./Contact.css";

import Button from "../../components/UI/Buttons/Buttons";
import ContactInfoItem from "../../components/UI/ContactInfoItem/ContactInfoItem";
import DirectionCard from "../../components/UI/DirectionCard/DirectionCard";

const publicTransportItems = [
  "Líneas de colectivo cercanas a la farmacia.",
  "Acceso fácil desde puntos principales del barrio.",
];

const carItems = [
  "Estacionamiento disponible en calles cercanas.",
  "Acceso rápido desde avenidas principales.",
];

const Contact = () => {
  return (
 

      <main className="contact-page">
        <section className="contact-map-hero">
          <div className="contact-map-hero__overlay"></div>

          <div className="contact-map-hero__pin">
            <div className="contact-map-hero__logo">
              <span className="material-symbols-outlined">local_pharmacy</span>
            </div>

            <div className="contact-map-hero__dot"></div>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-content__grid">
            <div className="contact-content__left">
              <article className="contact-store-card">
                <img
                  src="/images/farmacia-frente.jpg"
                  alt="Frente de Farmacia Del Pueblo"
                  className="contact-store-card__image"
                />

                <div className="contact-store-card__content">
                  <div className="contact-store-card__label">
                    <span className="material-symbols-outlined">storefront</span>
                    <span>Nuestra ubicación histórica</span>
                  </div>

                  <h1>Visitá Farmacia Del Pueblo</h1>

                  <p>
                    Estamos ubicados en el corazón del barrio, acompañando a la
                    comunidad con atención cercana, profesional y humana desde
                    hace más de un siglo.
                  </p>
                </div>
              </article>

              <section className="directions-section">
                <div className="directions-section__title">
                  <span className="material-symbols-outlined">directions</span>
                  <h2>Cómo llegar</h2>
                </div>

                <div className="directions-section__grid">
                  <DirectionCard
                    icon="directions_bus"
                    title="En transporte público"
                    items={publicTransportItems}
                  />

                  <DirectionCard
                    icon="directions_car"
                    title="En auto"
                    items={carItems}
                  />
                </div>
              </section>
            </div>

            <aside className="contact-details-card">
              <h2>Datos de contacto</h2>

              <div className="contact-details-card__list">
                <ContactInfoItem
                  icon="location_on"
                  label="Dirección"
                  actionLabel="Abrir mapa"
                  actionHref="https://maps.google.com"
                >
                  <p>
                    Agregar dirección real
                    <br />
                    Farmacia Del Pueblo
                    <br />
                    Buenos Aires, Argentina
                  </p>
                </ContactInfoItem>

                <ContactInfoItem icon="schedule" label="Horarios">
                  <div className="contact-hours">
                    <div>
                      <span>Lunes a viernes</span>
                      <strong>08:00 - 20:00</strong>
                    </div>

                    <div>
                      <span>Sábado</span>
                      <strong>09:00 - 18:00</strong>
                    </div>

                    <div>
                      <span>Domingos y feriados</span>
                      <strong className="contact-hours__closed">Cerrado</strong>
                    </div>
                  </div>
                </ContactInfoItem>

                <ContactInfoItem
                  icon="call"
                  label="Teléfono"
                  actionLabel="Llamar"
                  actionHref="tel:+540000000000"
                >
                  <p>+54 000 0000-0000</p>
                </ContactInfoItem>
              </div>

              <div className="contact-whatsapp">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-whatsapp__button"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Escribir por WhatsApp
                </a>

                <p>Tiempo estimado de respuesta: menos de 10 minutos.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-cta">
          <div>
            <span className="section-eyebrow">Estamos cerca</span>
            <h2>Acercate o escribinos</h2>
            <p>
              Nuestro equipo está disponible para ayudarte con consultas,
              servicios farmacéuticos, obras sociales y atención personalizada.
            </p>
          </div>

          <div className="contact-cta__actions">
            <Button href="https://maps.google.com" target="_blank">
              Ver ubicación
            </Button>

            <Button href="https://wa.me/" target="_blank" variant="secondary">
              WhatsApp
            </Button>
          </div>
        </section>
      </main>

     
  );
};

export default Contact;