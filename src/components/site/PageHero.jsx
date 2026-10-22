import SectionLabel from '@/components/site/SectionLabel';

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden heaven-wash pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-[340px] w-[340px] rounded-full bg-skyblue/60 blur-3xl"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="animate-rise max-w-2xl">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-6 text-balance font-heading text-[clamp(2.2rem,5.5vw,3.8rem)] font-light leading-[1.04] text-ink">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-[54ch] text-pretty text-[15px] leading-relaxed text-ink/60">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}