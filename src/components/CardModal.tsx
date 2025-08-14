import { useEffect } from 'react';
import Image from 'next/image';
import { CardItem } from '@/types';
import { splitByDash } from '@/lib/stringManipulations';

interface CardModalProps {
  card: CardItem | null;
  onClose: () => void;
}

// Helper functions
const formatName = (v: string) => v.replace(/_/g, ' ');
const formatText = (v: string | null | undefined) => v || '—';

export default function CardModal({ card, onClose }: CardModalProps) {
  // Close modal with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (card) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [card, onClose]);

  if (!card) return null;

  const [passiveTitle, passiveDescription] = splitByDash(card.passive);

  return (
    <div
      className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4 py-4'
      onClick={onClose}
    >
      <div
        className='w-full max-w-4xl h-full md:h-auto bg-[#171613] rounded-2xl border border-[#BAA488]/30 shadow-2xl overflow-y-auto relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='z-50 absolute top-4 right-4 rounded-full w-9 aspect-square grid place-items-center bg-[#EA9F23] text-[#171613] hover:bg-[#BAA488] transition-colors'
          aria-label='Close'
          title='Close'
        >
          ×
        </button>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          {/* Card image */}
          <div className='relative bg-black aspect-[1464/2088]'>
            <Image
              src={card.imageUrl}
              alt={formatName(card.name)}
              fill
              className='object-contain p-4'
              sizes='(max-width: 768px) 90vw, 40vw'
              priority
            />
          </div>

          {/* Card details */}
          <div className='p-6 md:p-8 flex flex-col gap-4'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h2 className='text-xl md:text-2xl font-bold text-[#EA9F23] leading-tight mr-12'>
                  {formatName(card.name)}
                </h2>
                {card.artist && (
                  <p className='text-xs text-gray-400'>
                    <Image
                      src={'/icons/artist-icon.png'}
                      alt='artist icon'
                      className='object-contain inline-block mr-1'
                      width={20}
                      height={20}
                    />
                    {card.artist}
                  </p>
                )}
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              <span className='px-3 py-1 rounded-full bg-gradient-to-r from-[#BAA488] to-[#EA9F23] text-[#171613] font-bold text-xs'>
                {card.type}
              </span>
              {card.affinity && (
                <span className='px-3 py-1 rounded-full border border-[#EA9F23] text-[#EA9F23] font-semibold text-xs'>
                  {card.affinity}
                </span>
              )}
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-2'>
              {card.manaCost !== null && (
                <div className='bg-[#BAA488]/10 p-2 rounded flex flex-col items-center'>
                  <p className='text-xs text-[#BAA488]'>Mana Cost</p>
                  <div
                    className={`flex items-center gap-1 font-bold ${
                      card.hp !== null && 'mt-2'
                    }`}
                  >
                    <Image
                      src='/icons/mana.png'
                      alt='mana icon'
                      className='object-contain'
                      width={14}
                      height={14}
                    />
                    <span>{card.manaCost}</span>
                  </div>
                </div>
              )}

              {card.manaBonus !== null && (
                <div className='bg-[#BAA488]/10 p-2 rounded flex flex-col items-center'>
                  <p className='text-xs text-[#BAA488]'>Mana Bonus</p>
                  <p className={`font-bold ${card.hp !== null && 'mt-2'}`}>
                    {card.manaBonus}
                  </p>
                </div>
              )}

              {card.hp !== null && (
                <div className='bg-[#BAA488]/10 p-2 rounded flex flex-col items-center'>
                  <p className='text-xs text-[#BAA488]'>Health</p>
                  <p
                    className={`font-bold ${card.realmCost !== null && 'mt-2'}`}
                  >
                    {card.hp}
                  </p>
                </div>
              )}

              {card.realmCost !== null && (
                <div className='bg-[#BAA488]/10 p-2 rounded flex flex-col items-center'>
                  <p className='text-xs text-[#BAA488]'>Realm Cost</p>
                  <div className='relative flex items-center justify-center'>
                    <Image
                      src='/icons/realm-cost.png'
                      alt='realm cost icon'
                      className='object-contain'
                      width={32}
                      height={32}
                    />
                    <span className='font-bold absolute top-5 left-[12.3px]'>
                      {card.realmCost}
                    </span>
                  </div>
                </div>
              )}

              {card.probability && (
                <div className='bg-[#BAA488]/10 p-2 rounded flex flex-col items-center'>
                  <p className='text-xs text-[#BAA488]'>Drop Rate</p>
                  <p
                    className={`font-bold ${
                      card.realmCost !== null && 'mt-2 sm:mt-0'
                    }`}
                  >
                    {card.probability * 100}%
                  </p>
                </div>
              )}
            </div>

            {/* Card text */}
            <div className='mt-2 space-y-3'>
              {card.flavorText && (
                <p className='italic text-gray-300 text-sm mb-4'>
                  &quot;{card.flavorText}
                  {card.auxiliaryText && ` ${card.auxiliaryText}`}
                  &quot;
                </p>
              )}

              {card.passive && (
                <div>
                  <p className='text-[#BAA488] text-sm'>Passive Ability:</p>
                  <p className='text-gray-300 text-sm'>
                    <b>{passiveTitle}</b> - {passiveDescription}
                  </p>
                </div>
              )}
            </div>

            {/* Attacks */}
            {card.attacks && card.attacks.length > 0 && (
              <div className='mt-3'>
                <h3 className='text-[#EA9F23] font-bold mb-2'>Attacks</h3>
                <div className='space-y-3'>
                  {card.attacks.map((attack, index) => (
                    <div
                      key={index}
                      className='bg-[#1a1713] p-3 rounded border border-[#BAA488]/20'
                    >
                      <div className='flex justify-between items-start'>
                        <h4 className='font-bold text-[#EA9F23]'>
                          {attack.name}
                        </h4>
                        <div className='flex gap-2'>
                          <span className='text-xs bg-[#EA9F23] text-[#171613] px-2 py-1 rounded'>
                            Cost: {attack.cost}
                          </span>
                          {attack.damage && (
                            <span className='text-xs bg-red-600 text-white px-2 py-1 rounded'>
                              Damage: {attack.damage}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className='text-gray-300 text-sm mt-1'>
                        {attack.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className='mt-auto pt-4 border-t border-[#BAA488]/20 text-xs text-gray-400'>
              <p className='flex'>
                <span className='text-[#BAA488]'>Expansion:</span>
                <Image
                  src={card.expansionIconUrl}
                  alt='realm cost icon'
                  className='object-contain mr-1 ml-1'
                  width={12}
                  height={12}
                />
                {formatText(card.expansionName)}
              </p>
              <p>
                <span className='text-[#BAA488]'>Year:</span> {card.releaseYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
