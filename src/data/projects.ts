export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[]; // Para el carrusel del modal
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "angular-ecommerce",
    title: "Angular E-Commerce Pro",
    shortDescription: "Plataforma de comercio electrónico escalable con gestión de estado avanzada.",
    fullDescription: "Desarrollo completo de una tienda online utilizando Angular 17+ y NgRx para la gestión del estado global. Incluye autenticación con JWT, carrito de compras persistente, pasarela de pagos integrada y un panel de administración para gestión de productos y usuarios. La arquitectura modular permite una fácil escalabilidad y mantenimiento.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ],
    tags: ["Angular", "NgRx", "TypeScript", "Tailwind", "Node.js"],
    github: "https://github.com/Jeysson16/angular-ecommerce", // Placeholder
    demo: "https://angular-ecommerce-demo.vercel.app"
  },
  {
    id: "flutter-delivery",
    title: "Flutter Delivery App",
    shortDescription: "App móvil de delivery con rastreo en tiempo real y notificaciones.",
    fullDescription: "Aplicación móvil multiplataforma (iOS/Android) desarrollada en Flutter. Cuenta con sistema de geolocalización en tiempo real usando Google Maps API, notificaciones push con Firebase Cloud Messaging y un backend robusto en Node.js. Implementa patrones de diseño como BLoC para la gestión de estado y Clean Architecture.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    ],
    tags: ["Flutter", "Dart", "Firebase", "Google Maps", "BLoC"],
    github: "https://github.com/Jeysson16/flutter-delivery", // Placeholder
    demo: "#"
  },
  {
    id: "python-security-audit",
    title: "Security Audit Tool",
    shortDescription: "Herramienta automatizada para auditoría de seguridad y detección de vulnerabilidades.",
    fullDescription: "Script avanzado en Python diseñado para automatizar pruebas de penetración y escaneo de vulnerabilidades en servidores web. Utiliza librerías como Scapy y Requests para análisis de red y headers HTTP. Genera reportes detallados en PDF con las vulnerabilidades encontradas y recomendaciones de mitigación, siguiendo estándares OWASP.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563206067-d52d1a62c1d0?q=80&w=2670&auto=format&fit=crop"
    ],
    tags: ["Python", "Cybersecurity", "Automation", "Scripting"],
    github: "https://github.com/Jeysson16/security-tools", // Placeholder
    featured: true
  },
  {
    id: "task-manager-api",
    title: "Task Manager API",
    shortDescription: "API RESTful de alto rendimiento para gestión de tareas colaborativas.",
    fullDescription: "Backend escalable construido con Node.js y Express (o NestJS). Implementa autenticación segura con JWT, validación de datos con Zod/Joi, y base de datos MongoDB con Mongoose. Incluye documentación automática con Swagger y tests unitarios/integración con Jest.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "Jest", "Swagger"],
    github: "https://github.com/Jeysson16/task-manager-api", // Placeholder
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    shortDescription: "Plataforma inmobiliaria con mapas interactivos y filtrado avanzado.",
    fullDescription: "Frontend moderno desarrollado con React y Astro para máxima velocidad. Integra Mapbox para visualización de propiedades en mapas interactivos. Backend serverless con Firebase Functions. Optimizado para SEO y tiempos de carga ultrarrápidos.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
    tags: ["React", "Astro", "Mapbox", "Firebase"],
    github: "https://github.com/Jeysson16/real-estate-web", // Placeholder
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet Mobile",
    shortDescription: "Billetera digital segura para gestión de criptomonedas.",
    fullDescription: "Billetera móvil segura desarrollada en Flutter. Permite gestión de claves privadas, visualización de saldo en tiempo real conectando con nodos blockchain, y envío/recepción de transacciones. Énfasis total en seguridad y encriptación de datos sensibles en el dispositivo.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2555&auto=format&fit=crop",
    tags: ["Flutter", "Web3", "Blockchain", "Security"],
    github: "https://github.com/Jeysson16/crypto-wallet", // Placeholder
  },
  {
    id: "travel-companion",
    title: "Travel Companion App",
    shortDescription: "Guía de viajes interactiva con realidad aumentada.",
    fullDescription: "Aplicación innovadora que utiliza ARKit/ARCore a través de Flutter para mostrar información turística superpuesta en la cámara del dispositivo. Integra APIs de turismo para obtener datos de puntos de interés cercanos y reseñas de usuarios.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
    tags: ["Flutter", "AR", "Node.js", "GraphQL"],
    github: "https://github.com/Jeysson16/travel-ar", // Placeholder
  },
   {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    shortDescription: "Dashboard de finanzas personales con visualización de datos.",
    fullDescription: "Aplicación web progresiva (PWA) para control de gastos. Utiliza D3.js para gráficos interactivos y complejos. Sincronización en tiempo real entre dispositivos y modo offline-first.",
    image: "https://images.unsplash.com/photo-1554224155-98406856d036?q=80&w=2672&auto=format&fit=crop",
    tags: ["Angular", "D3.js", "PWA", "Firebase"],
    github: "https://github.com/Jeysson16/finance-tracker", // Placeholder
  }
];
