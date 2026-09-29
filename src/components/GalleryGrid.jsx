import Reveal from "./Reveal.jsx";
import { useLightbox } from "./Lightbox.jsx";

export default function GalleryGrid({ items }) {
  const open = useLightbox();
  return (
    <div className="gallery">
      {items.map((g, i) => (
        <Reveal key={g.src} delay={(i % 3) * 100}>
          <button className="g-item" style={{ width: "100%" }} onClick={() => open({ src: g.src, caption: g.title + " · " + g.note })}>
            <img src={g.src} alt={g.title} loading="lazy" />
            <div className="g-cap"><strong>{g.title}</strong><span>{g.note}</span></div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
