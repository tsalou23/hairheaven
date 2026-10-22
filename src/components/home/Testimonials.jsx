import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import Stars from '@/components/site/Stars';
import { testimonials } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const { t, lang } = useLang();
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % total), 7500);
    return () => clearInterval(id);
  }, [total]);

  const go = (dir) => setIndex((v) => (v + dir + total) % total);

  return (
    <section className="relative overflow-hidden bg-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionLabel align="center">{t.home.reviewsLabel}</SectionLabel>
          <h2 className="mt-6 font-heading text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight text-ink">
            {t.home.reviewsTitle}
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-white/60">
            <div
              className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <figure
                  key={item.name}
                  className="w-full shrink-0 px-6 py-10 text-center sm:px-14 sm:py-14"
                  aria-hidden={i !== index}
                >
                  <span className="font-heading text-5xl leading-none text-gold/50">“</span>
                  <blockquote className="mx-auto mt-4 max-w-2xl text-balance font-heading text-[clamp(1.15rem,2.4vw,1.6rem)] font-light leading-relaxed text-ink/85">
                    {item.text[lang]}
                  </blockquote>
                  <figcaption className="mt-7 flex flex-col items-center gap-2">
                    <Stars size={12} />
                    <span className="font-display text-[12px] uppercase tracking-[0.14em] text-ink/75">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-ink/45">{item.service[lang]}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={lang === 'el' ? 'Προηγούμενη κριτική' : 'Previous review'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink/60 transition-colors hover:border-gold hover:text-gold-dark"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${lang === 'el' ? 'Κριτική' : 'Review'} ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-500',
                    i === index ? 'w-6 bg-gold' : 'w-1.5 bg-gold/30 hover:bg-gold/60'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={lang === 'el' ? 'Επόμενη κριτική' : 'Next review'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink/60 transition-colors hover:border-gold hover:text-gold-dark"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}