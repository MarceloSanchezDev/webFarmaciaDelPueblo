import './SpotlightCard.css';

function SpotlightCard({ children }) {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const { left, top } = card.getBoundingClientRect();

    card.style.setProperty('--spotlight-x', `${event.clientX - left}px`);
    card.style.setProperty('--spotlight-y', `${event.clientY - top}px`);
  };

  return (
    <div className="spotlight-card" onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}

export default SpotlightCard;
