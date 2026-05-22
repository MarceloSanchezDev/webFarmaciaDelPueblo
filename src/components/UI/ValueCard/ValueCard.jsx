import "./ValueCard.css";

const ValueCard = ({ icon, title, description, featured = false }) => {
  return (
    <article className={`value-card ${featured ? "value-card--featured" : ""}`}>
      <div className="value-card__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ValueCard;