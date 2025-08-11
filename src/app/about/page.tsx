// src/app/about/page.tsx
import { Users, Target, Award, Calendar } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ana García',
      role: 'CEO & Fundadora',
      image: '👩‍💼',
      description: 'Más de 10 años liderando proyectos innovadores.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director Técnico',
      image: '👨‍💻',
      description: 'Experto en tecnología con pasión por la excelencia.',
    },
    {
      name: 'María López',
      role: 'Directora de Operaciones',
      image: '👩‍🔧',
      description: 'Garantiza que cada proyecto se ejecute perfectamente.',
    },
  ];

  const values = [
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Orientación a Resultados',
      description:
        'Cada decisión que tomamos está enfocada en generar valor real para nuestros clientes.',
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: 'Trabajo en Equipo',
      description:
        'Creemos en el poder de la colaboración y la diversidad de ideas.',
    },
    {
      icon: <Award className='w-8 h-8' />,
      title: 'Excelencia',
      description:
        'No nos conformamos con lo bueno, siempre buscamos lo excepcional.',
    },
  ];

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Conoce{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                OCAR
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed'>
              Somos una empresa comprometida con la innovación y la excelencia.
              Desde 2018, hemos ayudado a cientos de clientes a alcanzar sus
              objetivos más ambiciosos.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Nuestra Historia
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                OCAR nació de una simple idea: que cada empresa, sin importar su
                tamaño, merece acceso a soluciones de clase mundial. Lo que
                comenzó como un pequeño equipo de apasionados se ha convertido
                en una empresa líder en el sector.
              </p>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Hoy, con más de 500 proyectos exitosos en nuestro haber,
                seguimos comprometidos con nuestra misión original: transformar
                ideas en resultados excepcionales.
              </p>

              <div className='grid grid-cols-2 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>
                    2018
                  </div>
                  <div className='text-sm text-gray-600'>Año de Fundación</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>
                    500+
                  </div>
                  <div className='text-sm text-gray-600'>
                    Proyectos Completados
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
                <Calendar size={48} className='mb-6 text-blue-200' />
                <h3 className='text-2xl font-bold mb-4'>Cronología</h3>
                <ul className='space-y-4'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <div className='font-medium'>2018</div>
                      <div className='text-blue-100 text-sm'>
                        Fundación de OCAR
                      </div>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <div className='font-medium'>2020</div>
                      <div className='text-blue-100 text-sm'>
                        Expansión del equipo
                      </div>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <div className='font-medium'>2023</div>
                      <div className='text-blue-100 text-sm'>
                        500+ proyectos completados
                      </div>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <div className='font-medium'>2024</div>
                      <div className='text-blue-100 text-sm'>
                        Nuevas oficinas y servicios
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Nuestros Valores
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Los principios que guían cada decisión y acción en OCAR.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6'>
                  {value.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Nuestro Equipo
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Las personas extraordinarias que hacen posible todo lo que
              hacemos.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group'
              >
                <div className='text-6xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {member.image}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {member.name}
                </h3>
                <div className='text-blue-600 font-medium mb-4'>
                  {member.role}
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
