'use client';
import Link from 'next/link';
import { Users, Sparkles, Crown } from 'lucide-react';

export default function CTA() {
  return (
    <section className='py-20 bg-gradient-to-b from-[#2D2542] via-[#171613] to-[#2D2542] text-white relative overflow-hidden'>
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('/images/battle-scene.png')] opacity-10"></div>
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EA9F23] to-transparent'></div>
      <div className='absolute -top-40 -right-40 w-80 h-80 bg-[#EA9F23]/10 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-[#BAA488]/10 rounded-full blur-3xl'></div>

      {/* Partículas mágicas */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='absolute animate-pulse'
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            <Sparkles className='w-6 h-6 text-[#EA9F23]/20' />
          </div>
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-5xl mx-auto text-center'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#EA9F23]/20 to-[#BAA488]/20 rounded-full border border-[#EA9F23]/30 text-[#EA9F23] font-bold text-sm mb-8 backdrop-blur-sm'>
            <Crown className='w-4 h-4 mr-2' />
            ENTER THE REALMS
          </div>

          {/* Título principal */}
          <h2 className='text-5xl lg:text-7xl font-bold leading-tight mb-8'>
            <span className='font-cinzel'>Your Realm</span>
            <br />
            <span className='bg-gradient-to-r from-[#BAA488] via-[#EA9F23] to-[#BAA488] bg-clip-text text-transparent'>
              Awaits
            </span>
          </h2>

          {/* Subtítulo */}
          <p className='text-xl lg:text-2xl text-[#BAA488] mb-12 leading-relaxed max-w-4xl mx-auto'>
            Join an ever-growing community of adventurers. Forge alliances,
            discover mythical creatures, and shape the fate of the realms.
          </p>

          {/* Estadísticas de comunidad */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            <div className='bg-[#171613]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#BAA488]/20'>
              <div className='text-3xl font-bold text-[#EA9F23] mb-2'>2+</div>
              <div className='text-sm text-[#BAA488]'>Adventurers</div>
            </div>
            <div className='bg-[#171613]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#BAA488]/20'>
              <div className='text-3xl font-bold text-[#EA9F23] mb-2'>28+</div>
              <div className='text-sm text-[#BAA488]'>Unique Cards</div>
            </div>
            <div className='bg-[#171613]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#BAA488]/20'>
              <div className='text-3xl font-bold text-[#EA9F23] mb-2'>4</div>
              <div className='text-sm text-[#BAA488]'>Mythic Realms</div>
            </div>
            <div className='bg-[#171613]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#BAA488]/20'>
              <div className='text-3xl font-bold text-[#EA9F23] mb-2'>∞</div>
              <div className='text-sm text-[#BAA488]'>Stories</div>
            </div>
          </div>

          {/* Botón de comunidad */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'>
            <Link
              href='https://discord.gg/ocar' // enlace real de Discord
              target='_blank'
              className='inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#EA9F23] to-[#BAA488] text-[#171613] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#EA9F23]/25 transition-all duration-300 transform hover:-translate-y-1 group'
            >
              <Users className='w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300' />
              Join the Community
            </Link>
          </div>

          {/* Llamado final */}
          <p className='text-[#BAA488] text-lg max-w-3xl mx-auto'>
            The gates are open. Step into a world where every card tells a story
            and every player shapes the destiny of the realms.
          </p>
        </div>
      </div>
    </section>
  );
}
