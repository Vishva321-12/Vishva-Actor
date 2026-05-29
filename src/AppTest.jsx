import React from 'react';
import NavrasHero from './components/NavrasHero';
import './styles/NavrasHero.css';

/**
 * NAVRAS HERO TEST PAGE
 * 
 * To test the Navras Hero component, temporarily update App.js to:
 * 
 * 1. Change the import in App.js:
 *    import AppTest from './AppTest';
 * 
 * 2. Or add this to your router:
 *    <Route path="/test-navras" element={<AppTest />} />
 * 
 * Then navigate to /test-navras to see the component in action.
 */

function AppTest() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <NavrasHero />
      
      {/* Content section to show scroll works */}
      <section style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#F5ECD7',
        fontFamily: "'Cormorant Garamond', serif",
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontFamily: "'Cinzel Decorative', serif",
          color: '#D4AF37',
          marginBottom: '30px',
          letterSpacing: '3px',
        }}>
          Welcome to Navras
        </h2>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '40px',
          opacity: 0.8,
        }}>
          This page demonstrates the Navras Hero animation component. Scroll down to see how it integrates with your content.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginTop: '60px',
        }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{
              background: 'rgba(212, 175, 55, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              padding: '40px',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                color: '#D4AF37',
                marginBottom: '10px',
              }}>
                Section {i}
              </h3>
              <p style={{ opacity: 0.7 }}>
                This is sample content to demonstrate how the hero component looks with your page layout.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AppTest;
