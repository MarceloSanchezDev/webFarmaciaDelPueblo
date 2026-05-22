import "./FeaturedNewsCard.css";
const FeaturedNewsCard = ({
  category,
  date,
  title,
  description,
  image,
  href = "#",
}) => {
  return (
    <article className="featured-news-card">
      <div
        className="featured-news-card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="featured-news-card__overlay"></div>

      <div className="featured-news-card__content">
        <div className="featured-news-card__meta">
          <span>{category}</span>
          <small>{date}</small>
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

        <a href={href}>
          Leer nota completa
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </article>
  );
};

export default FeaturedNewsCard;