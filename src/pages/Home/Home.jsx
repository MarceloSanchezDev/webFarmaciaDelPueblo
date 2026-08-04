import './Home.css';
import Button from '../../components/UI/Buttons/Buttons';
import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';
import InfoCard from '../../components/UI/InfoCard/InfoCard';
import ServiceCard from '../../components/UI/ServiceCard/ServiceCard';
import {
  getFullAddress,
  getMapsUrl,
  getWhatsappUrl,
  pharmacyContact,
} from '../../data/contactData';
import logo from '../../assets/logot.png';
import communityHealthImage from '../../assets/logo.png';
import communityRemodelingImage from '../../assets/remodelacion.jpeg';
import communityDailyCareImage from '../../assets/segunda.jpeg';
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
    description: "Orientación profesional para consultas sobre medicamentos, productos y disponibilidad.",
    items: ["Medicamentos recetados y de venta libre", "Consulta de disponibilidad", "Asesoramiento farmacéutico"],
  },
  {
    icon: "health_and_safety",
    title: "Obras sociales",
    description: "Trabajamos con distintas coberturas. Antes de acercarte, consultanos para confirmar la documentación, receta y cobertura vigente.",
    items: ["PAMI y PAMI 100%", "IOMA", "Unión Personal, SUTEBA y UPCN"],
  },
  {
    icon: "vaccines",
    title: "Aplicación de inyectables",
    description: "Consultá previamente por WhatsApp para confirmar horarios de atención, disponibilidad del servicio y la documentación necesaria.",
  },
  {
    icon: "monitor_heart",
    title: "Control de presión",
    description: "Realizamos control de presión como parte de nuestra atención diaria. Recomendamos consultar previamente por horarios y disponibilidad.",
  },
  {
    icon: "support_agent",
    title: "Asesoramiento profesional",
    description: "Respondemos tus consultas de manera clara y responsable, para orientarte sobre productos, servicios y cuidados de uso cotidiano.",
  },
  {
    icon: "spa",
    title: "Perfumería y bienestar",
    description: "Encontrá productos de higiene personal, cuidado corporal y artículos de uso diario para toda la familia.",
  },
  {
    icon: "chat",
    title: "Atención por WhatsApp",
    description: "Escribinos para consultar disponibilidad, horarios, servicios u obras sociales antes de visitar la farmacia.",
  },
];

const communityItems = [
  {
    title: "Campañas de salud",
    description: "Acciones para promover el cuidado y la prevención.",
    image: communityHealthImage,
    imageAlt: 'Logo de Farmacia Del Pueblo',
  },
  {
    title: "Fechas especiales",
    description: "Momentos compartidos con la comunidad.",
    image: communityRemodelingImage,
    imageAlt: 'Remodelación de Farmacia Del Pueblo',
  },
  {
    title: "Atención cotidiana",
    description: "El vínculo diario con vecinos y familias.",
    image: communityDailyCareImage,
    imageAlt: 'Atención cotidiana en Farmacia Del Pueblo',
  },
];

const Home = () => {
  return (
    <>
      <main className="home">
        <section className="hero">
          <div className="hero__overlay"></div>

          <div className="hero__content">
            <span className="hero__badge">
              <img className="logospan" src={logo} alt="Logo de Farmacia Del Pueblo" />
              Desde 1922
            </span>

            <h1>Más de un siglo brindando atención cercana y de calidad</h1>

            <p>
              Una farmacia de barrio con historia, confianza y compromiso.
              Acompañamos a cada familia con atención profesional, humana y
              personalizada.
            </p>

            <div className="hero__actions">
              <Button href="/servicios">Ver servicios</Button>
              <Button href={getMapsUrl()} variant="secondary" target="_blank">
                Cómo llegar
              </Button>
              <Button href={getWhatsappUrl()} variant="outline" target="_blank">
                Contactanos
              </Button>
            </div>

            <ul className="hero__details" aria-label="Información rápida">
              <li>
                <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                {getFullAddress()}
              </li>
              <li>
                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                Lun. a vie. 09:00–13:00 y 16:30–21:00
              </li>
            </ul>
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
              <strong>Desde 1922</strong>
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
                description={service.description}
                items={service.items}
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
              <Button href={getMapsUrl()} target="_blank">
                Ver en Google Maps
              </Button>
              <Button href={getWhatsappUrl()} variant="secondary" target="_blank">
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          <div className="home-location__map-embed">
  <iframe
    title={`Ubicación de ${pharmacyContact.name}`}
    src={pharmacyContact.mapsEmbedUrl}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
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
                <img
                  className="community-card__image"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                />
                <div className="community-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>


      </main>
    </>
  );
};

export default Home;
