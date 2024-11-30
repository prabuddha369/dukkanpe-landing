import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => (
  <header className="flex justify-between fixed z-10 w-full bg-[#E0EA27] shadow-lg items-center p-4">
    <div className="text-2xl font-bold text-black">
      <Image src="/logo.png" alt="Logo" width={0} height={0} sizes='100vw' className='w-40 h-14' />
    </div>
    <div>
      <button className="rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
        <Image src="/playstore.png" alt="Comming Soon" sizes='100vw' width={0} height={0} className='w-40 h-11'/>
      </button>
    </div>
  </header>
);

export default Navbar;
