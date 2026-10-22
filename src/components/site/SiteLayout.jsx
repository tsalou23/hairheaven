import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import MobileActions from '@/components/site/MobileActions';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-cloud">
      <SiteHeader />
      <main className="flex-1 pb-[68px] md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileActions />
    </div>
  );
}