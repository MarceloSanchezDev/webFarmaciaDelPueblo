import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.01,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'reveal--visible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
