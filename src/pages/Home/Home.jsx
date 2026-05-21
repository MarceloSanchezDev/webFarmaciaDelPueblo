import "./Home.css";

import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Buttons/Buttons";
import SectionHeader from "../../components/UI/SectionHeader/SectionHeader";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";

const trustItems = [
  {
    icon: "history_edu",
    title: "100+ años",
    description:
      "Más de un siglo de atención cercana, confiable y comprometida con la comunidad.",
  },
  {
    icon: "favorite",
    title: "Atención personalizada",
    description:
      "Acompañamos a cada persona con escucha, paciencia y asesoramiento profesional.",
  },
  {
    icon: "medical_information",
    title: "Asesoramiento profesional",
    description:
      "Brindamos orientación farmacéutica clara, ética y responsable.",
  },
  {
    icon: "diversity_3",
    title: "Compromiso barrial",
    description:
      "Somos parte del día a día del barrio y de las familias que nos eligen.",
  },
];

const services = [
  {
    icon: "medical_services",
    title: "Atención farmacéutica",
  },
  {
    icon: "health_and_safety",
    title: "Obras sociales",
  },
  {
    icon: "vaccines",
    title: "Aplicación de inyectables",
  },
  {
    icon: "monitor_heart",
    title: "Control de presión",
  },
  {
    icon: "support_agent",
    title: "Asesoramiento profesional",
  },
  {
    icon: "spa",
    title: "Perfumería y bienestar",
  },
  {
    icon: "chat",
    title: "Atención por WhatsApp",
  },
];

const communityItems = [
  {
    title: "Campañas de salud",
    description: "Acciones para promover el cuidado y la prevención.",
  },
  {
    title: "Fechas especiales",
    description: "Momentos compartidos con la comunidad.",
  },
  {
    title: "Atención cotidiana",
    description: "El vínculo diario con vecinos y familias.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="home">
        <section className="hero">
          <div className="hero__overlay"></div>

          <div className="hero__content">
            <span className="hero__badge">
              <span className="material-symbols-outlined">local_pharmacy</span>
              Desde 1924
            </span>

            <h1>Más de un siglo brindando atención cercana y de calidad</h1>

            <p>
              Una farmacia de barrio con historia, confianza y compromiso.
              Acompañamos a cada familia con atención profesional, humana y
              personalizada.
            </p>

            <div className="hero__actions">
              <Button href="#origen">Conocé nuestra historia</Button>
              <Button href="#ubicacion" variant="secondary">
                Cómo llegar
              </Button>
              <Button href="#contacto" variant="outline">
                Contactanos
              </Button>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionHeader
            eyebrow="Nuestra esencia"
            title="Confianza, cercanía y compromiso"
            description="Nuestra atención va más allá de entregar medicamentos. Construimos vínculos basados en la confianza, la ética y el cuidado humano."
          />

          <div className="cards-grid cards-grid--four">
            {trustItems.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="origin-section" id="origen">
          <div className="origin-section__content">
            <span className="section-eyebrow">El origen</span>

            <h2>
              “Nacimos con la idea de construir mucho más que una farmacia”
            </h2>

            <p>
              Desde nuestros comienzos, Farmacia Del Pueblo fue pensada como un
              espacio cercano para acompañar a cada familia de nuestra
              comunidad. Nuestra historia creció junto al barrio, manteniendo
              siempre los mismos valores: cercanía, ética, confianza y atención
              humana.
            </p>

            <Button href="/historia">Leer nuestra historia</Button>
          </div>

          <div className="origin-section__image">
            <div className="origin-section__image-card">
              <span className="material-symbols-outlined">history_edu</span>
              <strong>Est. 1924</strong>
              <p>Historia, barrio y comunidad.</p>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionHeader
            eyebrow="Servicios"
            title="Servicios farmacéuticos para tu bienestar"
            description="Brindamos atención profesional, asesoramiento personalizado y servicios pensados para acompañarte en tu salud diaria."
          />

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </section>

        <section className="location-section" id="ubicacion">
          <div className="location-section__info">
            <span className="section-eyebrow">Dónde estamos</span>

            <h2>Siempre cerca de la comunidad</h2>

            <p>
              Nos encontramos en una ubicación estratégica, conectada con el
              barrio y pensada para que puedas acercarte fácilmente.
            </p>

            <div className="location-section__actions">
              <Button href="https://maps.google.com" target="_blank">
                Ver en Google Maps
              </Button>
              <Button href="https://wa.me/" variant="secondary" target="_blank">
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          <div className="location-section__map">
            <span className="material-symbols-outlined">map</span>
            <p>Mapa integrado</p>
          </div>
        </section>

        <section className="home-section community-section">
          <SectionHeader
            eyebrow="Comunidad"
            title="Historias y momentos del barrio"
            description="Compartimos campañas, fechas especiales, consejos simples de salud y acciones locales."
          />

          <div className="community-grid">
            {communityItems.map((item) => (
              <article className="community-card" key={item.title}>
                <div className="community-card__image"></div>
                <div className="community-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;