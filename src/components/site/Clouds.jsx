import Cloud from '@/components/site/Cloud';
import useCloudParallax from '@/hooks/useCloudParallax';

const far = [
  { seed: 11, top: '3%', w: 'w-[170px] sm:w-[230px]', o: 'opacity-55', park: '16vw', dur: '146s', delay: '-62s', bob: '17s', breathe: '31s' },
  { seed: 27, top: '27%', w: 'w-[140px] sm:w-[195px]', o: 'opacity-45', park: '63vw', dur: '132s', delay: '-104s', bob: '21s', breathe: '37s' },
  { seed: 43, top: '58%', w: 'w-[190px] sm:w-[250px]', o: 'opacity-50', park: '38vw', dur: '150s', delay: '-22s', bob: '19s', breathe: '34s' },
];

const mid = [
  { seed: 5, top: '8%', w: 'w-[250px] sm:w-[330px]', o: 'opacity-65', park: '7vw', dur: '108s', delay: '-74s', bob: '14s', breathe: '27s' },
  { seed: 19, top: '46%', w: 'w-[230px] sm:w-[300px]', o: 'opacity-55', park: '56vw', dur: '96s', delay: '-32s', bob: '16s', breathe: '29s' },
  { seed: 31, top: '-3%', w: 'w-[290px] sm:w-[380px]', o: 'opacity-55', park: '79vw', dur: '122s', delay: '-12s', bob: '18s', breathe: '33s' },
];

const near = [
  { seed: 7, top: '66%', w: 'w-[330px] sm:w-[450px]', o: 'opacity-70', park: '28vw', dur: '78s', delay: '-56s', bob: '12s', breathe: '25s' },
  { seed: 37, top: '18%', w: 'w-[300px] sm:w-[410px]', o: 'opacity-60', park: '72vw', dur: '64s', delay: '-18s', bob: '10s', breathe: '23s' },
];

const DEPTH_CLASS = {
  far: 'cloud-layer-far',
  mid: 'cloud-layer-mid',
  near: 'cloud-layer-near',
};

function Layer({ items, depth }) {
  return (
    <div className={`cloud-layer ${DEPTH_CLASS[depth]}`}>
      {items.map((c) => (
        <div
          key={c.seed}
          className="cloud-sail"
          style={{
            top: c.top,
            '--cloud-park': c.park,
            animationDuration: c.dur,
            animationDelay: c.delay,
          }}
        >
          <div className="cloud-bob" style={{ animationDuration: c.bob }}>
            <div className="cloud-breathe" style={{ animationDuration: c.breathe }}>
              <Cloud seed={c.seed} className={`${c.w} ${c.o}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Clouds({ className = '', density = 'full', glow = false }) {
  const sceneRef = useCloudParallax();
  const light = density === 'light';

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {glow && <div className="cloud-sun absolute inset-0" />}
      <Layer items={light ? far.slice(0, 2) : far} depth="far" />
      <Layer items={light ? mid.slice(0, 2) : mid} depth="mid" />
      <Layer items={light ? near.slice(0, 1) : near} depth="near" />
    </div>
  );
}