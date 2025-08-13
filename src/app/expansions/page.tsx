import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    id: 1,
    title: 'Echoes of the First Light',
    image:
      'https://res.cloudinary.com/ofcreaturesandrealms/image/upload/v1754585261/echoes-of-the-first-light_gcbvah.png',
    link: '/database',
  },
];

export default function Expansions() {
  return (
    <main className='min-h-screen p-8 pt-32 bg-[#171613]'>
      <h1 className='text-3xl font-bold text-[#e7bf50] text-center mb-8'>
        Expansions
      </h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {cards.map((card) => (
          <Link key={card.id} href={card.link}>
            <div className='rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[500px] h-80'>
              <div className='relative h-full'>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover'
                  priority={false}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
