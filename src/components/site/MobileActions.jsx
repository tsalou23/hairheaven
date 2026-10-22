import { Link } from 'react-router-dom';
import { Phone, CalendarDays, MapPin } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { site } from '@/lib/content';

export default function MobileActions() {
  const { t } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-cloud/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 items-center px-3 py-2">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-1.5 text-ink/70 active:text-gold-dark"
        >
          <Phone size={17} strokeWidth={1.5} />
          <span className="label-caps text-[8px]">{t.cta.call}</span>
        </a>
        <Link
          to="/book"
          className="mx-1 flex items-center justify-center gap-2 rounded-full bg-gold py-2.5 font-display text-[11px] uppercase tracking-[0.14em] text-ink"
        >
          <CalendarDays size={15} strokeWidth={1.6} />
          {t.cta.bookShort}
        </Link>
        <a
          href={site.directions}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center gap-1 py-1.5 text-ink/70 active:text-gold-dark"
        >
          <MapPin size={17} strokeWidth={1.5} />
          <span className="label-caps text-[8px]">{t.cta.directions}</span>
        </a>
      </div>
    </div>
  );
}