import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { images, site } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function BookingCta() {
  const { t, lang } = useLang();

  return (
    <section className="relative overflow-hidden">
      <Image
        src={images.interior}
        alt={lang === 'el' ? 'Το φωτεινό σαλόνι του Hair Heaven' : 'The bright room at Hair Heaven'}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-cloud/88" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-cloud via-cloud/70 to-cloud" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-[1240px] px-5 py-24 text-center sm:px-8 lg:py-32">
        <SectionLabel align="center">{t.home.ctaLabel}</SectionLabel>
        <h2 className="mx-auto mt-6 max-w-2xl text-balance font-heading text-[clamp(2.1rem,5vw,3.6rem)] font-light leading-[1.05] text-ink">
          {t.home.ctaTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-ink/65">
          {t.home.ctaText}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/book"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-display text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(201,169,110,0.95)] sm:w-auto"
          >
            {t.cta.book}
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ink/15 bg-white/60 px-7 py-4 font-display text-[12px] uppercase tracking-[0.16em] text-ink/80 transition-colors duration-500 hover:border-gold hover:bg-white sm:w-auto"
          >
            <Phone size={14} strokeWidth={1.5} />
            {site.phone}
          </a>
        </div>
        <p className="mt-6 text-[11px] tracking-[0.06em] text-ink/40">{t.home.ctaNote}</p>
      </Reveal>
    </section>
  );
}