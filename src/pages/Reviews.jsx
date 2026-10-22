import { Star } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import Stars from '@/components/site/Stars';
import { site, testimonials } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Reviews() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t.reviewsPage.eyebrow}
        title={t.reviewsPage.title}
        intro={t.reviewsPage.intro}
      />

      <section className="bg-cloud pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col items-center gap-4 rounded-[1.75rem] border border-gold/20 bg-skyblue/30 px-6 py-10 text-center">
            <Stars size={16} />
            <p className="font-heading text-5xl font-light leading-none text-ink">{site.rating}</p>
            <p className="text-[13px] text-ink/55">{t.hero.ratingNote}</p>
            <a
              href={site.reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-display text-[11px] uppercase tracking-[0.14em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-22px_rgba(201,169,110,0.95)]"
            >
              <Star size={13} className="fill-ink" strokeWidth={0} />
              {t.cta.leaveReview}
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 90}>
                <figure className="flex h-full flex-col rounded-[1.5rem] border border-gold/20 bg-white/65 p-7 transition-colors duration-700 hover:border-gold/40 hover:bg-white">
                  <Stars size={12} />
                  <blockquote className="mt-4 flex-1 text-pretty text-[14.5px] leading-relaxed text-ink/70">
                    {item.text[lang]}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-gold/15 pt-4">
                    <p className="font-display text-[12px] uppercase tracking-[0.12em] text-ink/80">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[11px] text-ink/40">{item.service[lang]}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-lg text-center">
            <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.3rem)] font-light text-ink">
              {t.reviewsPage.leaveTitle}
            </h2>
            <p className="mt-3 text-[14px] text-ink/55">{t.reviewsPage.leaveText}</p>
            <a
              href={site.reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 font-display text-[11px] uppercase tracking-[0.14em] text-ink/80 transition-colors hover:border-gold hover:text-ink"
            >
              {t.cta.leaveReview}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}