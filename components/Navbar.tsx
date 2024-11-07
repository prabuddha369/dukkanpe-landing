import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => (
  <header className="flex justify-between bg-white border-b border-b-grey/600 items-center p-4">
    <div className="text-2xl font-bold text-black">
      <Image src="/logo.png" alt="Logo" width={0} height={0} sizes='100vw' className='w-40 h-10' />
    </div>
    <div>
      <button className="px-4 py-2 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
        Coming Soon
      </button>
    </div>
  </header>
);

export default Navbar;
