import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import { stylists } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Team() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero eyebrow={t.teamPage.eyebrow} title={t.teamPage.title} intro={t.teamPage.intro} />

      <section className="bg-cloud pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {stylists.map((person, i) => (
            <Reveal key={person.name.en} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gold/20 bg-white/60 transition-all duration-700 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-[0_34px_70px_-50px_rgba(43,43,43,0.6)]">
                <div className="overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name[lang]}
                    className="h-[300px] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="label-caps text-[9px] text-gold">{person.role[lang]}</span>
                  <h2 className="mt-3 font-heading text-[26px] leading-none text-ink">
                    {person.name[lang]}
                  </h2>
                  <p className="mt-2 font-display text-[11px] uppercase tracking-[0.1em] text-ink/45">
                    {person.specialty[lang]}
                  </p>
                  <p className="mt-4 flex-1 text-[13px] leading-relaxed text-ink/55">
                    {person.bio[lang]}
                  </p>
                  <Link
                    to={`/book?stylist=${encodeURIComponent(person.name.en)}`}
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[11px] uppercase tracking-[0.14em] text-gold-dark transition-opacity hover:opacity-70"
                  >
                    {t.teamPage.bookWith}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}