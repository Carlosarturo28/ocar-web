// src/components/layout/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Scroll, Users, BookOpen, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith('/playroom')) return null;

  const navigation = [
    { name: 'Home', href: '/', icon: <Sparkles size={16} /> },
    { name: 'Rules', href: '/rules', icon: <BookOpen size={16} /> },
    { name: 'Card Database', href: '/gallery', icon: <Scroll size={16} /> },
    { name: 'Community', href: '/community', icon: <Users size={16} /> },
  ];

  return (
    <header className='bg-gradient-to-r from-[#171613] via-[#2D2542] to-[#171613] shadow-xl fixed w-full top-0 z-50 border-b border-[#BAA488]/20'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center group'>
            <div className='relative'>
              <Image
                src='/images/logo.svg'
                alt='Of Creatures and Realms'
                width={180}
                height={60}
                className='w-auto h-12 transition-transform duration-300 group-hover:scale-105'
              />
              {/* Efecto de brillo en hover */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#EA9F23]/0 via-[#EA9F23]/20 to-[#EA9F23]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='flex items-center space-x-2 px-4 py-2 text-[#BAA488] hover:text-[#EA9F23] font-medium text-sm transition-all duration-300 rounded-lg hover:bg-[#2D2542]/50 group'
              >
                <span className='group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}

            {/* CTA Button
            <div className='ml-4 pl-4 border-l border-[#BAA488]/30'>
              <button className='px-6 py-2 bg-gradient-to-r from-[#EA9F23] to-[#BAA488] text-[#171613] font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-[#EA9F23]/25 transition-all duration-300 transform hover:-translate-y-0.5'>
                Obtener Juego
              </button>
            </div>
             */}
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden p-2 text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-6 space-y-2 bg-[#2D2542]/95 backdrop-blur-sm border-t border-[#BAA488]/20 rounded-b-2xl mt-2'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center space-x-3 px-4 py-3 text-[#BAA488] hover:text-[#EA9F23] hover:bg-[#171613]/50 rounded-lg transition-all duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className='font-medium'>{item.name}</span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className='pt-4 px-4 border-t border-[#BAA488]/20 mt-4'>
                <button className='w-full px-6 py-3 bg-gradient-to-r from-[#EA9F23] to-[#BAA488] text-[#171613] font-bold rounded-lg hover:shadow-lg transition-all duration-300'>
                  Obtener Juego
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Decorative border effect */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EA9F23] to-transparent'></div>
    </header>
  );
}
