import { getWhatsappUrl, pharmacyContact } from '../../data/contactData';
import { healthInsurances, pharmacyServices } from '../../data/servicesData';
import './Services.css';

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="section-kicker">Servicios</span>

          <h1>Servicios farmacéuticos para el cuidado diario</h1>

          <p>
            En {pharmacyContact.name} ofrecemos atención cercana,
            asesoramiento profesional y servicios pensados para acompañar a la
            comunidad.
          </p>

          <div className="services-hero__actions">
            <a
              className="primary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>

            <a className="secondary-button" href="/contacto">
              Ver contacto y horarios
            </a>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {pharmacyServices.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {service.icon}
              </span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="insurance-section">
        <div className="insurance-card">
          <div>
            <span className="section-kicker">Cobertura</span>

            <h2>Obras sociales y coberturas</h2>

            <p>
              Trabajamos con distintas obras sociales, planes y coberturas. Te
              recomendamos consultar previamente por WhatsApp para confirmar
              documentación, receta, cobertura vigente y disponibilidad.
            </p>

            <div className="insurance-groups">
              {healthInsurances.map((insuranceGroup) => (
                <article className="insurance-group" key={insuranceGroup.group}>
                  <h3>{insuranceGroup.group}</h3>

                  <ul className="insurance-list">
                    {insuranceGroup.items.map((insurance) => (
                      <li key={insurance}>{insurance}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="insurance-action">
            <span className="material-symbols-outlined" aria-hidden="true">
              health_and_safety
            </span>

            <h3>¿Querés consultar tu cobertura?</h3>

            <p>
              Escribinos y te orientamos según tu receta, obra social o plan.
            </p>

            <a
              className="primary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Consultar cobertura
            </a>
          </div>
        </div>
      </section>

      <section className="services-note-section">
        <div className="services-note">
          <span className="material-symbols-outlined" aria-hidden="true">
            info
          </span>

          <div>
            <h2>Información importante</h2>

            <p>
              Algunos servicios pueden depender del horario, disponibilidad del
              personal, documentación presentada o convenios vigentes. Ante
              cualquier duda, recomendamos consultar previamente por WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;