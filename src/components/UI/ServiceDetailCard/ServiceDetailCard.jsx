import "./ServiceDetailCard.css";
const ServiceDetailCard = ({ icon, title, description }) => {
  return (
    <article className="service-detail-card">
      <div className="service-detail-card__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
};

export default ServiceDetailCard;