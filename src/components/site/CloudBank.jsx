import Cloud from '@/components/site/Cloud';

export default function CloudBank({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 z-10 ${className}`}>
      <div className="relative h-[132px] sm:h-[178px]">
        <Cloud seed={3} className="animate-float-slower absolute -bottom-4 -left-[12%] w-[420px] opacity-90 sm:w-[600px]" />
        <Cloud seed={13} className="animate-float-slow absolute -bottom-16 left-[16%] w-[380px] opacity-85 sm:w-[520px]" />
        <Cloud seed={23} className="animate-float-slower absolute -bottom-2 right-[4%] w-[400px] opacity-90 sm:w-[580px]" />
        <Cloud seed={33} className="animate-float-slow absolute -bottom-20 -right-[14%] w-[360px] opacity-80 sm:w-[500px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-cloud/70 to-cloud" />
      </div>
    </div>
  );
}