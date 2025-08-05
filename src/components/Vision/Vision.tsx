import { useState, useRef, useEffect } from 'react';
import './Vision.css';

const photos = [
  '../../../src/assets/journey/photo1.webp',
  '../../../src/assets/journey/photo2.webp',
  '../../../src/assets/journey/photo3.webp',
  '../../../src/assets/journey/photo4.webp',
  '../../../src/assets/journey/photo5.webp',
  '../../../src/assets/journey/photo6.webp',
  '../../../src/assets/journey/photo7.webp',
  '../../../src/assets/journey/photo8.webp',
  '../../../src/assets/journey/photo9.webp',
  '../../../src/assets/journey/photo10.webp'
];

const Vision = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const stop = () => {
      isDown = false;
      el.classList.remove('dragging');
    };

    const onTouchStart = (e: TouchEvent) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startX) * 2.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', stop);
    el.addEventListener('mouseleave', stop);
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', stop);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', stop);
      el.removeEventListener('mouseleave', stop);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', stop);
    };
  }, []);

  return (
    <section className="vision-section" id="vision">
      <div className="vision-content">
        <div className="vision-columns">
        <div className="vision-title">
        <h2>My Journey</h2>
        </div>
          <div className="vision-text">
            <div className="vision-quote">
              <p>
                “Only art and science make us suspect the existence of life to a higher level.”
                <br />
                <span>— Ludwig van Beethoven</span>
              </p>
            </div>
            <p className="vision-description">
              I came to frontend not through career planning, but searching for harmony. From teaching to tech, I discovered how code lets me shape ideas that look and feel intentional. My tools grew — React, Sass — but my instinct grew sharper: balancing logic and beauty with detail.
            </p>
          </div>
        </div>
        <div className="photo-strip" ref={carouselRef}>
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Vision ${i + 1}`}
              onClick={() => setSelectedPhoto(src)}
            />
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <img src={selectedPhoto} alt="Zoomed" />
          <span className="close-button">×</span>
        </div>
      )}
    </section>
  );
};

export default Vision;
