import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { serviceCategories } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function FeaturedServices() {
  const { t, lang } = useLang();

  return (
    <section className="bg-cloud pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <SectionLabel>{t.home.servicesLabel}</SectionLabel>
            <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight text-ink">
              {t.home.servicesTitle}
            </h2>
            <p className="mt-3 text-[15px] text-ink/60">{t.home.servicesText}</p>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-display text-[12px] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-gold-dark"
            >
              {t.cta.seeAll}
              <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 90}>
              <Link
                to={`/services#${cat.id}`}
                className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-gold/20 bg-white/70 p-6 transition-all duration-700 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-[0_30px_60px_-45px_rgba(43,43,43,0.5)]"
              >
                <div>
                  <span className="label-caps text-[9px] text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-heading text-[26px] leading-none text-ink">
                    {cat.title[lang]}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/55">{cat.blurb[lang]}</p>
                  <ul className="mt-5 space-y-2">
                    {cat.items.slice(0, 3).map((item) => (
                      <li
                        key={item.name.en}
                        className="flex items-baseline gap-2 text-[12.5px] text-ink/65"
                      >
                        <span className="truncate">{item.name[lang]}</span>
                        <span className="h-px flex-1 bg-gold/25" />
                        <span className="tabular-nums text-ink/45">€{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-[11px] uppercase tracking-[0.14em] text-gold-dark opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {t.cta.services}
                  <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}