const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, LockKeyhole, ArrowLeft, CalendarDays } from 'lucide-react';

import { cn } from '@/lib/utils';

const statuses = [
  { value: 'pending', label: 'Εκκρεμεί', tone: 'bg-gold/15 text-gold-dark' },
  { value: 'confirmed', label: 'Επιβεβαιωμένο', tone: 'bg-emerald-100 text-emerald-800' },
  { value: 'completed', label: 'Ολοκληρώθηκε', tone: 'bg-skyblue text-ink/70' },
  { value: 'cancelled', label: 'Ακυρώθηκε', tone: 'bg-ink/10 text-ink/50' },
];

export default function AdminBookings() {
  const [user, setUser] = useState(undefined);
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const me = await db.auth.me();
        if (alive) setUser(me);
      } catch {
        if (alive) setUser(null);
      }
      if (alive) setLoading(false);
    })();
    return () => { alive = false; };
  }, []);

  const load = async () => {
    const res = await db.entities.Booking.list({ sort: '-created_date' });
    setBookings(res?.items ?? res ?? []);
  };

  useEffect(() => {
    if (user && user.role === 'admin') load();
  }, [user]);

  const setStatus = async (id, status) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    await db.entities.Booking.update(id, { status });
  };

  const remove = async (id) => {
    if (!window.confirm('Διαγραφή ραντεβού;')) return;
    setBookings((prev) => prev.filter((b) => b.id !== id));
    await db.entities.Booking.delete(id);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cloud">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cloud px-5">
        <div className="w-full max-w-sm rounded-[1.75rem] border border-gold/25 bg-white/70 p-9 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
            <LockKeyhole size={22} strokeWidth={1.5} />
          </span>
          <h1 className="mt-6 font-heading text-2xl text-ink">Διαχείριση ραντεβού</h1>
          <p className="mt-3 text-[13px] leading-relaxed text-ink/55">
            Η σελίδα είναι για το προσωπικό του Hair Heaven. Συνδέσου με τον λογαριασμό διαχειριστή.
          </p>
          <button
            type="button"
            onClick={() => db.auth.redirectToLogin('/admin')}
            className="mt-6 w-full rounded-full bg-gold px-6 py-3 font-display text-[11px] uppercase tracking-[0.14em] text-ink"
          >
            Σύνδεση
          </button>
          <Link to="/" className="mt-4 inline-block text-[11px] text-ink/40 hover:text-ink">
            ← Πίσω στο site
          </Link>
        </div>
      </div>
    );
  }

  const visible = filter === 'all' ? bookings : bookings.filter((b) => (b.status || 'pending') === filter);

  return (
    <div className="min-h-screen bg-cloud pb-20">
      <header className="border-b border-gold/20 bg-white/60">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div>
            <p className="label-caps text-[9px] text-gold-dark">Hair Heaven · Admin</p>
            <h1 className="mt-1 font-heading text-2xl text-ink">Ραντεβού</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-display text-[11px] uppercase tracking-[0.12em] text-ink/50 hover:text-ink"
            >
              <ArrowLeft size={13} /> Site
            </Link>
            <span className="text-[11px] text-ink/40">{user.email}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {[{ value: 'all', label: 'Όλα' }, ...statuses].map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setFilter(s.value)}
              className={cn(
                'rounded-full border px-4 py-1.5 font-display text-[10px] uppercase tracking-[0.1em] transition-colors',
                filter === s.value
                  ? 'border-gold bg-gold/15 text-ink'
                  : 'border-gold/25 text-ink/50 hover:border-gold/60'
              )}
            >
              {s.label}
            </button>
          ))}
          <span className="ml-auto self-center text-[11px] text-ink/40">
            {visible.length} / {bookings.length}
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-gold/30 bg-white/50 px-6 py-16 text-center">
            <CalendarDays size={22} className="mx-auto text-gold/70" strokeWidth={1.5} />
            <p className="mt-4 text-[13px] text-ink/50">Δεν υπάρχουν ραντεβού ακόμη.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {visible.map((b) => {
              const st = statuses.find((s) => s.value === (b.status || 'pending')) || statuses[0];
              return (
                <li
                  key={b.id}
                  className="rounded-[1.25rem] border border-gold/20 bg-white/70 p-5 transition-colors hover:border-gold/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h2 className="font-heading text-xl text-ink">{b.customer_name}</h2>
                        <span className={cn('rounded-full px-2.5 py-0.5 font-display text-[9px] uppercase tracking-[0.08em]', st.tone)}>
                          {st.label}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] text-ink/60">
                        {b.service} · {b.stylist}
                      </p>
                      <p className="mt-1 tabular-nums text-[13px] text-ink/60">
                        {b.preferred_date} · {b.preferred_time}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-ink/45">
                        <a href={`tel:${b.phone}`} className="hover:text-gold-dark">{b.phone}</a>
                        {b.email && <a href={`mailto:${b.email}`} className="hover:text-gold-dark">{b.email}</a>}
                      </div>
                      {b.notes && <p className="mt-2 max-w-lg text-[12px] italic text-ink/50">“{b.notes}”</p>}
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={b.status || 'pending'}
                        onChange={(e) => setStatus(b.id, e.target.value)}
                        className="rounded-full border border-gold/30 bg-white px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.08em] text-ink/70 focus:border-gold focus:outline-none"
                      >
                        {statuses.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => remove(b.id)}
                        aria-label="Διαγραφή"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 text-ink/40 transition-colors hover:border-red-300 hover:text-red-600"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}