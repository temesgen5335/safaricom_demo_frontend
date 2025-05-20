'use client';

import Navbar from '../components/navbar';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith('/kyc');
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}