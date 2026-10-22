import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import { serviceCategories, site } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Services() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        intro={t.servicesPage.intro}
      />

      <section className="bg-cloud pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:justify-center sm:px-0">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 rounded-full border border-gold/25 px-5 py-2 font-display text-[11px] uppercase tracking-[0.12em] text-ink/60 transition-colors hover:border-gold hover:text-ink"
              >
                {cat.title[lang]}
              </a>
            ))}
          </div>

          <div className="space-y-14">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} id={cat.id} className="scroll-mt-28">
                <div className="flex flex-col gap-3 border-b border-gold/25 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="label-caps text-[9px] text-gold">0{i + 1}</span>
                    <h2 className="mt-2 font-heading text-[clamp(1.7rem,3.4vw,2.4rem)] font-light leading-none text-ink">
                      {cat.title[lang]}
                    </h2>
                  </div>
                  <p className="max-w-sm text-[13px] leading-relaxed text-ink/50 sm:text-right">
                    {cat.blurb[lang]}
                  </p>
                </div>

                <ul className="mt-2">
                  {cat.items.map((item) => (
                    <li
                      key={item.name.en}
                      className="group flex items-start justify-between gap-6 border-b border-gold/10 py-5 transition-colors duration-500 hover:border-gold/30"
                    >
                      <div className="min-w-0">
                        <h3 className="font-heading text-xl text-ink">{item.name[lang]}</h3>
                        <p className="mt-1 text-[13px] text-ink/50">{item.desc[lang]}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-5">
                        <span className="hidden items-center gap-1.5 font-display text-[10px] uppercase tracking-[0.1em] text-ink/35 sm:flex">
                          <Clock size={12} strokeWidth={1.5} />
                          {item.duration}
                        </span>
                        <span className="font-heading text-xl tabular-nums text-gold-dark">
                          €{item.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-[1.75rem] border border-gold/20 bg-white/60 px-6 py-8 text-center sm:px-10">
            <p className="mx-auto max-w-xl text-[13px] leading-relaxed text-ink/55">
              {t.servicesPage.note}
            </p>
            <Link
              to="/book"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 font-display text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(201,169,110,0.95)]"
            >
              {t.cta.book}
              <ArrowRight size={15} />
            </Link>
            <p className="mt-4 text-[11px] text-ink/40">
              {t.bookPage.callInstead}{' '}
              <a href={site.phoneHref} className="text-gold-dark hover:underline">
                {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}