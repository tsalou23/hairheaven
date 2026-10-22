import { useState } from 'react';
import { Image } from '@/components/ui/image';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import Lightbox from '@/components/gallery/Lightbox';
import { gallery } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Gallery() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(null);

  const step = (dir) => setOpen((i) => (i + dir + gallery.length) % gallery.length);

  return (
    <>
      <PageHero
        eyebrow={t.galleryPage.eyebrow}
        title={t.galleryPage.title}
        intro={t.galleryPage.intro}
      />

      <section className="bg-cloud pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          {gallery.length === 0 ? (
            <p className="text-ink/50">{t.galleryPage.empty}</p>
          ) : (
            <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
              {gallery.map((item, i) => (
                <Reveal key={item.src} delay={(i % 3) * 80} className="mb-3 break-inside-avoid sm:mb-4">
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="group relative block w-full overflow-hidden rounded-[1.5rem] bg-skyblue/25"
                  >
                    <Image
                      src={item.src}
                      alt={item.caption[lang]}
                      className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] ${
                        item.tall ? 'h-[380px] sm:h-[480px]' : 'h-[260px] sm:h-[320px]'
                      }`}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-5 left-5 font-display text-[11px] uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      {item.caption[lang]}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {open !== null && (
        <Lightbox
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </>
  );
}