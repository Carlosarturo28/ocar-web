import { CardItem } from '@/app/database/page';
import Image from 'next/image';

interface CardGridProps {
  cards: CardItem[];
  onCardSelect: (card: CardItem) => void;
}

// Helper function
const formatName = (v: string) => v.replace(/_/g, ' ');

export default function CardGrid({ cards, onCardSelect }: CardGridProps) {
  return (
    <main className='pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {cards.length === 0 ? (
          <p className='text-center text-gray-400 py-20'>No cards found.</p>
        ) : (
          <div className='grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => onCardSelect(card)}
                className='group relative rounded-2xl hover:shadow-[#EA9F23]/30 hover:-translate-y-1 transition-transform border-0'
                aria-label={`See details of ${formatName(card.name)}`}
              >
                <div className='relative aspect-[5/7] p-2'>
                  <Image
                    src={card.imageUrl}
                    alt={formatName(card.name)}
                    fill
                    className='object-contain rounded-md'
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 22vw'
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
