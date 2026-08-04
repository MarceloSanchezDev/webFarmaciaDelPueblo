import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, items = [] }) => {
  return (
    <article className="home-service-card">
      <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {items.length > 0 && (
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </article>
  );
};

export default ServiceCard;
