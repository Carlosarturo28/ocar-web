'use client';
// src/components/sections/Features.tsx
import {
  Zap,
  Shield,
  Users,
  Crown,
  Scroll,
  Sparkles,
  Castle,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Strategic Combat',
      description:
        'A deep battle system where every decision matters. Combine creatures, spells, and artifacts to forge unique strategies.',
      color: 'bg-amber-900/20 text-[#EA9F23] border border-[#EA9F23]/30',
    },
    {
      icon: <Crown className='w-8 h-8' />,
      title: 'Mystical Realms',
      description:
        'Explore 4 unique realms, each with its own creatures, magic, and ancient secrets waiting to be unveiled.',
      color: 'bg-purple-900/20 text-[#BAA488] border border-[#BAA488]/30',
    },
    {
      icon: <Sparkles className='w-8 h-8' />,
      title: 'Rune System',
      description:
        'Harness the power of ancient runes to enhance your creatures and unleash devastating magic.',
      color: 'bg-blue-900/20 text-[#EA9F23] border border-[#EA9F23]/30',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Legendary Creatures',
      description:
        'Summon dragons, angels, demons, and other mythical beings—each with unique abilities and lore.',
      color: 'bg-red-900/20 text-[#BAA488] border border-[#BAA488]/30',
    },
    {
      icon: <Castle className='w-8 h-8' />,
      title: 'Fight and Conquer',
      description:
        'Challenge other realm masters in epic battles and make your Realm the ultimate dominion.',
      color: 'bg-green-900/20 text-[#EA9F23] border border-[#EA9F23]/30',
    },
    {
      icon: <Scroll className='w-8 h-8' />,
      title: 'Deep Lore',
      description:
        'Immerse yourself in a rich narrative spanning millennia, filled with prophecies, legends, and untold stories.',
      color: 'bg-indigo-900/20 text-[#BAA488] border border-[#BAA488]/30',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-[#171613] to-[#2D2542] relative'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/parchment-texture.png')] opacity-5"></div>
      <div className='absolute top-20 left-10 w-64 h-64 bg-[#EA9F23]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-64 h-64 bg-[#BAA488]/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-[#2D2542] border border-[#BAA488]/30 rounded-full text-[#BAA488] font-medium text-sm mb-6'>
            ⚔️ GAME FEATURES
          </div>
          <h2 className='text-4xl lg:text-6xl font-bold text-white mb-6'>
            A World of{' '}
            <span className='bg-gradient-to-r from-[#BAA488] to-[#EA9F23] bg-clip-text text-transparent'>
              Infinite Adventures
            </span>
          </h2>
          <p className='text-xl text-[#BAA488] max-w-4xl mx-auto leading-relaxed'>
            Of Creatures and Realms is more than just a card game—it is a
            gateway to universes where strategy, magic, and adventure converge
            in every match.
          </p>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-[#171613]/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-[#2D2542]/50 transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden'
            >
              {/* Decorative background */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#EA9F23]/5 to-[#BAA488]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className='text-xl font-bold text-white mb-4 relative z-10'>
                {feature.title}
              </h3>
              <p className='text-[#BAA488] leading-relaxed relative z-10'>
                {feature.description}
              </p>

              {/* Decorative line */}
              <div className='mt-6 w-12 h-1 bg-gradient-to-r from-[#EA9F23] to-[#BAA488] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
