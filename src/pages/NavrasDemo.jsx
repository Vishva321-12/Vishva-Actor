import React from 'react';
import NavrasHero from '../components/NavrasHero';
import '../styles/NavrasDemo.css';

const NavrasDemo = () => {
  return (
    <div className="navras-demo">
      {/* Hero Section */}
      <NavrasHero />

      {/* Content Section Below */}
      <section className="navras-content">
        <div className="content-wrapper">
          <h2>The Nine Emotions</h2>
          <p>
            Navarasa represents the nine principal emotions or sentiments in classical Indian art and culture.
            Each emotion carries its own unique expression and energy.
          </p>
          <div className="emotion-grid">
            <div className="emotion-card">
              <h3>Raudra</h3>
              <p>Anger & Fury</p>
            </div>
            <div className="emotion-card">
              <h3>Hasya</h3>
              <p>Laughter & Joy</p>
            </div>
            <div className="emotion-card">
              <h3>Karuna</h3>
              <p>Compassion & Sorrow</p>
            </div>
            <div className="emotion-card">
              <h3>Adbhuta</h3>
              <p>Wonder & Awe</p>
            </div>
            <div className="emotion-card">
              <h3>Shringara</h3>
              <p>Love & Romance</p>
            </div>
            <div className="emotion-card">
              <h3>Veera</h3>
              <p>Courage & Valor</p>
            </div>
            <div className="emotion-card">
              <h3>Bhayanaka</h3>
              <p>Fear & Terror</p>
            </div>
            <div className="emotion-card">
              <h3>Bibhatsa</h3>
              <p>Disgust & Aversion</p>
            </div>
            <div className="emotion-card">
              <h3>Shanta</h3>
              <p>Peace & Serenity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavrasDemo;
