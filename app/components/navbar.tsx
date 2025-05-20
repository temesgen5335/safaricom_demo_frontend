'use client';

import { useRouter, usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LogIn, LogOut, User, Mail, Atom, ServerIcon , Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();


  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     setIsLoggedIn(isAuthenticated());
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogout = () => {
//     removeToken();
//     setIsLoggedIn(false);
//     router.push(`/${locale}/`);
//   };

  return (
    <div className= "bg-[#43b02a] w-full shadow-md" >
      <div className=" mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/`} className="flex items-center gap-1 text-2xl title tracking-tight">
            <h2 className="text-white"></h2>
            <Image src="/safaricom_mpesa.png"
              alt="logo"
              width={82}
              height = {82}
              className="text-green-500"
              priority />
          </Link>




          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 text-lg">
            {!isLoggedIn ? (
              <>
                <Link
                  href={`/`}
                  className=" hidden md:flex text-white font-bold "
                >
                  APPLY
                </Link>
                <Link
                  href={`/`}
                  className=" hidden md:flex text-white font-bold "
                >
                  RECOMMEND
                </Link>
                <Link
                  href={`/signin`}
                  className="md:flex items-center gap-1 bg-white text-green-600 px-5 py-2 rounded-lg hover:bg-[#0043FF] shadow transition"
                >
                  LOGIN
                </Link>
              </>
            ) : (
              <>
                <button
                //   onClick={handleLogout}
                  className="hidden md:flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


