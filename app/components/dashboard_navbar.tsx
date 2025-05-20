'use client';

import { useState } from 'react';
import { LogOut, UserCog } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const DashboardNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
      setIsLoggedIn(false);
      router.push('/');
    };
    return( 

          <div className=" mx-auto px-6 bg-[#f4f6f9] shadow-xl">
            <div className="flex items-center h-12 justify-end gap-2">
            <Link
            href="/profile"
            className="p-2 bg-green-600 hover:text-white rounded-full transition w-10 h-10 flex items-center justify-center"
            >
            <UserCog className="w-5 h-5" />
            </Link>
           </div>

         </div>
      );
};

export default DashboardNavbar;