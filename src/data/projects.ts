export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  tags: string[];
  repoUrl?: string; // Legacy support
  repoLinks?: { label: string; url: string }[]; // New support for multiple repos
  demoUrl?: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-nutrivision",
    title: "AI NutriVision",
    shortDescription: "Sistema avanzado de análisis nutricional mediante visión por computadora e IA Generativa.",
    fullDescription: "Plataforma de análisis dietético impulsada por modelos multimodales (Gemini 1.5 Flash). El sistema procesa imágenes de alimentos en tiempo real para detectar ingredientes y calcular información nutricional precisa. Arquitectura de microservicios contenerizada con Docker, orquestando un backend en FastAPI para el procesamiento de IA y una API RESTful robusta. Diseñado para alta disponibilidad y escalabilidad horizontal.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop"
    ],
    tags: ["Python", "Gemini AI", "FastAPI", "Docker", "Microservices"],
    repoLinks: [
      { label: "Backend AI", url: "https://github.com/Jeysson16/backend-comidas" },
      { label: "API Core", url: "https://github.com/Jeysson16/api-comidas" }
    ],
    featured: true
  },
  {
    id: "enterprise-chat",
    title: "Enterprise Real-Time Chat",
    shortDescription: "Plataforma de comunicación corporativa modular con arquitectura asíncrona.",
    fullDescription: "Solución de mensajería instantánea empresarial construida sobre .NET Core y SignalR para comunicación bidireccional de baja latencia. El frontend en Angular implementa patrones reactivos avanzados y Lazy Loading para optimizar el rendimiento. Sistema seguro con autenticación JWT y roles granulares. Base de datos SQL Server optimizada para consultas de alto volumen.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    tags: ["Angular", ".NET Core", "SignalR", "TypeScript", "SQL Server"],
    repoLinks: [
      { label: "Frontend", url: "https://github.com/Jeysson16/chat-frontend" },
      { label: "Backend", url: "https://github.com/Jeysson16/chat-backend" }
    ]
  },
  {
    id: "vivegood-ecosystem",
    title: "ViveGood Ecosystem",
    shortDescription: "Suite móvil nativa para gestión de bienestar con arquitectura Clean.",
    fullDescription: "Ecosistema móvil desarrollado en Flutter aplicando estrictamente Clean Architecture para garantizar mantenibilidad y testabilidad. Implementa el patrón BLoC para una gestión de estado predecible y reactiva. Integración 'Offline-first' con Supabase, asegurando funcionalidad crítica sin conexión a internet. UX/UI pulida siguiendo Material Design 3.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Supabase"],
    repoLinks: [
      { label: "App Mobile", url: "https://github.com/Jeysson16/vive-good-app" },
      { label: "Core Logic", url: "https://github.com/Jeysson16/vive-good" }
    ]
  },
  {
    id: "gastrosense-ai",
    title: "GastroSense AI",
    shortDescription: "Sistema predictivo de riesgos de salud basado en Deep Learning.",
    fullDescription: "Pipeline de Machine Learning end-to-end para la prevención de gastritis. Utiliza modelos de TensorFlow/PyTorch entrenados con datasets clínicos para identificar patrones de riesgo. El sistema ingesta datos de hábitos alimenticios y genera predicciones probabilísticas personalizadas. Frontend interactivo para visualización de datos médicos complejos.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "Deep Learning", "Scikit-learn", "Data Science"],
    repoLinks: [
      { label: "AI System", url: "https://github.com/Jeysson16/gastro-sense" },
      { label: "DL App", url: "https://github.com/Jeysson16/dl-gastroapp" }
    ]
  },
  {
    id: "medical-results-platform",
    title: "Medical Results Platform",
    shortDescription: "SaaS Fullstack para gestión de laboratorios clínicos y reportes dinámicos.",
    fullDescription: "Plataforma integral para la administración de resultados médicos. Backend en Node.js/Express diseñado bajo principios de seguridad HIPAA-compliant. Generación dinámica de reportes PDF con Puppeteer. Frontend optimizado para dashboards administrativos de alta densidad de datos. Gestión eficiente de bases de datos no relacionales con MongoDB.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "TypeScript", "SaaS"],
    repoLinks: [
      { label: "Backend API", url: "https://github.com/Jeysson16/medical-system-backend" },
      { label: "Frontend", url: "https://github.com/Jeysson16/medical-system" }
    ]
  },
  {
    id: "gmanager-erp",
    title: "GManager ERP",
    shortDescription: "Solución ERP monolítica robusta para facturación y CRM.",
    fullDescription: "Sistema empresarial integral desarrollado en PHP/Laravel siguiendo el patrón MVC. Maneja lógica de negocio compleja para facturación electrónica, control de inventarios multi-bodega y reportes contables automatizados. Base de datos MySQL normalizada para garantizar integridad transaccional en operaciones críticas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["PHP", "Laravel", "MySQL", "MVC", "Enterprise"],
    repoUrl: "https://github.com/Jeysson16/GManager"
  },
  {
    id: "jeytracker-mobile",
    title: "JeyTracker Mobile",
    shortDescription: "Gestor de productividad personal con enfoque en Clean Architecture.",
    fullDescription: "Aplicación móvil nativa desarrollada en Flutter para la gestión eficiente de objetivos y tareas diarias. Implementa el patrón BLoC para una gestión de estado predecible y una arquitectura por capas que facilita el testeo y la escalabilidad. Diseñada con un enfoque 'Offline-First'.",
    tags: ["Flutter", "Dart", "BLoC", "SQLite"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop", // Placeholder
    repoUrl: "https://github.com/Jeysson16/JeyTracker",
    demoUrl: null,
    gallery: []
  },
  {
    id: "restoflow-orders",
    title: "RestoFlow Orders",
    shortDescription: "App de toma de pedidos para restaurantes en tiempo real.",
    fullDescription: "Solución móvil para agilizar el flujo de trabajo de los camareros. Permite generar comandas, enviarlas a cocina y gestionar mesas. Desarrollada en Flutter con una interfaz optimizada para pantallas táctiles y uso rápido en entornos de alta presión.",
    tags: ["Flutter", "Mobile UX", "Firebase"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop", // Placeholder
    repoUrl: "https://github.com/Jeysson16/AppPedidosRestaurant",
    demoUrl: null,
    gallery: []
  },
  {
    id: "neural-task-ai",
    title: "NeuralTask AI Core",
    shortDescription: "Motor de Inteligencia Artificial para análisis de patrones de productividad.",
    fullDescription: "Experimento de Machine Learning diseñado para analizar hábitos de cumplimiento de tareas. Utiliza redes neuronales (Python/TensorFlow) para aprender de los datos del usuario y sugerir optimizaciones de tiempo. Se integra como microservicio para aplicaciones de productividad.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "AI"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop", // Placeholder
    repoUrl: "https://github.com/Jeysson16/task_ai",
    demoUrl: null,
    gallery: []
  }
];
