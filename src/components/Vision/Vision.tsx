import { useState } from 'react';
import './Vision.css';

const photos = [
  '/src/assets/journey/photo1.webp',
  '/src/assets/journey/photo2.webp',
  '/src/assets/journey/photo3.webp',
  '/src/assets/journey/photo4.webp',
  '/src/assets/journey/photo5.webp',
  '/src/assets/journey/photo6.webp',
  '/src/assets/journey/photo7.webp',
  '/src/assets/journey/photo8.webp',
  '/src/assets/journey/photo9.webp',
  '/src/assets/journey/photo10.webp'
];

const Vision = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
        <div className="photo-strip">
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
