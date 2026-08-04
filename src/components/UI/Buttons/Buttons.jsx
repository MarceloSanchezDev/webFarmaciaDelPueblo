import { Link } from 'react-router-dom';
import './Buttons.css';

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

  if (href.startsWith('/')) {
    return <Link to={href} className={className}>{children}</Link>;
  }

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
