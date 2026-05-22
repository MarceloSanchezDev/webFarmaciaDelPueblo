import "./ContactInfoItem.css";
const ContactInfoItem = ({
  icon,
  label,
  children,
  actionLabel,
  actionHref,
}) => {
  return (
    <div className="contact-info-item">
      <div className="contact-info-item__main">
        <div className="contact-info-item__icon">
          <span className="material-symbols-outlined">{icon}</span>
        </div>

        <div className="contact-info-item__content">
          <h3>{label}</h3>
          {children}
        </div>
      </div>

      {actionLabel && actionHref && (
        <a
          href={actionHref}
          target="_blank"
          rel="noreferrer"
          className="contact-info-item__action"
        >
          <span className="material-symbols-outlined">
            {icon === "location_on" ? "map" : "phone_in_talk"}
          </span>
          {actionLabel}
        </a>
      )}
    </div>
  );
};

export default ContactInfoItem;