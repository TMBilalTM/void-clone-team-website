import React from "react";

/**
 * Bu hook, bir elemente mouse ile gelindiğinde imleç konumuna göre CSS değişkenlerini ayarlar.
 * Kullanımı:
 * const { onMouseMove } = useRadialGlow();
 * <div onMouseMove={onMouseMove} className="radial-glow ..."> ... </div>
 */
export function useRadialGlow() {
  const onMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);
  return { onMouseMove };
}

/**
 * Alternatif olarak, doğrudan component olarak da kullanılabilir.
 * <RadialGlow className="...">İçerik</RadialGlow>
 */
export const RadialGlow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => {
  const { onMouseMove } = useRadialGlow();
  return (
    <div
      onMouseMove={onMouseMove}
      className={`radial-glow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
