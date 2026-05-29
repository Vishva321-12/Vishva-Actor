# Navras Hero Component - Integration Guide

## Overview

The Navras Hero component is a fully responsive, animated hero section featuring:
- 9 animated Navaras emotion images fanning out from center
- Name card entrance animation
- Typewriter effect for "ACTOR" text
- Scroll indicator
- Full mobile responsiveness

## Files Created

1. **`src/components/NavrasHero.jsx`** - Main React component
2. **`src/styles/NavrasHero.css`** - All animations and styling
3. **`src/pages/NavrasDemo.jsx`** - Demo page template
4. **`src/styles/NavrasDemo.css`** - Demo page styling

## Installation & Setup

### 1. Import the Component

In your main App.js or desired page:

```jsx
import NavrasHero from './components/NavrasHero';
import './styles/NavrasHero.css';

function App() {
  return (
    <div className="App">
      <NavrasHero />
      {/* Other content */}
    </div>
  );
}
```

### 2. Use the Demo Page

To see the full demo with content section:

```jsx
import NavrasDemo from './pages/NavrasDemo';

// In your routing or main render:
<Route path="/navras" element={<NavrasDemo />} />
```

## Component Features

### Animation Timeline

| Phase | Timing | Element | Action |
|-------|--------|---------|--------|
| 1 | 0-1300ms | 9 Rasa Images | Fan out from center with spring easing |
| 2 | 1600ms | Name Card | Fade + slide up "NAVRAS" |
| 3 | 2400ms | Actor Text | Typewriter effect "ACTOR" |
| 4 | 3200ms+ | Scroll Indicator | Fade in with bounce animation |

### Animation Hooks

After all animations complete, a `.animation-done` class is added to the `<body>` element:

```javascript
// Hook into animation completion
document.addEventListener('animationend', (e) => {
  if (document.body.classList.contains('animation-done')) {
    // Trigger next sequence or interactions
  }
});
```

Or use CSS:

```css
body.animation-done {
  --animation-state: complete;
}
```

## Customization

### Changing Colors

Edit the CSS variables in `NavrasHero.css`:

```css
:root {
  --navras-black: #0A0A0A;
  --navras-charcoal: #1A1A1A;
  --navras-gold: #D4AF37;
  --navras-ivory: #F5ECD7;
  --navras-accent: #C49A3C;
}
```

### Adjusting Animation Timings

Modify these in `NavrasHero.jsx`:

```jsx
// Line 49-55: Adjust delay timers
const nameCardTimer = setTimeout(() => {
  setShowNameCard(true);
}, 1600); // Change this value

const actorTimer = setTimeout(() => {
  setShowActor(true);
}, 2400); // Or this value
```

### Changing Image Positions

Edit the CSS custom properties in `NavrasHero.css`:

```css
.rasa-img-1 {
  --final-position: translate(-420px, 120px); /* Change these values */
  --final-rotation: rotateZ(-28deg);           /* And this */
}
```

### Replacing Placeholder Images

In `NavrasHero.jsx`, replace the placeholder div with actual images:

```jsx
<div className="navras-hero__rasa-image rasa-img rasa-img-${index + 1}">
  <img 
    src={`/images/rasa-${index + 1}.jpg`}
    alt={rasa.emotion}
    loading="eager"
  />
  <div className="rasa-image-label">{rasa.name}</div>
</div>
```

## Responsive Breakpoints

- **Desktop (1280px+)**: Full fan layout with max spread
- **Tablet (768px - 1279px)**: Slightly compressed fan layout
- **Mobile (480px - 767px)**: Tighter fan spacing
- **Small Mobile (375px - 479px)**: Minimal spread, optimized for viewport

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Includes fallbacks for `prefers-reduced-motion` accessibility setting.

## Performance Notes

- Uses CSS keyframe animations (GPU-accelerated)
- Only animates `transform` and `opacity` properties (60fps)
- Images are loaded with `loading="lazy"` where applicable
- Optimized for mobile with reduced animations on smaller screens

## Troubleshooting

### Animations not playing?
- Ensure CSS file is imported: `import './styles/NavrasHero.css'`
- Check browser DevTools for console errors
- Verify fonts are loading (check Network tab)

### Images not showing?
- Replace placeholder divs with actual `<img>` tags
- Verify image paths are correct relative to public folder
- Check browser console for 404 errors

### Performance issues on mobile?
- Reduce image sizes/use WebP format
- Enable `loading="lazy"` for non-critical images
- Test with Chrome DevTools throttling

## Future Enhancements

Possible additions:
- Swipe gestures to navigate emotions
- Click to view emotion details
- Sound effects on animation
- Dynamic loading of real performer images
- Backend integration for personalized content

## Support

For issues or customizations, refer to:
- Component props in `NavrasHero.jsx`
- CSS variables at top of `NavrasHero.css`
- Animation timeline comments in both files
