import "./NewsCard.css";
const NewsCard = ({
  category,
  icon = "local_pharmacy",
  title,
  description,
  date,
  href = "#",
  highlighted = false,
}) => {
  return (
    <article className={`news-card ${highlighted ? "news-card--highlighted" : ""}`}>
      {highlighted && (
        <span className="news-card__background-icon material-symbols-outlined">
          {icon}
        </span>
      )}

      <div className="news-card__body">
        <div className="news-card__top">
          <span className="news-card__category">{category}</span>

          {!highlighted && (
            <span className="material-symbols-outlined news-card__icon">
              {icon}
            </span>
          )}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="news-card__bottom">
        <small>{date}</small>
        <a href={href}>Leer más</a>
      </div>
    </article>
  );
};

export default NewsCard;