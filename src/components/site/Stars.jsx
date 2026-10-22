import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Stars({ count = 5, className = '', size = 14 }) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" strokeWidth={1} />
      ))}
    </div>
  );
}