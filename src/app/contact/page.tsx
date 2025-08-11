// src/app/contact/page.tsx
'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email',
      details: 'info@ocar.com',
      description: 'Respuesta en menos de 2 horas',
      action: 'mailto:info@ocar.com',
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Teléfono',
      details: '+57 300 123 4567',
      description: 'Lun - Vie, 8:00 AM - 6:00 PM',
      action: 'tel:+573001234567',
    },
    {
      icon: <MessageCircle className='w-6 h-6' />,
      title: 'WhatsApp',
      details: '+57 300 123 4567',
      description: 'Disponible 24/7',
      action: 'https://wa.me/573001234567',
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Oficina',
      details: 'Bogotá, Colombia',
      description: 'Calle 100 #18-25, Piso 8',
      action: '#',
    },
  ];

  const services = [
    'Desarrollo Web',
    'Diseño UX/UI',
    'Marketing Digital',
    'Consultoría Estratégica',
    'Seguridad Web',
    'Soporte Técnico',
    'Otro',
  ];

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Hablemos de tu{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                proyecto
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Estamos aquí para escucharte y ayudarte a hacer realidad tus
              ideas. Contáctanos por tu medio preferido o completa el
              formulario.
            </p>
            <div className='inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium'>
              ✅ Respuesta garantizada en menos de 24 horas
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : undefined}
                rel={
                  info.action.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {info.icon}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {info.title}
                </h3>
                <p className='text-xl font-bold text-blue-600 mb-2'>
                  {info.details}
                </p>
                <p className='text-sm text-gray-500'>{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario y FAQ */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Formulario */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Envíanos un mensaje
              </h2>

              {submitStatus === 'success' && (
                <div className='bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6'>
                  ¡Gracias por tu mensaje! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6'>
                  Hubo un error. Por favor intenta nuevamente.
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Nombre *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder='Tu nombre completo'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder='tu@email.com'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Teléfono
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder='+57 300 123 4567'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Servicio de interés
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    >
                      <option value=''>Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                    placeholder='Cuéntanos sobre tu proyecto, objetivos, presupuesto aproximado y cualquier detalle que consideres importante...'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2'></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} className='mr-2' />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ y información adicional */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Preguntas Frecuentes
              </h2>

              <div className='space-y-6'>
                <div className='bg-white rounded-xl p-6 shadow-md'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    ¿Cuánto tiempo toma un proyecto?
                  </h3>
                  <p className='text-gray-600'>
                    Depende del alcance, pero típicamente entre 2-8 semanas. Te
                    daremos tiempos específicos en la propuesta inicial.
                  </p>
                </div>

                <div className='bg-white rounded-xl p-6 shadow-md'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    ¿Ofrecen consulta gratuita?
                  </h3>
                  <p className='text-gray-600'>
                    ¡Sí! La primera consulta es completamente gratuita.
                    Analizamos tu proyecto y te damos recomendaciones sin
                    compromiso.
                  </p>
                </div>

                <div className='bg-white rounded-xl p-6 shadow-md'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    ¿Trabajan con empresas pequeñas?
                  </h3>
                  <p className='text-gray-600'>
                    Absolutamente. Tenemos soluciones para todo tipo de
                    empresas, desde startups hasta corporaciones establecidas.
                  </p>
                </div>

                <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6'>
                  <div className='flex items-center mb-4'>
                    <Clock className='w-6 h-6 mr-3' />
                    <h3 className='text-lg font-semibold'>
                      Horario de Atención
                    </h3>
                  </div>
                  <ul className='space-y-2 text-blue-100'>
                    <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
                    <li>Sábados: 9:00 AM - 2:00 PM</li>
                    <li>WhatsApp: 24/7</li>
                    <li>Email: Respuesta en 2 horas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
