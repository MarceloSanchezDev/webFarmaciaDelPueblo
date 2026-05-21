import "./InfoCard.css";
const InfoCard = ({ icon, title, description }) => {
  return (
    <article className="info-card">
      <div className="info-card__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default InfoCard;