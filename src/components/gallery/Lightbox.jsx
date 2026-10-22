import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { gallery } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Lightbox({ index, onClose, onPrev, onNext }) {
  const { lang } = useLang();
  const item = gallery[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-cloud/95 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption[lang]}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={lang === 'el' ? 'Κλείσιμο' : 'Close'}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/70 text-ink sm:right-8 sm:top-8"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label={lang === 'el' ? 'Προηγούμενη' : 'Previous'}
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/70 text-ink sm:left-6"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      <figure
        className="max-h-[86vh] w-full max-w-3xl animate-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-[1.5rem] bg-skyblue/30 shadow-[0_50px_100px_-60px_rgba(43,43,43,0.6)]">
          <Image
            src={item.src}
            alt={item.caption[lang]}
            className="max-h-[76vh] w-full object-contain"
            fittingType="fit"
          />
        </div>
        <figcaption className="mt-4 text-center font-display text-[11px] uppercase tracking-[0.16em] text-ink/55">
          {item.caption[lang]}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label={lang === 'el' ? 'Επόμενη' : 'Next'}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/70 text-ink sm:right-6"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}