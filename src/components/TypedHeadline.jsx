import { useEffect, useState } from "react";

// Types the headline out letter by letter; the second line gets the gradient
export default function TypedHeadline({ lines }) {
  const full = lines.join(" ");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? full.length : 0);
  useEffect(() => {
    if (n >= full.length) return;
    const t = setTimeout(() => setN(n + 1), 42);
    return () => clearTimeout(t);
  }, [n]);
  const first = lines[0];
  const typedFirst = full.slice(0, Math.min(n, first.length));
  const typedSecond = n > first.length + 1 ? full.slice(first.length + 1, n) : "";
  return (
    <h1 aria-label={full}>
      <span aria-hidden="true">{typedFirst}{typedSecond === "" && <span className="caret"></span>}<br />
        <span className="grad-text">{typedSecond}</span>{typedSecond !== "" && <span className="caret"></span>}</span>
    </h1>
  );
}
