import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { site, hours } from '@/lib/content';

const navLinks = [
  { to: '/services', key: 'services' },
  { to: '/gallery', key: 'gallery' },
  { to: '/team', key: 'team' },
  { to: '/reviews', key: 'reviews' },
  { to: '/book', key: 'book' },
  { to: '/contact', key: 'contact' },
];

export default function SiteFooter() {
  const { t, lang } = useLang();

  return (
    <footer className="border-t border-gold/20 bg-cloud">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:pr-8">
            <p className="font-heading text-3xl text-ink">Hair Heaven</p>
            <p className="label-caps mt-2 text-[9px] text-gold-dark/80">Athens · Faliro</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">{t.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink/70 transition-colors hover:border-gold hover:text-gold-dark"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink/70 transition-colors hover:border-gold hover:text-gold-dark"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="label-caps text-[10px] text-ink/40">{t.footer.explore}</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink/70 transition-colors hover:text-gold-dark"
                  >
                    {t.nav[l.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-[10px] text-ink/40">{t.footer.visit}</p>
            <ul className="mt-5 space-y-3 text-sm text-ink/70">
              <li className="flex gap-2.5">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-dark" />
                <a
                  href={site.directions}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-gold-dark"
                >
                  {site.street[lang]}
                  <br />
                  {site.city[lang]}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-dark" />
                <a href={site.phoneHref} className="transition-colors hover:text-gold-dark">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-caps text-[10px] text-ink/40">{t.footer.hours}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {hours.map((h) => (
                <li key={h.day.en} className="flex justify-between gap-4 text-ink/60">
                  <span>{h.day[lang]}</span>
                  <span className="tabular-nums text-ink/80">{h.time[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="mt-7 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="label-caps text-[9px] text-ink/40">{t.footer.rights}</p>
          <p className="label-caps text-[9px] text-ink/30">{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}