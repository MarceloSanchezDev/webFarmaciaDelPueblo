import "./Comunity.css";

import SectionHeader from "../../components/UI/SectionHeader/SectionHeader";
import FeaturedNewsCard from "../../components/UI/FeautedNewsCard/FeaturedNewsCard";
import NewsCard from "../../components/UI/NewsCard/NewsCard";
import EventItem from "../../components/UI/EventItem/EventItem";

const newsItems = [
  {
    category: "Consejos de salud",
    icon: "local_pharmacy",
    title: "Cómo manejar mejor las alergias estacionales",
    description:
      "Con los cambios de estación pueden aparecer síntomas molestos. Te compartimos recomendaciones simples para cuidar tu salud.",
    date: "10 Oct, 2024",
  },
  {
    category: "Acciones locales",
    icon: "volunteer_activism",
    title: "Acompañamos nuevas actividades comunitarias",
    description:
      "Seguimos participando en iniciativas del barrio para promover hábitos saludables y cercanía con los vecinos.",
    date: "05 Oct, 2024",
    highlighted: true,
  },
];

const events = [
  {
    month: "Nov",
    day: "12",
    category: "Participación comunitaria",
    title: "Charla sobre hábitos saludables",
    description:
      "Un encuentro para conversar sobre alimentación, prevención y bienestar diario.",
    actionLabel: "Reservar",
    actionHref: "#",
  },
  {
    month: "Nov",
    day: "20",
    category: "Fecha importante",
    title: "Recordatorio para preparar medicación antes de feriados",
    description:
      "Te recomendamos revisar tus tratamientos y anticipar la compra de medicamentos indicados.",
    actionLabel: "Ver detalles",
    actionHref: "#",
    linkStyle: true,
  },
];

const Community = () => {
  return (
    

      <main className="community-page">
        <section className="community-hero">
          <SectionHeader
            eyebrow="Comunidad"
            title="Cuidando a nuestra comunidad"
            description="Conocé campañas de salud, acciones locales, fechas importantes y consejos simples de bienestar de Farmacia Del Pueblo."
          />
        </section>

        <section className="community-news-section">
          <div className="community-news-grid">
            <FeaturedNewsCard
              category="Campañas de salud"
              date="15 Oct, 2024"
              title="Semana de controles gratuitos de presión y glucosa"
              description="Te invitamos a participar de una nueva iniciativa de salud comunitaria. La detección temprana y el seguimiento son claves para cuidar el bienestar diario."
              image="/images/comunidad-campania.jpg"
              href="#"
            />

            {newsItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="events-section">
          <div className="events-section__header">
            <h2>
              <span className="material-symbols-outlined">calendar_month</span>
              Fechas importantes
            </h2>

            <a href="#">Ver todos los eventos</a>
          </div>

          <div className="events-list">
            {events.map((event) => (
              <EventItem key={event.title} {...event} />
            ))}
          </div>
        </section>

        <section className="community-cta">
          <div>
            <span className="section-eyebrow">Seguinos</span>
            <h2>También compartimos novedades en redes</h2>
            <p>
              Enterate de campañas, horarios especiales, consejos de salud y
              acciones de la farmacia en nuestra comunidad.
            </p>
          </div>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Seguir en Instagram
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </section>
      </main>

     
  );
};

export default Community;