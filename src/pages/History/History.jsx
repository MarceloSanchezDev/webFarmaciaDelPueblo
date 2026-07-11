import { getWhatsappUrl, pharmacyContact } from '../../data/contactData';
import { historyMilestones, historyValues } from '../../data/historyData';
import './History.css';

function History() {
  return (
    <main className="history-page">
      <section className="history-hero">
        <div className="history-hero__content">
          <span className="section-kicker">Nuestra historia</span>

          <h1>Una farmacia cercana, profesional y comprometida con su comunidad</h1>

          <p>
            {pharmacyContact.name} acompaña a sus clientes con atención humana,
            asesoramiento responsable y servicios pensados para el cuidado
            cotidiano de la salud.
          </p>

          <div className="history-hero__actions">
            <a
              className="primary-button"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>

            <a className="secondary-button" href="/servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section className="history-intro">
        <div className="history-intro__content">
          <div>
            <span className="section-kicker">Identidad</span>

            <h2>Atención de farmacia con sentido de cercanía</h2>
          </div>

          <p>
            En una farmacia, la experiencia del cliente no termina en la compra
            de un producto. También importa la orientación, la claridad, la
            disponibilidad y la confianza para hacer una consulta cuando se
            necesita.
          </p>
        </div>
      </section>

      <section className="history-timeline-section">
        <div className="history-timeline">
          {historyMilestones.map((item) => (
            <article className="history-timeline__item" key={item.title}>
              <span>{item.year}</span>

              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="history-values-section">
        <div className="history-values-header">
          <span className="section-kicker">Valores</span>
          <h2>Lo que guía nuestra atención</h2>
        </div>

        <div className="history-values-grid">
          {historyValues.map((value) => (
            <article className="history-value-card" key={value.title}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {value.icon}
              </span>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="history-cta-section">
        <div className="history-cta">
          <div>
            <span className="section-kicker">Contacto</span>

            <h2>¿Necesitás hacer una consulta?</h2>

            <p>
              Escribinos por WhatsApp para consultar disponibilidad, horarios,
              servicios u obras sociales.
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

export default History;