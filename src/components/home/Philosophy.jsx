import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { useLang } from '@/lib/i18n';

export default function Philosophy() {
  const { t } = useLang();

  return (
    <section className="relative bg-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel align="center">{t.home.philosophyLabel}</SectionLabel>
            <h2 className="mt-6 text-balance font-heading text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight text-ink">
              {t.home.philosophyTitle}
            </h2>
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-ink/60">
              {t.home.philosophyText}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-gold/20 bg-gold/15 sm:grid-cols-3">
          {t.home.pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 120}
              className="bg-cloud px-7 py-9 text-center transition-colors duration-700 hover:bg-skyblue/25"
            >
              <span className="label-caps text-[9px] text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-heading text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}