import "./History.css";

import SectionHeader from "../../components/UI/SectionHeader/SectionHeader";
import TimelineItem from "../../components/UI/TimeLineItem/TimeLIneItem";
import ValueCard from "../../components/UI/ValueCard/ValueCard";
import Button from "../../components/UI/Buttons/Buttons";

const timelineItems = [
  {
    icon: "local_pharmacy",
    title: "La fundación",
    year: "1924",
    description:
      "Farmacia Del Pueblo nació como una farmacia de barrio con una idea clara: brindar acceso cercano a la salud, acompañando a las familias con atención profesional, humana y confiable.",
    image: "/images/historia-fundacion.jpg",
    imageAlt: "Antigua farmacia de barrio en sus primeros años",
  },
  {
    icon: "medical_services",
    title: "Crecimiento junto al barrio",
    year: "Crecimiento",
    description:
      "Con el paso del tiempo, la farmacia fue creciendo junto a sus vecinos. Nuevos servicios, mayor asesoramiento y una relación cada vez más cercana consolidaron su lugar dentro de la comunidad.",
    image: "/images/historia-crecimiento.jpg",
    imageAlt: "Farmacéutico atendiendo a un vecino en el mostrador",
    reverse: true,
  },
  {
    icon: "volunteer_activism",
    title: "Evolución del servicio",
    year: "Actualidad",
    description:
      "Hoy combinamos la experiencia de más de un siglo con herramientas modernas, manteniendo intacto aquello que nos representa: la atención cercana, ética y personalizada.",
    image: "/images/historia-evolucion.jpg",
    imageAlt: "Farmacia moderna con atención profesional",
  },
];

const values = [
  {
    icon: "handshake",
    title: "Cercanía y atención humana",
    description:
      "Creemos que la salud también se cuida desde el trato. Por eso escuchamos, acompañamos y brindamos una atención personalizada a cada persona.",
    featured: true,
  },
  {
    icon: "verified_user",
    title: "Confianza",
    description:
      "Generaciones de familias nos eligieron por nuestra responsabilidad, discreción y compromiso profesional.",
  },
  {
    icon: "balance",
    title: "Ética profesional",
    description:
      "Priorizamos siempre el bienestar de las personas, brindando asesoramiento responsable y claro.",
  },
];

const History = () => {
  return (


      <main className="history-page">
        <section className="history-hero">
          <div className="history-hero__decor history-hero__decor--right"></div>
          <div className="history-hero__decor history-hero__decor--left"></div>

          <div className="history-hero__content">
            <span className="history-hero__badge">Nuestra historia</span>

            <h1>Creciendo todos los días con nuestros vecinos.</h1>

            <p>
              Más de un siglo de confianza, atención cercana y compromiso con la
              comunidad. Nuestra historia está unida al crecimiento del barrio y
              de las familias que nos acompañan.
            </p>
          </div>
        </section>

        <section className="history-section">
          <SectionHeader
            eyebrow="Línea de tiempo"
            title="Un recorrido por nuestra historia"
            description="Desde nuestros primeros años hasta la actualidad, cada etapa refleja nuestra vocación de servicio y nuestro vínculo con la comunidad."
          />

          <div className="timeline">
            {timelineItems.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="philosophy-section">
          <SectionHeader
            eyebrow="Filosofía"
            title="Los valores que nos siguen guiando"
            description="Los mismos principios que impulsaron nuestros comienzos continúan marcando nuestro camino hacia el futuro."
          />

          <div className="values-grid">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}

            <article className="anniversary-card">
              <h3>100 años de cuidado</h3>
              <p>
                Estamos orgullosos de nuestra historia y seguimos comprometidos
                con el futuro de la salud comunitaria.
              </p>

              <span>1924 - 2024</span>
            </article>
          </div>
        </section>

        <section className="history-cta">
          <div>
            <span className="section-eyebrow">Seguimos cerca</span>
            <h2>Queremos acompañarte como siempre</h2>
            <p>
              Conocé nuestros servicios, acercate a la farmacia o escribinos por
              WhatsApp para recibir atención personalizada.
            </p>
          </div>

          <div className="history-cta__actions">
            <Button href="/servicios">Ver servicios</Button>
            <Button href="/contacto" variant="secondary">
              Ubicación y contacto
            </Button>
          </div>
        </section>
      </main>

      
  );
};

export default History;