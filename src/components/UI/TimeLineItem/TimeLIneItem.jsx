import "./TimeLineItem.css";

const TimelineItem = ({
  icon,
  title,
  year,
  description,
  image,
  imageAlt,
  reverse = false,
}) => {
  return (
    <article className={`timeline-item ${reverse ? "timeline-item--reverse" : ""}`}>
      <div className="timeline-item__content">
        <div className="timeline-item__card">
          <span className="timeline-item__year">{year}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="timeline-item__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <div className="timeline-item__media">
        <img src={image} alt={imageAlt} />
      </div>
    </article>
  );
};

export default TimelineItem;