'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swords, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden'>
      {/* Background banner */}
      <div className='absolute inset-0'>
        <Image
          src='/images/eotfl-banner.png'
          alt='Echoes of the First Light Expansion Banner'
          fill
          className='object-cover object-center'
          priority
        />
        <div className='absolute inset-0 bg-black/50' /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10 text-center'>
        {/* Expansion logo */}
        <div className='mb-6'>
          <Image
            src='/images/eotfl-logo.svg'
            alt='Echoes of the First Light'
            width={420}
            height={140}
            className='mx-auto'
          />
        </div>

        {/* Label */}
        <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#ffdc41] to-[#ecd671] rounded-full text-[#171613] font-bold text-sm mb-6 shadow-lg'>
          First Official Expansion
        </div>

        {/* Description */}
        <p className='text-lg lg:text-xl text-[#BAA488] max-w-2xl mx-auto mb-8'>
          Uncover the origins of ancient magic and shape your destiny in a world
          where light and darkness collide for the very first time... or not?
        </p>

        {/* Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto'>
          <div className='bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#BAA488]/20'>
            <Swords className='w-6 h-6 text-[#EA9F23] mb-2 mx-auto' />
            <div className='text-sm font-semibold text-[#BAA488]'>
              28+ Cards
            </div>
            <div className='text-xs text-gray-300'>Foundational</div>
          </div>
          <div className='bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#BAA488]/20'>
            <Shield className='w-6 h-6 text-[#EA9F23] mb-2 mx-auto' />
            <div className='text-sm font-semibold text-[#BAA488]'>4 Realms</div>
            <div className='text-xs text-gray-300'>The bases of this world</div>
          </div>
        </div>

        {/* Gallery button */}
        <Link
          href='/gallery'
          className='inline-flex items-center justify-center px-6 py-3 border border-[#BAA488]/50 text-[#BAA488] rounded-lg font-medium hover:bg-[#BAA488]/10 transition-all duration-300'
        >
          View Card Gallery
        </Link>
      </div>
    </section>
  );
}
