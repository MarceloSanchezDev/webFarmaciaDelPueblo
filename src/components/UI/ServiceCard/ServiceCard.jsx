import "./ServiceCard.css";

const ServiceCard = ({ icon, title }) => {
  return (
    <article className="service-card">
      <span className="material-symbols-outlined">{icon}</span>
      <h3>{title}</h3>
    </article>
  );
};

export default ServiceCard;