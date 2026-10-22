import PageHero from '@/components/site/PageHero';
import BookingForm from '@/components/book/BookingForm';
import { hours, site } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export default function Book() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero eyebrow={t.bookPage.eyebrow} title={t.bookPage.title} intro={t.bookPage.intro} />

      <section className="bg-cloud pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1100px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <BookingForm />

          <aside className="space-y-4">
            <div className="rounded-[1.5rem] border border-gold/20 bg-skyblue/30 p-6">
              <p className="label-caps text-[9px] text-gold-dark">{t.contactPage.address}</p>
              <a
                href={site.directions}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 block font-heading text-xl leading-snug text-ink hover:text-gold-dark"
              >
                {site.street[lang]}
                <br />
                {site.city[lang]}
              </a>
              <p className="label-caps mt-6 text-[9px] text-gold-dark">{t.contactPage.phone}</p>
              <a href={site.phoneHref} className="mt-3 block font-heading text-xl text-ink hover:text-gold-dark">
                {site.phone}
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-gold/20 bg-white/60 p-6">
              <p className="label-caps text-[9px] text-gold-dark">{t.contactPage.hours}</p>
              <ul className="mt-4 space-y-2 text-[13px]">
                {hours.map((h) => (
                  <li key={h.day.en} className="flex justify-between gap-4 text-ink/60">
                    <span>{h.day[lang]}</span>
                    <span className="tabular-nums text-ink/80">{h.time[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}