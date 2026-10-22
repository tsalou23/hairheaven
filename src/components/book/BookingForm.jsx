const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';

import { serviceCategories, stylists, site, timeSlots } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const inputClass =
  'w-full rounded-xl border border-gold/30 bg-white/80 px-4 py-3 font-body text-[14px] text-ink placeholder:text-ink/30 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20';

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="label-caps mb-2 block text-[9px] text-ink/45">
        {label} {required && <span className="text-gold-dark">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function BookingForm() {
  const { t, lang } = useLang();
  const [params] = useSearchParams();
  const today = new Date().toISOString().slice(0, 10);

  const flatServices = useMemo(
    () =>
      serviceCategories.flatMap((cat) =>
        cat.items.map((item) => ({ label: `${cat.title[lang]} — ${item.name[lang]}`, value: item.name.en }))
      ),
    [lang]
  );

  const prefillStylist = params.get('stylist') || '';
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    service: '',
    stylist: stylists.some((s) => s.name.en === prefillStylist) ? prefillStylist : '',
    preferred_date: '',
    preferred_time: '',
    notes: '',
  });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.customer_name.trim() || !form.phone.trim() || !form.service || !form.preferred_date || !form.preferred_time) {
      setError(t.bookPage.required);
      return;
    }
    setError('');
    setState('sending');
    try {
      await db.entities.Booking.create({
        ...form,
        stylist: form.stylist || t.bookPage.anyStylist,
        status: 'pending',
      });
      setState('done');
    } catch {
      setState('idle');
      setError(
        lang === 'el'
          ? 'Κάτι πήγε στραβά. Δοκίμασε ξανά ή πάρε μας τηλέφωνο.'
          : 'Something went wrong. Try again, or give us a call.'
      );
    }
  };

  if (state === 'done') {
    return (
      <div className="rounded-[1.75rem] border border-gold/25 bg-white/75 px-6 py-14 text-center sm:px-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <Check size={28} strokeWidth={1.5} />
        </span>
        <h2 className="mt-7 font-heading text-[clamp(1.7rem,4vw,2.4rem)] font-light text-ink">
          {t.bookPage.successTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-[14px] leading-relaxed text-ink/60">
          {t.bookPage.successText}
        </p>
        <div className="mx-auto mt-7 max-w-xs rounded-2xl border border-gold/20 bg-cloud px-5 py-4 text-left text-[13px] text-ink/65">
          <p className="font-display text-[11px] uppercase tracking-[0.12em] text-ink/80">
            {form.customer_name}
          </p>
          <p className="mt-2">
            {flatServices.find((s) => s.value === form.service)?.label || form.service}
          </p>
          <p className="mt-1 tabular-nums">
            {form.preferred_date} · {form.preferred_time}
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-display text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-gold"
          >
            <Phone size={13} strokeWidth={1.5} />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => {
              setForm({ ...form, service: '', preferred_date: '', preferred_time: '', notes: '' });
              setState('idle');
            }}
            className="font-display text-[11px] uppercase tracking-[0.14em] text-ink/45 underline-offset-4 hover:underline"
          >
            {t.bookPage.another}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[1.75rem] border border-gold/25 bg-white/65 p-6 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.bookPage.name} required>
          <input className={inputClass} value={form.customer_name} onChange={set('customer_name')} autoComplete="name" />
        </Field>
        <Field label={t.bookPage.phone} required>
          <input className={inputClass} value={form.phone} onChange={set('phone')} type="tel" autoComplete="tel" />
        </Field>
        <Field label={t.bookPage.email}>
          <input className={inputClass} value={form.email} onChange={set('email')} type="email" autoComplete="email" />
        </Field>
        <Field label={t.bookPage.service} required>
          <select className={cn(inputClass, 'appearance-none')} value={form.service} onChange={set('service')}>
            <option value="">—</option>
            {serviceCategories.map((cat) => (
              <optgroup key={cat.id} label={cat.title[lang]}>
                {cat.items.map((item) => (
                  <option key={item.name.en} value={item.name.en}>
                    {item.name[lang]} · €{item.price}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field label={t.bookPage.stylist}>
          <select className={cn(inputClass, 'appearance-none')} value={form.stylist} onChange={set('stylist')}>
            <option value="">{t.bookPage.anyStylist}</option>
            {stylists.map((s) => (
              <option key={s.name.en} value={s.name.en}>
                {s.name[lang]} — {s.specialty[lang]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.bookPage.date} required>
          <input className={inputClass} value={form.preferred_date} onChange={set('preferred_date')} type="date" min={today} />
        </Field>
        <Field label={t.bookPage.time} required>
          <select className={cn(inputClass, 'appearance-none')} value={form.preferred_time} onChange={set('preferred_time')}>
            <option value="">—</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label={t.bookPage.notes}>
            <textarea
              className={cn(inputClass, 'min-h-[96px] resize-y')}
              value={form.notes}
              onChange={set('notes')}
              placeholder={t.bookPage.notesPlaceholder}
            />
          </Field>
        </div>
      </div>

      {error && <p className="mt-5 text-[13px] text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-display text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(201,169,110,0.95)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'sending' ? t.bookPage.sending : t.bookPage.submit}
        {state !== 'sending' && <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />}
      </button>

      <p className="mt-4 text-center text-[11px] text-ink/40">
        {t.bookPage.callInstead}{' '}
        <a href={site.phoneHref} className="text-gold-dark hover:underline">{site.phone}</a>
      </p>
    </form>
  );
}