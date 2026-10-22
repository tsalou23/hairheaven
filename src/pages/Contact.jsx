import { MapPin, Phone, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import { hours, site } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Contact() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        intro={t.contactPage.intro}
      />

      <section className="bg-cloud pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-4">
            <Reveal className="rounded-[1.5rem] border border-gold/20 bg-white/65 p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <MapPin size={17} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="label-caps text-[9px] text-ink/40">{t.contactPage.address}</p>
                  <a
                    href={site.directions}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 block font-heading text-xl leading-snug text-ink hover:text-gold-dark"
                  >
                    {site.street[lang]}, {site.city[lang]}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="rounded-[1.5rem] border border-gold/20 bg-white/65 p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <Phone size={17} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="label-caps text-[9px] text-ink/40">{t.contactPage.phone}</p>
                  <a href={site.phoneHref} className="mt-2 block font-heading text-xl text-ink hover:text-gold-dark">
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160} className="rounded-[1.5rem] border border-gold/20 bg-white/65 p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <Clock size={17} strokeWidth={1.5} />
                </span>
                <div className="w-full">
                  <p className="label-caps text-[9px] text-ink/40">{t.contactPage.hours}</p>
                  <ul className="mt-3 space-y-1.5 text-[13px]">
                    {hours.map((h) => (
                      <li key={h.day.en} className="flex justify-between gap-4 text-ink/60">
                        <span>{h.day[lang]}</span>
                        <span className="tabular-nums text-ink/80">{h.time[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240} className="rounded-[1.5rem] border border-gold/20 bg-skyblue/30 p-6">
              <p className="label-caps text-[9px] text-ink/40">{t.contactPage.follow}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 font-display text-[11px] uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-gold hover:text-ink"
                >
                  <Instagram size={14} strokeWidth={1.5} /> Instagram
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 font-display text-[11px] uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-gold hover:text-ink"
                >
                  <Facebook size={14} strokeWidth={1.5} /> Facebook
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-gold/20">
              <iframe
                title="Hair Heaven · Falirou 46, Athens"
                src={site.mapEmbed}
                className="h-[380px] w-full lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.directions}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-display text-[11px] uppercase tracking-[0.14em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-22px_rgba(201,169,110,0.95)]"
              >
                <Navigation size={14} strokeWidth={1.6} />
                {t.contactPage.getDirections}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3.5 font-display text-[11px] uppercase tracking-[0.14em] text-ink/80 transition-colors hover:border-gold hover:text-ink"
              >
                <Phone size={14} strokeWidth={1.6} />
                {t.contactPage.callNow}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}