import { Calendar, MapPin, Clock } from 'lucide-react';

type Event = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  speaker?: string;
  status: string;
};

const events: Event[] = [
  {
    id: 1,
    name: 'Charla sobre Magia Elemental',
    date: '2025-09-05',
    time: '17:00',
    location: 'Biblioteca Arcana, Valencia',
    category: 'Educativo',
    description:
      'Aprende los secretos de la magia elemental con demostraciones prácticas.',
    speaker: 'Merlín el Sabio',
    status: 'Próximo',
  },
  {
    id: 2,
    name: 'Exposición de Criaturas Fantásticas',
    date: '2025-09-12',
    time: '10:00',
    location: 'Museo de lo Mágico, Barcelona',
    category: 'Exposición',
    description:
      'Descubre criaturas raras y leyendas del reino en esta exposición única.',
    status: 'Próximo',
  },
];

export default function Events() {
  return (
    <main className='min-h-screen p-6 sm:p-8 bg-[#171613] text-gray-200'>
      <div className='max-w-4xl mx-auto pt-28'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#EA9F23] text-center mb-3'>
          Realm Events
        </h1>
        <p className='text-center text-gray-400 mb-10 text-sm sm:text-base'>
          Stay informed and join the world of adventures
        </p>

        {events.length === 0 ? (
          <p className='text-xl font-bold text-center text-amber-900 mb-12'>
            No events available at the moment.
          </p>
        ) : (
          <div className='space-y-8'>
            {events.map((event) => {
              const isFinished = event.status === 'Finalizado';
              return (
                <div
                  key={event.id}
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
                        {event.status}
                      </span>
                      <h2 className='text-lg sm:text-xl font-bold text-[#EA9F23]'>
                        {event.name}
                      </h2>
                    </div>

                    {/* Date, Time, Location */}
                    <div className='space-y-1 mb-4 text-sm'>
                      <div className='flex items-center'>
                        <Calendar className='w-4 h-4 mr-2 text-gray-400' />
                        <span>
                          {new Date(event.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Clock className='w-4 h-4 mr-2 text-gray-400' />
                        <span>{event.time}</span>
                      </div>
                      <div className='flex items-center'>
                        <MapPin className='w-4 h-4 mr-2 text-gray-400' />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Category & Speaker */}
                    <div className='mb-4 text-sm'>
                      <p className='font-medium text-[#EA9F23]'>
                        Category:{' '}
                        <span className='text-gray-300'>{event.category}</span>
                      </p>
                      {event.speaker && (
                        <p className='font-medium text-[#EA9F23]'>
                          Speaker:{' '}
                          <span className='text-gray-300'>{event.speaker}</span>
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div className='text-gray-300 text-sm'>
                      {event.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Section */}
        <div className='mt-12 text-center text-gray-400 text-sm sm:text-base'>
          <p>Do you want to organize an event in your venue?</p>
          <a
            href='mailto:ofcreaturesandrealms@gmail.com'
            className='text-[#EA9F23] hover:underline mt-1 inline-block'
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
