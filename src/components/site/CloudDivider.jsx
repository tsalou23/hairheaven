const TONES = {
  sky: '#EBF1F5',
  cloud: '#FAF8F5',
  white: '#FFFFFF',
};

const BUMPS = Array.from({ length: 30 }, (_, i) => {
  const t = i / 29;
  const r = 28 + Math.sin(t * 7.3) * 15 + Math.sin(t * 19.7) * 8;
  return { cx: t * 1440, cy: 94 - r * 0.5, r };
});

export default function CloudDivider({ tone = 'cloud', flip = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? '-scale-y-100' : ''} ${className}`}
    >
      <g fill={TONES[tone] || TONES.cloud}>
        <rect x="0" y="88" width="1440" height="32" />
        {BUMPS.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} r={b.r} />
        ))}
      </g>
    </svg>
  );
}