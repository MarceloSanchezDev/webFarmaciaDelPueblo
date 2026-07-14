import { getWhatsappUrl, pharmacyContact } from '../../data/contactData';
import { historyMilestones, historyValues } from '../../data/historyData';
import alisa from '../../assets/alisa.jpeg';
import './History.css';

function History() {
  return (
    <main className="history-page">
      <section className="history-tribute-section">
        <div className="history-tribute">
          <div className="history-tribute__content">
            <span className="section-kicker">Homenaje</span>

            <h2>Siempre presente en nuestra historia</h2>

            <blockquote>
              “En honor a nuestra querida mamá, abuela y eterna farmacéutica, Alina.
              Su dedicación, cariño y manera de cuidar a cada persona que entraba a
              la farmacia siguen presentes en todo lo que hacemos. Siempre presente
              en nuestra memoria y en el camino que continuamos.”
            </blockquote>
          </div>

          <div className="history-tribute__image">
            <img
              src={alisa}
              alt="Homenaje a Alina, farmacéutica de Farmacia Del Pueblo"
            />
          </div>
        </div>
      </section>
      <section className="history-hero">
        <div className="history-hero__content">
          <span className="section-kicker">Nuestra historia</span>

          <h1>Más de 100 años siendo parte de la vida del barrio</h1>

          <p>
            {pharmacyContact.name} no es solo una farmacia. Es una historia
            familiar, profesional y barrial que comenzó en 1922 y continúa hasta
            hoy acompañando a distintas generaciones.
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

            <h2>Una farmacia con memoria, oficio y continuidad familiar</h2>
          </div>

          <p>
            Desde sus primeros años como botica hasta su consolidación como
            farmacia de referencia, Farmacia Del Pueblo atravesó cambios,
            mudanzas, generaciones y nuevas etapas, manteniendo siempre su
            vínculo con la comunidad.
          </p>
        </div>
      </section>

      <section className="history-timeline-section">
        <div className="history-section-header">
          <span className="section-kicker">Línea de tiempo</span>
          <h2>Los momentos que construyeron nuestra historia</h2>
        </div>

        <div className="history-timeline">
          {historyMilestones.map((item) => (
            <article
              className="history-timeline__item"
              key={`${item.year}-${item.title}`}
            >
              <div className="history-timeline__marker">
                <span>{item.year}</span>
              </div>

              <div className="history-timeline__content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {item.image && (
                  <figure className="history-timeline__figure">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      loading="lazy"
                    />
                  </figure>
                )}

                {item.details && <p>{item.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="history-values-section">
        <div className="history-section-header">
          <span className="section-kicker">Valores</span>
          <h2>Lo que representa Farmacia Del Pueblo</h2>
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
            <span className="section-kicker">Presente</span>

            <h2>Una farmacia histórica, activa y cercana</h2>

            <p>
              Hoy seguimos acompañando al barrio con atención farmacéutica,
              servicios, asesoramiento y canales de consulta directa.
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