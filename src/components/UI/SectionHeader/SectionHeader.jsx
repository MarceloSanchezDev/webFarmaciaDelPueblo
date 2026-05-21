import "./SectionHeader.css";
const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <div className="section-header">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;