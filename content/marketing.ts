export type Locale = "en" | "es";

export const defaultLocale: Locale = "es";
export const contactEmail = "info@tapiscan.com";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  es: "ES"
};

export const waNumber = "+507 6093-4767";

export const demoHref: Record<Locale, string> = {
  en: "https://wa.me/50760934767?text=Hola%2C%20quiero%20ver%20el%20demo%20de%20TapiScan%20con%20mi%20men%C3%BA",
  es: "https://wa.me/50760934767?text=Hola%2C%20quiero%20ver%20el%20demo%20de%20TapiScan%20con%20mi%20men%C3%BA"
};

export const siteCopy = {
  en: {
    nav: [
      { label: "How it works", href: "/#como-funciona" },
      { label: "What's included", href: "/#que-incluye" }
    ],
    cta: {
      demo: "Request demo with my menu",
      restaurants: "See restaurant setup",
      hotels: "See hotel setup",
      industries: "Explore other industries",
      email: "Email info@tapiscan.com"
    },
    header: {
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    footer: {
      eyebrow: "Demo request",
      title: "Tell us what touchpoint you want to turn digital.",
      text: "Send your venue, industry, location, and first touchpoint. We will reply from info@tapiscan.com.",
      note: "Built first for hospitality in Panama, ready to grow by phases."
    },
    home: {
      heroEyebrow: "NFC + QR smart access",
      heroTitle: "Tap. The right page opens.",
      heroText: "TapiScan turns NFC and QR touchpoints into branded menus, service pages, and location-aware experiences — no app required.",
      heroMini: ["No app download", "Table-aware", "Panama-ready"],
      explainerEyebrow: "How it works",
      explainerTitle: "From physical to digital in one tap.",
      explainerText: "Every scan carries context — table, room, zone, or product. The right page opens. Staff get the right information.",
      modulesEyebrow: "Platform layers",
      modulesTitle: "What opens first. What comes next.",
      modulesText: "The guest sees the right page first. The business receives the right context next. Extra tools can be added later.",
      industryEyebrow: "Choose your path",
      industryTitle: "Built for hospitality. Ready for more.",
      industryText: "Restaurants and hotels lead. Other industries follow the same access pattern.",
      finalEyebrow: "Start simple",
      finalTitle: "Launch one touchpoint. Grow from there.",
      finalText: "Send the venue type, location, and first touchpoint you want to launch. We reply from info@tapiscan.com."
    },
    explainer: {
      label: "Live service path",
      venue: "Table 12",
      brand: "Xander's Sandwiches",
      screenTitle: "Menu opened.",
      tableSignal: "Tap detected",
      pageSignal: "Menu opened",
      intentSignal: "Request staged",
      request: "Stage request",
      contextTitle: "Context attached",
      opsTitle: "Staff review",
      opsStatus: "Ready to accept",
      steps: [
        { title: "Tap or scan", text: "The customer taps the NFC stand or scans the QR code." },
        { title: "Right page opens", text: "The correct menu or service page opens right away." },
        { title: "Context is attached", text: "Table, room, zone, or product is identified automatically." },
        { title: "Customer requests", text: "The customer browses, asks, orders, or requests help." },
        { title: "Business receives it", text: "The team receives the request with the right context before it reaches operations." }
      ]
    },
    modules: [
      { title: "Smart access", eyebrow: "NFC + QR", text: "Stands, stickers, and QR fallback open the right destination for any venue or product." },
      { title: "Hosted experience", eyebrow: "Menus and pages", text: "Branded pages carry location context — table, room, zone, or object." },
      { title: "Operations layer", eyebrow: "POS optional", text: "Restaurants add cashier, kitchen, inventory, reports, and payment records when ready." }
    ],
    platformLanes: [
      { title: "What the customer sees", text: "A branded page opens from the right table, room, zone, or product without an app.", items: ["NFC and QR access", "Hosted menus or pages", "Automatic location context"] },
      { title: "What the business receives", text: "The business gets the right request with the right context before it reaches POS, kitchen, or staff.", items: ["Staged service intent", "Staff review and handoff", "Operational context attached"] },
      { title: "What you can add later", text: "Once access is working, add more control, presentation, and commercial layers in phases.", items: ["POS and payment records", "Ad-free hosting", "Reviews, AR, and analytics"] }
    ],
    restaurants: {
      heroEyebrow: "Restaurants",
      heroTitle: "Your menu.\nYour table.\nOne tap.",
      heroText: "TapiScan opens a branded, table-aware digital menu the moment a guest taps the stand. No app. Bilingual. Connected to your operations.",
      heroMini: ["No app download", "Table-aware ordering", "Bilingual"],
      accessEyebrow: "NFC + QR Access",
      accessTitle: "Every table has its own entry point.",
      accessText: "Each stand or QR code knows its location. Table 12 opens Table 12's menu. VIP booth opens the VIP experience. Every tap is context-aware.",
      menuEyebrow: "Interactive Menu",
      menuTitle: "A digital menu that works on any phone.",
      menuText: "Branded categories, product images, notes per item, cart review, bilingual — free with tasteful ads or premium ad-free.",
      flowEyebrow: "Ordering Flow",
      flowTitle: "From tap to kitchen. One connected flow.",
      flowText: "The menu stages intent. POS remains source of truth for orders, inventory, kitchen, and payment.",
      posEyebrow: "TapiScan POS",
      posTitle: "POS stays connected to the same guest flow.",
      posText: "TapiScan keeps the guest menu, staff review, POS, kitchen, payments, and reports working as one controlled restaurant system.",
      rolloutTitle: "Start with access. Scale the operation.",
      arEyebrow: "Coming soon",
      arTitle: "See dishes in AR before ordering.",
      arText: "An optional future layer that lets guests preview selected dishes at the table in augmented reality. Structural groundwork is already in place.",
      finalTitle: "Plan a restaurant demo around one real table flow.",
      finalText: "Use the email template to share the venue type, current menu setup, and first service zone."
    },
    restaurantLanes: [
      {
        title: "Guest experience",
        text: "Branded mobile menus with categories, images, notes, cart review, and bilingual content.",
        items: ["NFC + QR access", "Hosted menu", "Free or premium hosting"]
      },
      {
        title: "Ordering flow",
        text: "Guest builds cart and stages a request. Staff review before anything enters operations.",
        items: ["Safe staged request", "Table context", "Staff review gate"]
      },
      {
        title: "Cashier / waiter",
        text: "Create orders, add items and notes, apply discounts and comps, collect payment, submit.",
        items: ["Order entry", "Item notes", "Discounts and comps"]
      },
      {
        title: "Kitchen",
        text: "Real-time order queue, notes, table context. Mark complete. Auto-refresh. Reflects stock rules.",
        items: ["Live order queue", "Table + notes", "Auto-refresh"]
      },
      {
        title: "Management, reports & inventory",
        text: "Inventory deduction, waste tracking, low-stock alerts, daily reports, CSV export, comp review.",
        items: ["Inventory control", "Sales reports", "CSV export"]
      },
      {
        title: "Hardware, payments & rollout",
        text: "NFC stands, tablets, kitchen printers. Cash, Yappy, card. Add modules in phases.",
        items: ["Stands + tablets + printers", "Yappy, cash, card", "Phased rollout"]
      }
    ],
    rolloutSteps: [
      "Launch smart access and the hosted menu.",
      "Add table, room, or zone context where service needs it.",
      "Enable staff review before requests reach POS.",
      "Add payments, printers, tablets, reports, and reviews in phases."
    ],
    hotels: {
      heroEyebrow: "Hotels",
      heroTitle: "Every space has\nsomething to say.\nOne tap opens it.",
      heroText: "TapiScan puts the right information, service, or request one tap away — in the room, poolside, at the lounge, or anywhere guests are.",
      heroMini: ["No app download", "Zone-aware", "Bilingual"],
      accessEyebrow: "Room Access",
      accessTitle: "The room itself becomes the guide.",
      accessText: "NFC on the desk, nightstand, or door area opens room info, services, and requests — without calling the front desk.",
      zonesEyebrow: "Service Zones",
      zonesTitle: "Poolside. Lounge. Beach club. All connected.",
      zonesText: "Every service area gets its own access point. Guests tap and get the right experience for where they are — not a generic hotel homepage.",
      infoEyebrow: "Guest Information",
      infoTitle: "Everything the guest needs, organized.",
      infoText: "Check-out info, amenities, dining hours, WiFi, local recommendations — always current, no paper required.",
      serviceEyebrow: "Service Requests",
      serviceTitle: "Guests request. Staff responds.",
      serviceText: "Towels, room service direction, housekeeping, feedback — guests submit from the page, staff receives the context.",
      arEyebrow: "Coming soon",
      arTitle: "Show guests the space before they arrive.",
      arText: "An optional future layer for room previews, amenity visualizations, and property tours in augmented reality.",
      finalTitle: "Plan a hotel demo around one service zone.",
      finalText: "Share the property type, first zone, and what you want guests to access from that touchpoint."
    },
    hotelZones: [
      { title: "In-room", text: "Room info, services, check-out details, WiFi, local tips — one tap on the desk stand." },
      { title: "Poolside", text: "Food and drink requests, towel service, activity sign-ups — without leaving the chair." },
      { title: "Lounge", text: "Drinks menu, service requests, event info — tap at any lounge table." },
      { title: "Amenities", text: "Spa booking direction, gym hours, activity schedules — tap at the service desk." },
      { title: "Beach club", text: "Cabana service, menu access, activity sign-ups — zone-aware from any access point." },
      { title: "Guest info", text: "Property map, dining hours, check-out instructions — always up to date." }
    ],
    hotelFlow: [
      "NFC or QR at the right zone opens the right page.",
      "Guest sees relevant info or submits a service request.",
      "Staff receive the request with zone context attached.",
      "No app, no front desk call, no confusion."
    ],
    industries: {
      heroEyebrow: "Other Industries",
      heroTitle: "Smart access for spaces, products, guests, and leads.",
      heroText: "The same NFC and QR foundation supports branded pages for any physical context — information, visualization, service, or follow-up.",
      modulesEyebrow: "Use cases",
      modulesTitle: "One tap. Different destinations.",
      modulesText: "What opens when the code is scanned depends entirely on where it's placed and what the visitor needs.",
      flowTitle: "Place access where attention already exists.",
      flowText: "A showroom item, clinic desk, exhibit label, property sign, or event booth can open the right digital path.",
      finalTitle: "Start with one physical touchpoint.",
      finalText: "Describe the space, object, or service moment you want to make digital."
    },
    industryCards: [
      {
        title: "Furniture & showrooms",
        icon: "🛋️",
        tapItem: "Product tag",
        opens: "Dimensions, materials, care notes, visual preview, lead capture",
        text: "Tap the tag on a sofa — see dimensions, materials, availability, and submit an inquiry."
      },
      {
        title: "Clinics & spas",
        icon: "🌿",
        tapItem: "Desk stand",
        opens: "Service menu, prep instructions, intake form, private feedback",
        text: "Tap at the reception desk — service menu, prep info, intake link, and private feedback."
      },
      {
        title: "Museums & tourism",
        icon: "🏛️",
        tapItem: "Exhibit label",
        opens: "Bilingual exhibit content, guided stops, destination context",
        text: "Tap the exhibit label — bilingual content, audio guide direction, deeper context."
      },
      {
        title: "Real estate",
        icon: "🏠",
        tapItem: "Property sign",
        opens: "Unit details, floor plans, viewing request, contact capture",
        text: "Tap the property sign — floor plan, unit details, viewing request, and contact form."
      },
      {
        title: "Events",
        icon: "🎪",
        tapItem: "Booth stand",
        opens: "Booth info, VIP zone access, schedule, sponsor content, attendee resources",
        text: "Tap at a booth — company info, schedule, resources, and a lead capture flow."
      },
      {
        title: "Retail & service",
        icon: "🏪",
        tapItem: "Product or counter",
        opens: "Product info, service menu, loyalty, feedback",
        text: "Tap at the counter or product — service info, loyalty link, or direct feedback."
      }
    ],
    industryFlow: [
      "Place a stand, sticker, or QR code at the physical moment that matters.",
      "Guest taps or scans — the right branded page opens with relevant context.",
      "Capture attention, service intent, a lead, or a review — no app required."
    ]
  },
  es: {
    nav: [
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Qué incluye", href: "/#que-incluye" }
    ],
    cta: {
      demo: "Pedir demo con mi menú",
      restaurants: "Ver restaurantes",
      hotels: "Ver hoteles",
      industries: "Explorar industrias",
      email: "Escribir a info@tapiscan.com"
    },
    header: {
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
    },
    footer: {
      eyebrow: "Solicitud de demo",
      title: "Cuéntanos qué punto físico quieres digitalizar.",
      text: "Envía tu local, industria, ubicación y primer punto físico. Respondemos desde info@tapiscan.com.",
      note: "Hecho primero para hospitalidad en Panamá, listo para crecer por fases."
    },
    home: {
      heroEyebrow: "Acceso inteligente NFC + QR",
      heroTitle: "Toca. La página correcta abre.",
      heroText: "TapiScan convierte puntos NFC y QR en menús, páginas de servicio y experiencias con contexto de ubicación — sin descargar app.",
      heroMini: ["Sin descargar app", "Con contexto de mesa", "Listo para Panamá"],
      explainerEyebrow: "Cómo funciona",
      explainerTitle: "De físico a digital en un toque.",
      explainerText: "Cada escaneo lleva contexto — mesa, habitación, zona o producto. La página correcta abre. El equipo recibe la información correcta.",
      modulesEyebrow: "Cómo se organiza",
      modulesTitle: "El cliente ve claridad. El negocio recibe contexto.",
      modulesText: "Empieza con acceso claro. Agrega herramientas de operación cuando el local esté listo.",
      industryEyebrow: "Elige tu camino",
      industryTitle: "Diseñado para hospitalidad. Listo para más.",
      industryText: "Restaurantes y hoteles lideran. Otras industrias siguen el mismo patrón de acceso.",
      finalEyebrow: "Empieza simple",
      finalTitle: "Lanza un punto físico. Crece desde ahí.",
      finalText: "Envía tipo de local, ubicación y el primer punto físico que quieres lanzar. Respondemos desde info@tapiscan.com."
    },
    explainer: {
      label: "Ruta de servicio en vivo",
      venue: "Mesa 12",
      brand: "Xander's Sandwiches",
      screenTitle: "Menú abierto.",
      tableSignal: "Toque detectado",
      pageSignal: "Menú abierto",
      intentSignal: "Solicitud preparada",
      request: "Preparar solicitud",
      contextTitle: "Contexto adjunto",
      opsTitle: "Revisión del equipo",
      opsStatus: "Lista para aceptar",
      steps: [
        { title: "Toca o escanea", text: "El cliente toca el stand NFC o escanea el QR. Sin app." },
        { title: "Abre la página", text: "La experiencia de marca carga de inmediato con el destino correcto." },
        { title: "Contexto adjunto", text: "Mesa, habitación, zona o producto viajan con la sesión automáticamente." },
        { title: "El cliente navega", text: "Explora el menú, arma carrito o envía una solicitud de servicio." },
        { title: "El equipo la recibe", text: "Operaciones revisa la solicitud antes de que toque POS, cocina o inventario." }
      ]
    },
    modules: [
      { title: "Acceso inteligente", eyebrow: "NFC + QR", text: "Stands, stickers y QR abren el destino correcto para cualquier local o producto." },
      { title: "Experiencia alojada", eyebrow: "Menús y páginas", text: "Páginas de marca llevan contexto de ubicación — mesa, habitación, zona u objeto." },
      { title: "Operación conectada", eyebrow: "POS opcional", text: "Restaurantes agregan caja, cocina, inventario, reportes y pagos cuando estén listos." }
    ],
    platformLanes: [
      { title: "Lo que ve el cliente", text: "Stands NFC y QR abren la página correcta sin descargar app.", items: ["Acceso NFC y QR", "Menús alojados", "Mesa o zona identificada"] },
      { title: "Lo que recibe el negocio", text: "El equipo revisa la solicitud antes de moverla a POS, cocina o pagos.", items: ["Solicitudes claras", "Revisión del equipo", "Reportes y pagos"] },
      { title: "Lo que puedes sumar", text: "Agrega una presentación más limpia y herramientas de servicio cuando el local esté listo.", items: ["Hosting sin anuncios", "Reseñas y feedback", "AR y analítica"] }
    ],
    restaurants: {
      heroEyebrow: "Restaurantes",
      heroTitle: "Tu menú.\nTu mesa.\nUn toque.",
      heroText: "TapiScan abre un menú digital con contexto de mesa en el momento en que el cliente toca el stand. Sin app. Bilingüe. Conectado a tus operaciones.",
      heroMini: ["Sin descargar app", "Pedidos por mesa", "Bilingüe"],
      accessEyebrow: "Acceso NFC + QR",
      accessTitle: "Cada mesa tiene su propio punto de entrada.",
      accessText: "Cada stand o QR conoce su ubicación. La Mesa 12 abre el menú de la Mesa 12. El VIP abre la experiencia VIP. Cada toque lleva contexto.",
      menuEyebrow: "Menú interactivo",
      menuTitle: "Un menú digital que funciona en cualquier teléfono.",
      menuText: "Categorías, imágenes, notas por ítem, carrito, bilingüe — gratis con anuncios cuidados o premium sin anuncios.",
      flowEyebrow: "Flujo de pedidos",
      flowTitle: "Del toque a cocina. Un flujo conectado.",
      flowText: "El menú prepara la intención. El POS es la fuente de verdad para pedidos, inventario, cocina y pagos.",
      posEyebrow: "TapiScan POS",
      posTitle: "El POS sigue conectado al flujo del cliente.",
      posText: "TapiScan conecta menú, revisión del equipo, POS, cocina, pagos y reportes en un sistema controlado para restaurantes.",
      rolloutTitle: "Empieza con acceso. Escala la operación.",
      arEyebrow: "Próximamente",
      arTitle: "Ve los platos en AR antes de pedir.",
      arText: "Una opción futura para que los clientes vean platos seleccionados en la mesa con realidad aumentada.",
      finalTitle: "Planifica una demo sobre un flujo real de mesa.",
      finalText: "Comparte tipo de local, menú actual y primera zona de servicio."
    },
    restaurantLanes: [
      {
        title: "Experiencia del cliente",
        text: "Menús móviles de marca con categorías, imágenes, notas, carrito y contenido bilingüe.",
        items: ["Acceso NFC + QR", "Menú alojado", "Hosting gratis o premium"]
      },
      {
        title: "Flujo de pedidos",
        text: "El cliente arma carrito o solicita algo. El equipo revisa antes de enviarlo al POS.",
        items: ["Solicitud segura", "Contexto de mesa", "Revisión del equipo"]
      },
      {
        title: "Caja / mesero",
        text: "Crear pedidos, agregar ítems y notas, aplicar descuentos, cobrar y enviar.",
        items: ["Ingreso de pedidos", "Notas por ítem", "Descuentos y cortesías"]
      },
      {
        title: "Cocina",
        text: "Cola en tiempo real, notas y mesa identificada. El equipo marca avances y mantiene el flujo claro.",
        items: ["Cola en vivo", "Mesa + notas", "Auto-refresco"]
      },
      {
        title: "Gerencia, reportes e inventario",
        text: "Deducción de inventario, merma, alertas de stock bajo, reportes diarios, exportación CSV.",
        items: ["Control de inventario", "Reportes de ventas", "Exportación CSV"]
      },
      {
        title: "Hardware, pagos y fases",
        text: "Stands NFC, tablets e impresoras de cocina. Efectivo, Yappy y tarjeta. Listo para operar por fases.",
        items: ["Stands + tablets + impresoras", "Yappy, efectivo, tarjeta", "Operación por fases"]
      }
    ],
    rolloutSteps: [
      "Lanza acceso inteligente y el menú alojado.",
      "Agrega contexto de mesa, habitación o zona donde el servicio lo necesite.",
      "Activa revisión del equipo antes de que las solicitudes lleguen al POS.",
      "Agrega pagos, impresoras, tablets, reportes y reseñas cuando el local esté listo."
    ],
    hotels: {
      heroEyebrow: "Hoteles",
      heroTitle: "Cada espacio tiene\nalgo que decir.\nUn toque lo abre.",
      heroText: "TapiScan pone la información correcta, el servicio o la solicitud a un toque de distancia — en la habitación, en la piscina, en el lounge, o donde estén los huéspedes.",
      heroMini: ["Sin descargar app", "Con contexto de zona", "Bilingüe"],
      accessEyebrow: "Acceso en habitación",
      accessTitle: "La habitación misma se convierte en guía.",
      accessText: "NFC en el escritorio, buró o área de la puerta abre información, servicios y solicitudes — sin llamar a recepción.",
      zonesEyebrow: "Zonas de servicio",
      zonesTitle: "Piscina. Lounge. Beach club. Todo conectado.",
      zonesText: "Cada zona de servicio tiene su propio punto de acceso. Los huéspedes tocan y obtienen la experiencia correcta para donde están.",
      infoEyebrow: "Información del huésped",
      infoTitle: "Todo lo que necesita el huésped, organizado.",
      infoText: "Check-out, amenidades, horarios, WiFi, recomendaciones locales — siempre actualizado, sin papel.",
      serviceEyebrow: "Solicitudes de servicio",
      serviceTitle: "El huésped solicita. El equipo responde.",
      serviceText: "Toallas, room service, housekeeping y feedback: el huésped envía la solicitud y el equipo recibe el contexto.",
      arEyebrow: "Próximamente",
      arTitle: "Muestra el espacio antes de que lleguen.",
      arText: "Una opción futura para mostrar habitaciones, amenidades y recorridos de la propiedad en realidad aumentada.",
      finalTitle: "Planifica una demo alrededor de una zona de servicio real.",
      finalText: "Comparte el tipo de propiedad, la primera zona y qué quieres que el huésped abra desde ese punto."
    },
    hotelZones: [
      { title: "En habitación", text: "Info del hotel, servicios, check-out, WiFi, tips locales — un toque en el stand del escritorio." },
      { title: "Piscina", text: "Pedidos de comida y bebida, solicitud de toallas, actividades — sin salir de la silla." },
      { title: "Lounge", text: "Menú de bebidas, solicitudes de servicio, info de eventos — toque en cualquier mesa." },
      { title: "Amenidades", text: "Reservas de spa, horarios del gimnasio, actividades — toque en el mostrador de servicios." },
      { title: "Beach club", text: "Servicio de cabaña, acceso al menú, actividades — con contexto de zona en cada punto." },
      { title: "Info del huésped", text: "Mapa de la propiedad, horarios de comidas, instrucciones de check-out — siempre actualizado." }
    ],
    hotelFlow: [
      "NFC o QR en la zona correcta abre la página correcta.",
      "El huésped ve información relevante o envía una solicitud de servicio.",
      "El equipo recibe la solicitud con el contexto de zona adjunto.",
      "Sin app, sin llamada a recepción, sin confusión."
    ],
    industries: {
      heroEyebrow: "Otras Industrias",
      heroTitle: "Acceso inteligente para espacios, productos, huéspedes y prospectos.",
      heroText: "La misma base NFC y QR soporta páginas de marca para cualquier contexto físico — información, visualización, servicio o seguimiento.",
      modulesEyebrow: "Casos de uso",
      modulesTitle: "Un toque. Distintos destinos.",
      modulesText: "Lo que abre cuando se escanea el código depende de dónde está colocado y qué necesita el visitante.",
      flowTitle: "Coloca acceso donde ya existe atención.",
      flowText: "Un producto en showroom, recepción, etiqueta de museo, letrero inmobiliario o booth puede abrir la ruta correcta.",
      finalTitle: "Empieza con un punto físico.",
      finalText: "Describe el espacio, objeto o momento de servicio que quieres digitalizar."
    },
    industryCards: [
      {
        title: "Muebles y showrooms",
        icon: "🛋️",
        tapItem: "Etiqueta del producto",
        opens: "Dimensiones, materiales, cuidados, previsualización, captura de prospecto",
        text: "Toca la etiqueta del sofá — dimensiones, materiales, disponibilidad y formulario de consulta."
      },
      {
        title: "Clínicas y spas",
        icon: "🌿",
        tapItem: "Stand en recepción",
        opens: "Menú de servicios, instrucciones previas, intake, feedback privado",
        text: "Toca en recepción — servicios, instrucciones, intake y feedback privado."
      },
      {
        title: "Museos y turismo",
        icon: "🏛️",
        tapItem: "Etiqueta de exhibición",
        opens: "Contenido bilingüe, paradas guiadas, contexto del destino",
        text: "Toca la etiqueta de la exhibición — contenido bilingüe, guía de audio, contexto adicional."
      },
      {
        title: "Bienes raíces",
        icon: "🏠",
        tapItem: "Letrero de propiedad",
        opens: "Detalles de unidad, planos, solicitud de visita, captura de contacto",
        text: "Toca el letrero — planos, detalles de unidad, solicitud de visita y formulario de contacto."
      },
      {
        title: "Eventos",
        icon: "🎪",
        tapItem: "Stand del booth",
        opens: "Info del booth, zona VIP, horario, contenido de patrocinadores, recursos para asistentes",
        text: "Toca en el booth — info de empresa, horario, recursos y captura de prospectos."
      },
      {
        title: "Retail y servicios",
        icon: "🏪",
        tapItem: "Producto o mostrador",
        opens: "Info de producto, menú de servicios, lealtad, feedback",
        text: "Toca en el mostrador o producto — info del servicio, lealtad o feedback directo."
      }
    ],
    industryFlow: [
      "Coloca un stand, sticker o QR en el momento físico que importa.",
      "El visitante toca o escanea — la página de marca correcta abre con contexto relevante.",
      "Captura atención, intención de servicio, un prospecto o una reseña — sin app."
    ]
  }
} as const;
