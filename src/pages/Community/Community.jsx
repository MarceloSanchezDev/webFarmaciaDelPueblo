import { getWhatsappUrl, pharmacyContact } from '../../data/contactData';
import { communityActions, communityTips } from '../../data/communityData';
import './Community.css';

function Community() {
  return (
    <main className="community-page">
      <section className="community-hero">
        <div className="community-hero__content">
          <span className="section-kicker">Comunidad</span>

          <h1>Una farmacia que acompaña la vida diaria del barrio</h1>

          <p>
            En {pharmacyContact.name} creemos que la atención farmacéutica
            también implica escuchar, orientar y estar cerca de quienes confían
            en nosotros.
          </p>

          <div className="community-hero__actions">
            <a
              className="primary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Hacer una consulta
            </a>

            <a className="secondary-button" href="/contacto">
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      <section className="community-actions-section">
        <div className="community-actions-header">
          <span className="section-kicker">Acompañamiento</span>
          <h2>Cómo trabajamos con nuestra comunidad</h2>
        </div>

        <div className="community-actions-grid">
          {communityActions.map((item) => (
            <article className="community-card" key={item.title}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {item.icon}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="community-tips-section">
        <div className="community-tips-card">
          <div>
            <span className="section-kicker">Consejos útiles</span>

            <h2>Buenas prácticas para el cuidado de la salud</h2>

            <p>
              Estos consejos son orientativos y no reemplazan la consulta
              médica o farmacéutica profesional.
            </p>
          </div>

          <ul className="community-tips-list">
            {communityTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="community-cta-section">
        <div className="community-cta">
          <div>
            <span className="section-kicker">Consultas</span>

            <h2>¿Tenés dudas sobre un producto o servicio?</h2>

            <p>
              Escribinos por WhatsApp y te orientamos según disponibilidad,
              horarios y tipo de consulta.
            </p>
          </div>

          <a
            className="primary-button"
            href={getWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default Community;