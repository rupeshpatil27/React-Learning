import React, { useEffect } from 'react';

const GlowingCard = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;
        card.style.setProperty('--x', `${xPercent}%`);
        card.style.setProperty('--y', `${yPercent}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--x', '50%');
        card.style.setProperty('--y', '50%');
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="card">
      <div className="glow"></div>
      <h1>01</h1>
      <p>Move your mouse cursor over the card.</p>
    </div>
  );
};

export default GlowingCard;
