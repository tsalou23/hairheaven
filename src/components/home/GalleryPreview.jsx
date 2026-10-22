import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { gallery } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function GalleryPreview() {
  const { t, lang } = useLang();
  const items = gallery.slice(0, 4);

  return (
    <section className="bg-cloud pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <SectionLabel>{t.home.galleryLabel}</SectionLabel>
            <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight text-ink">
              {t.home.galleryTitle}
            </h2>
            <p className="mt-3 text-[15px] text-ink/60">{t.home.galleryText}</p>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 font-display text-[12px] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-gold-dark"
            >
              {t.cta.gallery}
              <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 90}>
              <Link
                to="/gallery"
                className={cn(
                  'group relative block overflow-hidden rounded-[1.5rem] bg-skyblue/30',
                  i % 2 === 0 ? 'h-[220px] sm:h-[320px]' : 'h-[220px] sm:h-[320px] lg:mt-10'
                )}
              >
                <Image
                  src={item.src}
                  alt={item.caption[lang]}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 left-4 font-display text-[11px] tracking-[0.1em] text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  {item.caption[lang]}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}