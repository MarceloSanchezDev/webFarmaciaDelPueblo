import { useEffect, useRef, useState } from 'react';

function CountUp({ end, prefix = '', suffix = '', label }) {
  const elementRef = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    let frameId;

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const startedAt = performance.now();
      const duration = 1100;
      const update = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setValue(Math.round(end * (1 - (1 - progress) ** 3)));

        if (progress < 1) frameId = requestAnimationFrame(update);
      };

      frameId = requestAnimationFrame(update);
      observer.unobserve(entry.target);

    }, { threshold: 0.4 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end]);

  return (
    <span ref={elementRef} aria-label={label || `${prefix}${end}${suffix}`}>
      {prefix}{value}{suffix}
    </span>
  );
}

export default CountUp;
