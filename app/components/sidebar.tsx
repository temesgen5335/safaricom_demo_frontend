'use client';

import Link from 'next/link';
import { FaTachometerAlt, FaUserPlus, FaEye } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="h-screen w-full bg-[#001529] shadow-md flex flex-col">
      <div className="p-6 border-b mb-8">
        <h1 className="text-lg font-bold text-white mb-2">OP-PARTNER MANGEMENT</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard" className="block px-4 py-2 flex items-center space-x-4  hover:bg-green-100 text-white">
            <FaTachometerAlt className="text-green-700" />
         <span className="text-sm text-white">Dashobard</span>
        </Link>
        <Link href="/kyc" className="block px-4 py-2 flex items-center space-x-4  hover:bg-green-100 text-white">
            <FaUserPlus className="text-green-700" />
         <span className="text-sm text-white">Onboarding</span>
        </Link>
        <Link href="/view" className="block px-4 py-2 flex items-center space-x-4  hover:bg-green-100 text-white">
        <FaEye className="text-green-700" />
         <span className="text-sm text-white">View</span>
        </Link>
      </nav>
    </aside>
  );
}