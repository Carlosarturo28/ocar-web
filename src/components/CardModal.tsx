import { useEffect } from 'react';
import Image from 'next/image';
import { CardItem } from '@/app/database/page';

interface CardModalProps {
  card: CardItem | null;
  onClose: () => void;
}

// Helper function
const formatName = (v: string) => v.replace(/_/g, ' ');

export default function CardModal({ card, onClose }: CardModalProps) {
  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (card) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div
      className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
    >
      <div
        className='w-full max-w-4xl bg-[#171613] rounded-2xl border border-[#BAA488]/30 shadow-2xl overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {/* Imagen grande */}
          <div className='relative aspect-[5/7] bg-black'>
            <Image
              src={card.imageUrl}
              alt={formatName(card.name)}
              fill
              className='object-contain p-4'
              sizes='(max-width: 768px) 90vw, 40vw'
              priority
            />
          </div>

          {/* Detalles */}
          <div className='p-6 md:p-8 flex flex-col gap-4'>
            <div className='flex items-start justify-between gap-4'>
              <h2 className='text-xl md:text-2xl font-bold text-[#EA9F23] leading-tight'>
                {formatName(card.name)}
              </h2>

              <button
                onClick={onClose}
                className='rounded-full w-9 h-9 grid place-items-center bg-[#EA9F23] text-[#171613] hover:bg-[#BAA488] transition-colors'
                aria-label='Cerrar'
                title='Cerrar'
              >
                ✕
              </button>
            </div>

            <div className='flex flex-wrap gap-2'>
              <span className='px-3 py-1 rounded-full bg-gradient-to-r from-[#BAA488] to-[#EA9F23] text-[#171613] font-bold text-xs'>
                {card.type}
              </span>
              <span className='px-3 py-1 rounded-full border border-[#EA9F23] text-[#EA9F23] font-semibold text-xs'>
                {card.affinity}
              </span>
            </div>

            <div className='mt-2 text-sm text-gray-300'>
              <p>
                <span className='text-[#BAA488]'>Expansión:</span>{' '}
                {card.expansionName}
              </p>
              <p>
                <span className='text-[#BAA488]'>Año:</span> {card.releaseYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
