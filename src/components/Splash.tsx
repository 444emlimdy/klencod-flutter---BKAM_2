"use client";

import { useEffect } from "react";

export default function Splash({ credit, exiting, onDone }: { credit: string; exiting: boolean; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  const letters = ["H", "E", "L", "L", "O"];

  return (
    <div className={`splash ${exiting ? "splash-exit" : ""}`} onClick={onDone} role="presentation">
      <div className="splash-orb orb-a" />
      <div className="splash-orb orb-b" />
      <div className="splash-ring" />
      <div className="splash-core">
        <h1 className="hello font-display" aria-label="HELLO">
          {letters.map((l, i) => (
            <span key={i} style={{ animationDelay: `${0.35 + i * 0.13}s` }}>
              {l}
            </span>
          ))}
        </h1>
        <div className="splash-shine" />
        <div className="splash-divider" />
        <p className="splash-credit">{credit}</p>
        <p className="splash-brand font-display">بكم؟ · com.webkam.app</p>
      </div>
    </div>
  );
}
