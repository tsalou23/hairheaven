import React, { useId, useMemo } from 'react';

function buildPuffs(seed) {
  let s = seed || 1;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const puffs = [];
  const count = 11;
  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const bulge = Math.sin(Math.PI * t);
    const rx = 32 + bulge * 34 + rnd() * 12;
    const ry = 22 + bulge * 24 + rnd() * 8;
    puffs.push({
      x: 28 + t * 304 + (rnd() - 0.5) * 20,
      y: 118 - bulge * 28 - ry * 0.3 + (rnd() - 0.5) * 10,
      rx,
      ry,
    });
  }
  puffs.push({ x: 180, y: 143, rx: 142, ry: 32 });
  return puffs;
}

export default function Cloud({ className = '', seed = 1 }) {
  const rawId = useId().replace(/:/g, '');
  const puffs = useMemo(() => buildPuffs(seed), [seed]);

  const bodyId = `cloudbody-${rawId}`;
  const shadeId = `cloudshade-${rawId}`;
  const softId = `cloudsoft-${rawId}`;
  const veilId = `cloudveil-${rawId}`;

  return (
    <svg
      viewBox="0 0 360 200"
      className={`block h-auto overflow-visible ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={bodyId} x1="0" y1="26" x2="0" y2="178" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="46%" stopColor="#fdfeff" />
          <stop offset="78%" stopColor="#eaf3fa" />
          <stop offset="100%" stopColor="#d3e2f0" />
        </linearGradient>
        <linearGradient id={shadeId} x1="0" y1="118" x2="0" y2="182" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eddcc0" stopOpacity="0" />
          <stop offset="100%" stopColor="#ddc7a5" stopOpacity="0.6" />
        </linearGradient>
        <filter id={softId} x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <filter id={veilId} x="-30%" y="-45%" width="160%" height="190%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <g filter={`url(#${veilId})`} fill="#b7cee3" opacity="0.42" transform="translate(0 18)">
        {puffs.map((p, i) => (
          <ellipse key={`shadow-${i}`} cx={p.x} cy={p.y} rx={p.rx} ry={p.ry} />
        ))}
      </g>

      <g filter={`url(#${veilId})`} fill={`url(#${shadeId})`} transform="translate(0 11)">
        {puffs.map((p, i) => (
          <ellipse key={`warm-${i}`} cx={p.x} cy={p.y} rx={p.rx * 0.92} ry={p.ry * 0.8} />
        ))}
      </g>

      <g filter={`url(#${softId})`} fill={`url(#${bodyId})`}>
        {puffs.map((p, i) => (
          <ellipse key={`body-${i}`} cx={p.x} cy={p.y} rx={p.rx} ry={p.ry} />
        ))}
      </g>

      <g filter={`url(#${veilId})`} fill="#ffffff" opacity="0.68">
        {puffs
          .filter((_, i) => i % 2 === 0)
          .map((p, i) => (
            <ellipse
              key={`light-${i}`}
              cx={p.x}
              cy={p.y - p.ry * 0.55}
              rx={p.rx * 0.6}
              ry={p.ry * 0.48}
            />
          ))}
      </g>
    </svg>
  );
}