import { createContext, useContext, useEffect, useState } from "react";

// Full-screen image viewer. Any component can open it with useLightbox()({ src, caption }).
const LightboxCtx = createContext(() => {});

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (!item) return;
    const onKey = e => e.key === "Escape" && setItem(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item]);
  return (
    <LightboxCtx.Provider value={setItem}>
      {children}
      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={() => setItem(null)}>
          <button className="lb-close" aria-label="Close image" onClick={() => setItem(null)}>✕</button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={item.src} alt={item.caption} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        </div>
      )}
    </LightboxCtx.Provider>
  );
}

export const useLightbox = () => useContext(LightboxCtx);
