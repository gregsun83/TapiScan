'use client'
import { useLanguage } from '@/components/providers/language-provider'

const copy = {
  es: {
    title: 'Pruébalo ahora',
    subtitle: "TapiScan ya está funcionando para Xander's Sandwiches en Ciudad de Panamá.",
    demoTitle: 'Demo en vivo',
    demoDesc: 'Escríbenos por WhatsApp y pregunta por el menú, horarios, o haz una reserva de prueba.',
    waButton: 'Escríbenos al WhatsApp',
    bookButton: 'Ver página de reservas',
    bookDesc: "Reserva directamente para Xander's Sandwiches",
    featuresTitle: 'Lo que está funcionando hoy',
    features: [
      'Responde preguntas del menú en español e inglés',
      'Crea, modifica y cancela reservaciones por WhatsApp',
      'Panel del dueño con agenda del día y vista por reserva',
      'Página de estado público para cada cliente',
      'Control del restaurante activo desde el panel',
      'Datos verificados — nunca inventa precios ni horarios',
    ],
    founderTitle: 'Precio de fundador',
    founderDesc: 'Precio especial para los primeros restaurantes en Panamá.',
    setupLabel: 'Configuración inicial',
    setupPrice: '$200',
    monthlyLabel: 'Mensual',
    monthlyPrice: '$99/mes',
    founderNote: 'Incluye: onboarding, configuración de WhatsApp, menú digitalizado, panel de reservaciones.',
    onboardingTitle: 'Cómo empezar',
    steps: [
      'Llámanos o escríbenos para coordinar el onboarding',
      'Configuramos tu número de WhatsApp Business',
      'Digitalizamos tu menú y horarios',
      'Conectamos el panel de reservaciones',
      'Prueba de 7 días — sin riesgo',
    ],
    privacyNote: 'Los datos de tus clientes se almacenan en servidores seguros y nunca se comparten con terceros.',
  },
  en: {
    title: 'Try it now',
    subtitle: "TapiScan is already running for Xander's Sandwiches in Panama City.",
    demoTitle: 'Live demo',
    demoDesc: 'Message us on WhatsApp and ask about the menu, hours, or make a test reservation.',
    waButton: 'Message us on WhatsApp',
    bookButton: 'View booking page',
    bookDesc: "Book directly for Xander's Sandwiches",
    featuresTitle: 'What works today',
    features: [
      'Answers menu questions in Spanish and English',
      'Creates, modifies and cancels reservations via WhatsApp',
      'Owner dashboard with day view and per-reservation detail',
      'Public status page for each customer',
      'Active restaurant control from the dashboard',
      'Verified data — never invents prices or hours',
    ],
    founderTitle: 'Founder pricing',
    founderDesc: 'Special pricing for the first restaurants in Panama.',
    setupLabel: 'Setup',
    setupPrice: '$200',
    monthlyLabel: 'Monthly',
    monthlyPrice: '$99/mo',
    founderNote: 'Includes: onboarding, WhatsApp Business setup, menu digitization, reservations dashboard.',
    onboardingTitle: 'How to get started',
    steps: [
      'Call or message us to schedule your onboarding',
      'We set up your WhatsApp Business number',
      'We digitize your menu and hours',
      'We connect the reservations dashboard',
      '7-day trial — no risk',
    ],
    privacyNote: 'Your customer data is stored on secure servers and never shared with third parties.',
  },
}

export function WaProof() {
  const { locale } = useLanguage()
  const t = copy[locale]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Demo CTAs */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a
            href="https://wa.me/50760934767"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.waButton}
          </a>
          <a
            href="https://tapiscan-reservations.vercel.app/book/xanders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-emerald-600 text-emerald-700 px-6 py-4 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
          >
            {t.bookButton}
          </a>
        </div>

        {/* Features working today */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.featuresTitle}</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {t.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Founder pricing */}
        <div className="border-2 border-emerald-200 rounded-2xl p-6 mb-12 bg-emerald-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.founderTitle}</h3>
          <p className="text-sm text-gray-600 mb-4">{t.founderDesc}</p>
          <div className="flex gap-8 mb-4">
            <div>
              <div className="text-2xl font-bold text-emerald-700">{t.setupPrice}</div>
              <div className="text-xs text-gray-500">{t.setupLabel}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-700">{t.monthlyPrice}</div>
              <div className="text-xs text-gray-500">{t.monthlyLabel}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">{t.founderNote}</p>
        </div>

        {/* Onboarding steps */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.onboardingTitle}</h3>
          <ol className="space-y-3">
            {t.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Privacy note */}
        <p className="text-xs text-gray-400 text-center">{t.privacyNote}</p>
      </div>
    </section>
  )
}
