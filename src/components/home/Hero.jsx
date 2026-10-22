import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import SectionLabel from '@/components/site/SectionLabel';
import Stars from '@/components/site/Stars';
import Clouds from '@/components/site/Clouds';
import CloudBank from '@/components/site/CloudBank';
import { site, images } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Hero() {
  const { t, lang } = useLang();
  const words = t.hero.title.split(' ');
  const last = words.pop();
  const lead = words.join(' ');

  return (
    <section className="relative overflow-x-clip heaven-wash pb-20 pt-28 sm:pt-32 lg:pb-36 lg:pt-36">
      <Clouds glow />
      <CloudBank className="-bottom-14" />

      <div className="relative z-20 mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-rise">
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>

          <h1 className="mt-7 text-balance font-heading text-[clamp(2.5rem,7.2vw,4.6rem)] font-light leading-[1.02] text-ink">
            {lead}{' '}
            <span className="italic text-gold-dark">{last}</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-ink/65 sm:text-base">
            {t.hero.intro}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/book"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-display text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(201,169,110,0.95)]"
            >
              {t.cta.book}
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/40 px-7 py-4 font-display text-[12px] uppercase tracking-[0.16em] text-ink/80 transition-colors duration-500 hover:border-gold hover:text-ink"
            >
              <Phone size={14} strokeWidth={1.5} />
              {site.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Stars size={13} />
            <span className="font-display text-[13px] text-ink/70">
              <span className="text-ink">{t.hero.rating}</span> · {t.hero.ratingNote}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[220px_220px_36px_36px] border border-gold/25"
          />
          <div className="relative overflow-hidden rounded-[220px_220px_28px_28px] bg-skyblue/50 shadow-[0_50px_90px_-60px_rgba(43,43,43,0.45)]">
            <img
              src={images.hero}
              alt=""
              className="h-[430px] w-full object-cover object-center sm:h-[540px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>

          <div className="animate-float-slow absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-gold/25 bg-white/90 px-5 py-3.5 shadow-[0_20px_50px_-30px_rgba(43,43,43,0.5)] backdrop-blur-md sm:left-4">
            <span className="font-heading text-2xl leading-none text-ink">{t.hero.rating}</span>
            <span className="h-8 w-px bg-gold/30" />
            <div>
              <Stars size={11} />
              <p className="mt-1 font-display text-[10px] tracking-[0.08em] text-ink/55">
                {t.hero.ratingNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}