import "./Buttons.css";
const Button = ({
  href = "#",
  children,
  variant = "primary",
  target,
  type = "link",
}) => {
  const className = `button button--${variant}`;

  if (type === "button") {
    return <button className={className}>{children}</button>;
  }

  return (
    <a href={href} className={className} target={target} rel="noreferrer">
      {children}
    </a>
  );
};

export default Button;