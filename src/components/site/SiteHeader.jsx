import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/i18n';
import { site } from '@/lib/content';

const links = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/gallery', key: 'gallery' },
  { to: '/team', key: 'team' },
  { to: '/reviews', key: 'reviews' },
  { to: '/contact', key: 'contact' },
];

export default function SiteHeader() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-700',
          scrolled
            ? 'border-b border-gold/15 bg-cloud/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
          <Link to="/" className="group flex items-center gap-3" aria-label={site.name}>
            <img
              src="/logo.jpeg"
              alt=""
              className="h-11 w-11 shrink-0 rounded-full object-cover mix-blend-multiply transition-shadow duration-500 sm:h-12 sm:w-12"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[21px] tracking-[-0.01em] text-ink transition-opacity group-hover:opacity-80 sm:text-[23px]">
                Hair Heaven
              </span>
              <span className="label-caps mt-1 text-[9px] text-gold-dark/80">
                Athens · Faliro
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'group relative font-display text-[13px] tracking-[0.06em] text-ink/70 transition-colors hover:text-ink',
                    isActive && 'text-ink'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {t.nav[l.key]}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden items-center gap-1 sm:flex" aria-label="Language">
              {['el', 'en'].map((code, idx) => (
                <span key={code} className="flex items-center gap-1">
                  {idx === 1 && <span className="text-ink/20">|</span>}
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    className={cn(
                      'label-caps px-1 text-[10px] transition-colors',
                      lang === code ? 'text-gold-dark' : 'text-ink/40 hover:text-ink/70'
                    )}
                    aria-pressed={lang === code}
                  >
                    {code.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>

            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 font-display text-[13px] text-ink/60 transition-colors hover:text-gold-dark md:flex"
            >
              <Phone size={14} strokeWidth={1.5} />
              {site.phone}
            </a>

            <Link
              to="/book"
              className="hidden rounded-full bg-gold px-6 py-2.5 font-display text-[12px] uppercase tracking-[0.14em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(201,169,110,0.9)] sm:inline-block"
            >
              {t.cta.bookShort}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink lg:hidden"
              aria-label={t.cta.menu}
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] flex flex-col bg-cloud transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!open}
      >
        <div className="flex h-[72px] items-center justify-between px-5">
          <span className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/25" />
            <span className="font-heading text-2xl text-ink">Hair Heaven</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink"
            aria-label={t.cta.close}
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
          {[...links, { to: '/book', key: 'book' }].map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-baseline gap-4 border-b border-gold/10 py-4 font-heading text-3xl text-ink transition-colors hover:text-gold-dark"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="label-caps text-[9px] text-gold/70">0{i + 1}</span>
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10">
          <div className="mb-6 flex items-center gap-4">
            {['el', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  'label-caps text-[11px]',
                  lang === code ? 'text-gold-dark' : 'text-ink/40'
                )}
              >
                {code === 'el' ? 'Ελληνικά' : 'English'}
              </button>
            ))}
          </div>
          <a
            href={site.phoneHref}
            className="block rounded-full border border-gold/40 py-3 text-center font-display text-[13px] tracking-[0.1em] text-ink"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </>
  );
}