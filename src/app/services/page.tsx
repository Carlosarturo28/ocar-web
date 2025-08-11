// src/app/services/page.tsx
import {
  Code,
  Palette,
  Megaphone,
  BarChart3,
  Shield,
  Headphones,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Desarrollo Web',
      description:
        'Sitios web y aplicaciones modernas, rápidas y optimizadas para convertir visitantes en clientes.',
      features: [
        'React & Next.js',
        'Diseño Responsivo',
        'SEO Optimizado',
        'E-commerce',
      ],
      color: 'bg-blue-100 text-blue-600',
      price: 'Desde $1,500',
      duration: '2-6 semanas',
    },
    {
      icon: <Palette className='w-8 h-8' />,
      title: 'Diseño UX/UI',
      description:
        'Diseños atractivos y funcionales que mejoran la experiencia del usuario y aumentan conversiones.',
      features: ['Prototipado', 'Wireframes', 'Design System', 'Testing UX'],
      color: 'bg-purple-100 text-purple-600',
      price: 'Desde $800',
      duration: '1-3 semanas',
    },
    {
      icon: <Megaphone className='w-8 h-8' />,
      title: 'Marketing Digital',
      description:
        'Estrategias integrales para aumentar tu presencia online y generar más leads cualificados.',
      features: ['SEO/SEM', 'Redes Sociales', 'Email Marketing', 'Analytics'],
      color: 'bg-green-100 text-green-600',
      price: 'Desde $600/mes',
      duration: 'Mensual',
    },
    {
      icon: <BarChart3 className='w-8 h-8' />,
      title: 'Consultoría Estratégica',
      description:
        'Análisis profundo de tu negocio para identificar oportunidades y optimizar procesos.',
      features: [
        'Auditoría Digital',
        'Plan de Crecimiento',
        'KPIs',
        'ROI Analysis',
      ],
      color: 'bg-orange-100 text-orange-600',
      price: 'Desde $400',
      duration: '1-2 semanas',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Seguridad Web',
      description:
        'Protege tu negocio digital con nuestras soluciones de seguridad avanzada.',
      features: ['SSL Certificates', 'Firewall Setup', 'Backups', 'Monitoring'],
      color: 'bg-red-100 text-red-600',
      price: 'Desde $200/mes',
      duration: 'Continuo',
    },
    {
      icon: <Headphones className='w-8 h-8' />,
      title: 'Soporte Técnico',
      description:
        'Mantenimiento y soporte continuo para que tu sitio web siempre funcione perfectamente.',
      features: [
        'Soporte 24/7',
        'Actualizaciones',
        'Monitoreo',
        'Optimización',
      ],
      color: 'bg-teal-100 text-teal-600',
      price: 'Desde $150/mes',
      duration: 'Mensual',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description:
        'Analizamos tus necesidades y objetivos para crear la estrategia perfecta.',
    },
    {
      step: '02',
      title: 'Propuesta Personalizada',
      description:
        'Te presentamos un plan detallado con tiempos, costos y entregables específicos.',
    },
    {
      step: '03',
      title: 'Desarrollo',
      description:
        'Nuestro equipo experto ejecuta el proyecto manteniendo comunicación constante.',
    },
    {
      step: '04',
      title: 'Entrega y Soporte',
      description:
        'Entregamos tu proyecto y proporcionamos soporte continuo para tu éxito.',
    },
  ];

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Nuestros{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Servicios
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Soluciones integrales diseñadas para impulsar tu negocio hacia el
              éxito. Desde desarrollo web hasta marketing digital, tenemos todo
              lo que necesitas.
            </p>
            <div className='inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium'>
              ✨ Más de 500 proyectos exitosos
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group'
              >
                {/* Header del servicio */}
                <div className='flex items-center justify-between mb-6'>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className='text-right'>
                    <div className='text-2xl font-bold text-gray-900'>
                      {service.price}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Características */}
                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0'></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href='/contact'
                  className='block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform group-hover:scale-105'
                >
                  Solicitar Cotización
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Nuestro Proceso
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Un enfoque estructurado y transparente que garantiza resultados
              excepcionales en cada proyecto.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {process.map((item, index) => (
              <div key={index} className='text-center relative'>
                {/* Número */}
                <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold mb-6'>
                  {item.step}
                </div>

                {/* Línea conectora (solo en desktop) */}
                {index < process.length - 1 && (
                  <div className='hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-8'></div>
                )}

                {/* Contenido */}
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Conversemos sobre tus objetivos y creemos una solución personalizada
            que impulse tu negocio hacia el éxito.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg'
            >
              Solicitar Consulta Gratuita
            </Link>
            <a
              href='tel:+573001234567'
              className='inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200'
            >
              Llamar: +57 300 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
