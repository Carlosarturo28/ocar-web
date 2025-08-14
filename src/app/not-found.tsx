// app/not-found.tsx
import React from 'react';
import Image from 'next/image';

function NotFound() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-[#121212] via-[#1e192e] to-[#121212] flex items-center justify-center p-4 relative'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'></div>

      {/* Main content container */}
      <div className='relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4 sm:px-6'>
        {/* Image container - CENTRADA */}
        <div className='relative mb-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[16/7]'>
          <Image
            src='/images/404.png'
            alt='Page not found - Echoes of the First Light'
            fill
            className='object-contain'
            priority
          />
        </div>

        {/* Text content */}
        <div className='space-y-4 md:space-y-6 mb-8 md:mb-12'>
          {/* Title */}
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            <span className='bg-gradient-to-r from-[#EA9F23] to-[#BAA488] bg-clip-text text-transparent'>
              404 - Lost in the Echoes
            </span>
          </h2>

          {/* Subtitle */}
          <p className='text-base sm:text-lg md:text-xl text-[#BAA488] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0'>
            The page you seek has faded from this realm. Let the First Light
            guide you back to familiar paths.
          </p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;

// Metadata (opcional)
export const metadata = {
  title: '404 - Page Not Found',
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};
