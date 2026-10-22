import { cn } from '@/lib/utils';

export default function SectionLabel({ children, className = '', align = 'left' }) {
  return (
    <div
      className={cn(
        'flex items-center gap-4',
        align === 'center' && 'justify-center',
        className
      )}
    >
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      <span className="label-caps text-gold-dark">{children}</span>
    </div>
  );
}