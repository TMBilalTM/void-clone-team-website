import React, { useRef, useLayoutEffect, useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  mousePos?: { x: number; y: number } | null;
}

export default function TeamCard({ name, role, mousePos }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Kartın merkezini viewport'a göre her mouse hareketinde ve resize'da güncelle
  useLayoutEffect(() => {
    function updateCenter() {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  // Mouse hareketinde de merkezi güncelle
  useLayoutEffect(() => {
    if (mousePos) {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
  }, [mousePos]);

  let glowStyle: React.CSSProperties = {};
  let showGlow = false;

  if (mousePos) {
    const dx = mousePos.x - center.x;
    const dy = mousePos.y - center.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // maxDist artırıldı, opacity eşiği düşürüldü
    const maxDist = 240;
    const opacity = Math.max(0, 1 - dist / maxDist);

    if (opacity > 0.01) {
      showGlow = true;
      glowStyle = {
        background: `radial-gradient(300px circle at 50% 50%, #a259ff88 ${Math.round(
          opacity * 100
        )}%, transparent 100%)`,
        opacity,
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        zIndex: 1,
        transition: "opacity 0.2s",
      };
    }
  }

  // Profil resmi için özel ikonlar
  let profileIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="14" r="8" fill="#e5e7eb" />
      <ellipse cx="20" cy="30" rx="12" ry="8" fill="#cbd5e1" />
    </svg>
  );
  if (name === "Fevziye Nur Aksoy") {
    profileIcon = (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="8" fill="#fff" />
        <ellipse cx="20" cy="30" rx="12" ry="8" fill="#e5e7eb" />
        <text x="20" y="38" textAnchor="middle" fontSize="18" fill="#fff">🤍</text>
      </svg>
    );
  } else if (name === "Bilal Aksoy") {
    profileIcon = (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="8" fill="#222" />
        <ellipse cx="20" cy="30" rx="12" ry="8" fill="#444" />
        <text x="20" y="38" textAnchor="middle" fontSize="18" fill="#222">🖤</text>
      </svg>
    );
  }

  return (
    <div
      ref={cardRef}
      className="flex items-center rounded-2xl border border-[#23233a] px-6 py-4 gap-4 min-h-[80px] relative overflow-hidden backdrop-blur-md"
      style={{
        background: "transparent",
        boxShadow: showGlow ? "0 0 0 2px #a259ff33" : "none",
        transition: "box-shadow 0.2s",
      }}
    >
      {showGlow && <div style={glowStyle} />}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center z-10">
        {profileIcon}
      </div>
      <div className="flex flex-col items-start justify-center z-10">
        <span className="text-xl font-semibold text-gray-100 mb-1">{name}</span>
        <span className="text-gray-400 text-base">{role}</span>
      </div>
    </div>
  );
}
