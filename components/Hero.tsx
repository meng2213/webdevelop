// components/Hero.tsx
import config from '@/content/config.mjs';

export default function Hero() {
  return (
    <div className="hero">
      <h1>{config.hero.title}</h1>
      <p>{config.hero.description}</p>
      <img src={config.hero.image} alt="Hero Image" />
      <div className="cta-buttons">
        {config.hero.cta.map((cta, index) => (
          <a key={index} href={cta.href} className="cta-button">
            {cta.label}
          </a>
        ))}
      </div>
    </div>
  );
}
