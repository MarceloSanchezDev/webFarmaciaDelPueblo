import "./Services.css";
import Button from "../../components/UI/Buttons/Buttons";
import SectionHeader from "../../components/UI/SectionHeader/SectionHeader";
import ServiceDetailCard from "../../components/UI/ServiceDetailCard/ServiceDetailCard";

const services = [
  {
    icon: "local_pharmacy",
    title: "Atención farmacéutica",
    description:
      "Brindamos asesoramiento profesional sobre medicamentos, indicaciones, interacciones y uso responsable de cada tratamiento.",
  },
  {
    icon: "health_and_safety",
    title: "Obras sociales",
    description:
      "Trabajamos con distintas obras sociales y planes médicos para facilitar el acceso de nuestros vecinos a sus medicamentos.",
  },
  {
    icon: "monitor_heart",
    title: "Control de presión",
    description:
      "Realizamos controles de presión arterial en un entorno tranquilo, cercano y profesional para acompañar el cuidado diario de la salud.",
  },
  {
    icon: "spa",
    title: "Dermocosmética",
    description:
      "Ofrecemos asesoramiento en productos dermatológicos, cuidado de la piel, protección diaria y bienestar personal.",
  },
  {
    icon: "vaccines",
    title: "Aplicaciones e inyectables",
    description:
      "Aplicación segura y profesional de inyectables indicados, realizada con responsabilidad y cuidado por personal capacitado.",
  },
  {
    icon: "support_agent",
    title: "Asesoramiento integral",
    description:
      "Nuestro equipo está disponible para orientar, escuchar consultas y acompañar a cada persona con atención humana y personalizada.",
  },
];

const Services = () => {
  return (
    
      <main className="services-page">
        <section className="services-hero">
          <div className="services-hero__content">
            <span className="services-hero__badge">Servicios</span>

            <h1>Nuestros servicios</h1>

            <p>
              Combinamos la tradición de una farmacia de barrio con atención
              profesional moderna. Ofrecemos servicios pensados para acompañar
              las necesidades de nuestra comunidad.
            </p>
          </div>
        </section>

        <section className="services-section">
          <SectionHeader
            eyebrow="Atención profesional"
            title="Servicios para cuidar tu salud"
            description="En Farmacia Del Pueblo brindamos atención cercana, asesoramiento responsable y soluciones cotidianas para el bienestar de cada familia."
          />

          <div className="services-detail-grid">
            {services.map((service) => (
              <ServiceDetailCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}

            <article className="service-whatsapp-card">
              <div className="service-whatsapp-card__icon">
                <span className="material-symbols-outlined">forum</span>
              </div>

              <h3>Consultas rápidas</h3>

              <p>
                ¿Tenés una pregunta sobre nuestros servicios? Escribinos por
                WhatsApp y nuestro equipo te responderá con atención cercana.
              </p>

              <Button href="https://wa.me/" variant="secondary" target="_blank">
                Escribir por WhatsApp
              </Button>
            </article>
          </div>
        </section>

        <section className="services-info-section">
          <div className="services-info-section__content">
            <span className="section-eyebrow">Cercanía y confianza</span>

            <h2>Una farmacia pensada para acompañarte</h2>

            <p>
              Nuestro objetivo es que cada persona se sienta escuchada,
              acompañada y bien orientada. Por eso mantenemos una atención
              personalizada, ética y comprometida con el barrio.
            </p>
          </div>

          <div className="services-info-section__list">
            <div>
              <span className="material-symbols-outlined">verified_user</span>
              <p>Atención responsable y profesional</p>
            </div>

            <div>
              <span className="material-symbols-outlined">diversity_3</span>
              <p>Compromiso con la comunidad</p>
            </div>

            <div>
              <span className="material-symbols-outlined">favorite</span>
              <p>Trato humano y personalizado</p>
            </div>
          </div>
        </section>
      </main>


  );
};

export default Services;