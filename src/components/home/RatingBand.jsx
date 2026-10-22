import { Link } from 'react-router-dom';
import Stars from '@/components/site/Stars';
import Reveal from '@/components/site/Reveal';
import { useLang } from '@/lib/i18n';
import { site } from '@/lib/content';

export default function RatingBand() {
  const { t, lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-skyblue/50 py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.75),transparent)]"
      />
      <Reveal className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-6 px-5 text-center sm:px-8">
        <Stars size={16} />
        <p className="font-heading text-[clamp(2.4rem,6vw,3.6rem)] font-light leading-none text-ink">
          {site.rating}
          <span className="ml-2 align-super text-base text-ink/40">/ 5</span>
        </p>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-ink/60">
          {lang === 'el'
            ? "Από 412 κριτικές στο Google — για το χρώμα, το κούρεμα και την ησυχία του χώρου."
            : "Across 412 Google reviews — for the color, the cut, and the calm of the room."}
        </p>
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-2.5 font-display text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-all duration-500 hover:border-gold/50 hover:bg-white hover:text-ink"
        >
          {t.cta.reviews}
        </Link>
      </Reveal>
    </section>
  );
}