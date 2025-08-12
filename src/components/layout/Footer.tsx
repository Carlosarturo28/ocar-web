'use client';
// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  MessageCircle,
  Users,
  BookOpen,
  Scroll,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/playroom')) return null;
  return (
    <footer className='bg-gradient-to-b from-[#2D2542] to-[#171613] text-white relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/images/ancient-runes.png')] opacity-5"></div>
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EA9F23] to-transparent'></div>

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
          {/* Logo & description */}
          <div className='lg:col-span-2'>
            <div className='mb-6'>
              <Image
                src='/images/logo.svg'
                alt='Of Creatures and Realms'
                width={240}
                height={80}
                className='w-auto h-16'
              />
            </div>
            <p className='text-[#BAA488] mb-6 max-w-md leading-relaxed'>
              Step into a realm of magic and strategy where every card tells a
              story and every match is a new epic adventure waiting to unfold.
            </p>

            {/* Social media */}
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-12 h-12 bg-[#171613] border border-[#BAA488]/30 rounded-lg flex items-center justify-center hover:border-[#EA9F23] hover:text-[#EA9F23] transition-all duration-300 group'
              >
                <Twitter
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-300'
                />
              </a>
              <a
                href='https://instagram.com/ofcreaturesandrealms'
                target='_blank'
                className='w-12 h-12 bg-[#171613] border border-[#BAA488]/30 rounded-lg flex items-center justify-center hover:border-[#EA9F23] hover:text-[#EA9F23] transition-all duration-300 group'
              >
                <Instagram
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-300'
                />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-[#171613] border border-[#BAA488]/30 rounded-lg flex items-center justify-center hover:border-[#EA9F23] hover:text-[#EA9F23] transition-all duration-300 group'
              >
                <Youtube
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-300'
                />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-[#171613] border border-[#BAA488]/30 rounded-lg flex items-center justify-center hover:border-[#EA9F23] hover:text-[#EA9F23] transition-all duration-300 group'
              >
                <MessageCircle
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-300'
                />
              </a>
            </div>
          </div>

          {/* Game links */}
          <div>
            <h3 className='text-lg font-bold text-[#EA9F23] mb-6 flex items-center'>
              <Scroll size={20} className='mr-2' />
              Game
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/rules'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  <BookOpen
                    size={16}
                    className='mr-2 group-hover:scale-110 transition-transform duration-300'
                  />
                  Game Rules
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  <Scroll
                    size={16}
                    className='mr-2 group-hover:scale-110 transition-transform duration-300'
                  />
                  Card Database
                </Link>
              </li>
              <li>
                <Link
                  href='/expansions'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  ✨ Expansions
                </Link>
              </li>
              <li>
                <Link
                  href='/tournament'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  🏆 Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href='/lore'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  📚 Lore & History
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & support */}
          <div>
            <h3 className='text-lg font-bold text-[#EA9F23] mb-6 flex items-center'>
              <Users size={20} className='mr-2' />
              Community
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='mailto:ofcreaturesandrealms@gmail.com'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  <Mail
                    size={16}
                    className='mr-2 group-hover:scale-110 transition-transform duration-300'
                  />
                  Support
                </a>
              </li>
              <li>
                <Link
                  href='/events'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  🎭 Events
                </Link>
              </li>
              <li>
                <Link
                  href='/creators'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  🎨 Content Creators
                </Link>
              </li>
              <li>
                <Link
                  href='/news'
                  className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300 flex items-center group'
                >
                  📰 News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured expansion section */}
        <div className='mt-16 p-8 bg-gradient-to-r from-[#171613] to-[#2D2542] rounded-2xl border border-[#BAA488]/20 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#EA9F23]/5 to-[#BAA488]/5'></div>
          <div className='relative z-10 flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Image
                src='/images/eotfl-symbol.svg' // ruta a tu símbolo
                alt='Echoes of the First Light symbol'
                width={48} // tamaño ajustable
                height={48}
                className='object-contain'
              />
              <div>
                <h4 className='title text-2xl font-bold text-white'>
                  Echoes of the First Light
                </h4>
                <p className='text-[#BAA488]'>
                  The first official expansion is here
                </p>
              </div>
            </div>
            <div className='mt-4 md:mt-0 flex items-center space-x-4'>
              <button className='px-6 py-3 bg-gradient-to-r from-[#EA9F23] to-[#BAA488] text-[#171613] font-bold rounded-lg hover:shadow-lg transition-all duration-300'>
                View Cards
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className='mt-12 pt-8 border-t border-[#BAA488]/20 flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-6 text-sm text-[#BAA488]'>
            <p>
              © {new Date().getFullYear()} Of Creatures and Realms. All rights
              reserved.
            </p>
          </div>

          <div className='mt-4 md:mt-0 flex items-center space-x-6 text-sm'>
            <Link
              href='/privacy'
              className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300'
            >
              Privacy
            </Link>
            <Link
              href='/terms'
              className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300'
            >
              Terms
            </Link>
            <Link
              href='/cookies'
              className='text-[#BAA488] hover:text-[#EA9F23] transition-colors duration-300'
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#EA9F23]/10 rounded-full blur-3xl -translate-x-16 translate-y-16'></div>
        <div className='absolute bottom-0 right-0 w-40 h-40 bg-[#BAA488]/10 rounded-full blur-3xl translate-x-20 translate-y-20'></div>
      </div>
    </footer>
  );
}
