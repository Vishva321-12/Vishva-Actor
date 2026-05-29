import React, { useEffect, useState } from 'react';
import '../styles/NavrasHero.css';

const NavrasHero = () => {
  const [showNameCard, setShowNameCard] = useState(false);
  const [showActor, setShowActor] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  // 9 Navarasa emotions and their representations
  const rasas = [
    { id: 1, emotion: 'Raudra', name: 'Anger' },
    { id: 2, emotion: 'Hasya', name: 'Laughter' },
    { id: 3, emotion: 'Karuna', name: 'Compassion' },
    { id: 4, emotion: 'Adbhuta', name: 'Wonder' },
    { id: 5, emotion: 'Shringara', name: 'Love' },
    { id: 6, emotion: 'Veera', name: 'Courage' },
    { id: 7, emotion: 'Bhayanaka', name: 'Fear' },
    { id: 8, emotion: 'Bibhatsa', name: 'Disgust' },
    { id: 9, emotion: 'Shanta', name: 'Peace' },
  ];

  useEffect(() => {
    // Timeline for animations
    const nameCardTimer = setTimeout(() => {
      setShowNameCard(true);
    }, 1600); // After images finish fanning out

    const actorTimer = setTimeout(() => {
      setShowActor(true);
    }, 2400); // 800ms after name card appears

    return () => {
      clearTimeout(nameCardTimer);
      clearTimeout(actorTimer);
    };
  }, []);

  // Typewriter effect for "Actor"
  useEffect(() => {
    if (!showActor) return;

    const text = 'ACTOR';
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        // Mark animation as complete
        setTimeout(() => {
          setAnimationComplete(true);
          document.body.classList.add('animation-done');
        }, 400);
      }
    }, 120); // Character typing speed

    return () => clearInterval(typeInterval);
  }, [showActor]);

  return (
    <section className="navras-hero">
      {/* Background gradient */}
      <div className="navras-hero__background"></div>

      {/* 9 Rasa Images Fan Container */}
      <div className="navras-hero__images-container">
        {rasas.map((rasa, index) => (
          <div
            key={rasa.id}
            className={`navras-hero__rasa-image rasa-img rasa-img-${index + 1}`}
            style={{
              '--image-index': index,
            }}
          >
            {/* Placeholder Image */}
            <div className="rasa-image-placeholder">
              <div className="placeholder-number">{rasa.id}</div>
              <div className="placeholder-emotion">{rasa.emotion}</div>
            </div>
            <div className="rasa-image-label">{rasa.name}</div>
          </div>
        ))}
      </div>

      {/* Name Card */}
      <div className={`navras-hero__name-card ${showNameCard ? 'is-visible' : ''}`}>
        <h1 className="navras-hero__name">NAVRAS</h1>
      </div>

      {/* Actor Text with Typewriter */}
      {showActor && (
        <div className="navras-hero__actor-text">
          <span className="actor-text-content">{displayedText}</span>
          <span className={`cursor ${displayedText.length === 5 ? 'cursor-done' : ''}`}></span>
        </div>
      )}

      {/* Scroll Indicator (appears after animation complete) */}
      {animationComplete && (
        <div className="navras-hero__scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll to explore</div>
        </div>
      )}
    </section>
  );
};

export default NavrasHero;
