import "./EventItem.css";
const EventItem = ({
  month,
  day,
  category,
  title,
  description,
  actionLabel,
  actionHref = "#",
  linkStyle = false,
}) => {
  return (
    <article className="event-item">
      <div className="event-item__date">
        <span>{month}</span>
        <strong>{day}</strong>
      </div>

      <div className="event-item__content">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="event-item__action">
        {linkStyle ? (
          <a href={actionHref} className="event-item__link">
            {actionLabel}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        ) : (
          <a href={actionHref} className="event-item__button">
            {actionLabel}
          </a>
        )}
      </div>
    </article>
  );
};

export default EventItem;