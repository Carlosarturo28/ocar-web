import { Calendar, MapPin, Sword, Trophy, Clock } from 'lucide-react';
import Link from 'next/link';

type Event = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  prize: string;
  runnerUpPrize: string;
  status: string;
};

const tournaments: Event[] = [
  /*   {
    id: 1,
    name: 'Torneo del Amanecer Épico',
    date: '2023-11-25',
    time: '16:00',
    location: 'Taberna del Dragón Durmiente, Valencia',
    prize: 'Edición limitada del Dragón de Oro',
    runnerUpPrize: 'Mazo exclusivo de cartas foil',
    status: 'Próximamente',
  },
  {
    id: 2,
    name: 'Copa de las Sombras',
    date: '2023-12-16',
    time: '18:30',
    location: 'Castillo de los Hechizos, Barcelona',
    prize: 'Reliquia Arcano del Vacío',
    runnerUpPrize: 'Set de dados místicos',
    status: 'Próximamente',
  },
  {
    id: 3,
    name: 'Torneo del Equinoccio',
    date: '2023-10-14',
    time: '12:00',
    location: 'Bosque de los Antiguos, Madrid',
    prize: 'Cáliz de la Eternidad',
    runnerUpPrize: 'Colección de gemas de mana',
    status: 'Finalizado',
  }, */
];

export default function Tournaments() {
  return (
    <main className='min-h-screen p-6 sm:p-8 bg-[#171613] text-gray-200'>
      <div className='max-w-4xl mx-auto pt-28'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#EA9F23] text-center mb-3'>
          Tournaments of the Realm
        </h1>
        <p className='text-center text-gray-400 mb-10 text-sm sm:text-base'>
          Prove your worth and win legendary prizes
        </p>

        {tournaments.length === 0 ? (
          <p className='text-xl font-bold text-center text-amber-900 mb-12'>
            No tournaments available at the moment.
          </p>
        ) : (
          <div className='space-y-8'>
            {tournaments.map((tournament) => {
              const isFinished = tournament.status === 'Finalizado';
              return (
                <div
                  key={tournament.id}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    isFinished
                      ? 'border-gray-700 bg-[#1a1917]'
                      : 'border-[#EA9F23] bg-[#1e1c18] hover:shadow-lg hover:shadow-[#EA9F23]/20'
                  }`}
                >
                  <div className='p-6 flex flex-col h-full'>
                    {/* Status + Title */}
                    <div className='flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-2 mb-3'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          isFinished
                            ? 'bg-gray-800 text-gray-400'
                            : 'bg-[#EA9F23]/10 text-[#EA9F23]'
                        }`}
                      >
                        {tournament.status}
                      </span>
                      <h2 className='text-lg sm:text-xl font-bold text-[#EA9F23]'>
                        {tournament.name}
                      </h2>
                    </div>

                    {/* Date, Time, Location */}
                    <div className='space-y-1 mb-4 text-sm'>
                      <div className='flex items-center'>
                        <Calendar className='w-4 h-4 mr-2 text-gray-400' />
                        <span>
                          {new Date(tournament.date).toLocaleDateString(
                            'es-ES',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Clock className='w-4 h-4 mr-2 text-gray-400' />
                        <span>{tournament.time}</span>
                      </div>
                      <div className='flex items-center'>
                        <MapPin className='w-4 h-4 mr-2 text-gray-400' />
                        <span>{tournament.location}</span>
                      </div>
                    </div>

                    {/* Prizes */}
                    <div className='mt-auto pt-4 border-t border-gray-800'>
                      <h3 className='text-sm font-semibold text-[#EA9F23] mb-2 flex items-center'>
                        <Trophy className='w-4 h-4 mr-2' /> Prizes
                      </h3>
                      <div className='grid sm:grid-cols-2 gap-3'>
                        <div className='bg-[#171613] p-3 rounded-lg'>
                          <p className='font-medium text-gray-300 flex items-center text-sm'>
                            <Sword className='w-4 h-4 mr-2 text-[#EA9F23]' />
                            Winner:
                          </p>
                          <p className='text-[#EA9F23] mt-1 text-sm'>
                            {tournament.prize}
                          </p>
                        </div>
                        <div className='bg-[#171613] p-3 rounded-lg'>
                          <p className='font-medium text-gray-300 flex items-center text-sm'>
                            <Sword className='w-4 h-4 mr-2 text-gray-400' />
                            Runner-up:
                          </p>
                          <p className='text-gray-300 mt-1 text-sm'>
                            {tournament.runnerUpPrize}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    {!isFinished && (
                      <div className='mt-5 max-w-40'>
                        <Link
                          href='#'
                          className='block text-center px-4 py-2 bg-[#EA9F23] text-[#171613] rounded-md font-medium hover:bg-[#d18c1d] transition-colors text-sm'
                        >
                          Sign Up Now
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Section */}
        <div className='mt-12 text-center text-gray-400 text-sm sm:text-base'>
          <p>Do you want to organize a tournament in your venue?</p>
          <Link
            href='mailto:ofcreaturesandrealms@gmail.com'
            className='text-[#EA9F23] hover:underline mt-1 inline-block'
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
