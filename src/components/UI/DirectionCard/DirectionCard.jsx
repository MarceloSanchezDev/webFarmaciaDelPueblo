import "./DirectionCard.css";
const DirectionCard = ({ icon, title, items = [] }) => {
  return (
    <article className="direction-card">
      <div className="direction-card__header">
        <span className="material-symbols-outlined">{icon}</span>
        <h3>{title}</h3>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="material-symbols-outlined">arrow_right</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DirectionCard;