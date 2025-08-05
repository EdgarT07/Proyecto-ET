// src/data/servicesData.js

export const services = [
    { 
        id: 'reparacion-pc',
        icon: '💻', 
        title: 'Reparación de Laptops y PC', 
        shortDescription: 'Diagnóstico y solución completa para fallas de hardware y software.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Reparacion+de+PC', // Reemplaza con tu imagen
        mainDescription: "Nuestro servicio de reparación de computadoras aborda desde los problemas más comunes hasta las fallas más complejas. Entendemos lo crucial que es tu equipo para tu trabajo y vida diaria, por lo que ofrecemos un diagnóstico rápido y soluciones efectivas para que vuelvas a estar en línea lo antes posible. Utilizamos piezas de alta calidad y las últimas herramientas para garantizar una reparación duradera y confiable.",
        features: [
            'Reemplazo de pantallas, teclados y baterías.',
            'Solución a problemas de sobrecalentamiento.',
            'Reparación de placa base a nivel de componentes.',
            'Instalación y configuración de Windows, macOS y Linux.'
        ],
        gallery: [ // Reemplaza con tus imágenes
            'https://placehold.co/600x400/1f2937/ffffff?text=Imagen+1',
            'https://placehold.co/600x400/1f2937/ffffff?text=Imagen+2',
            'https://placehold.co/600x400/1f2937/ffffff?text=Carrusel',
        ]
    },
    { 
        id: 'mantenimiento-preventivo',
        icon: '⚙️', 
        title: 'Mantenimiento Preventivo', 
        shortDescription: 'Optimiza y alarga la vida útil de tus equipos con nuestro servicio completo.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Mantenimiento',
        mainDescription: "Un equipo bien mantenido es un equipo que dura más y funciona mejor. Nuestro servicio de mantenimiento preventivo está diseñado para anticipar problemas, limpiar componentes vitales y optimizar el software para garantizar el máximo rendimiento y evitar fallas costosas en el futuro.",
        features: [
            'Limpieza física interna de polvo y componentes.',
            'Optimización de arranque y rendimiento del sistema operativo.',
            'Actualización de drivers y software esencial.',
            'Revisión de estado del disco duro y memoria RAM.'
        ],
        gallery: [
            'https://placehold.co/600x400/1f2937/ffffff?text=Limpieza',
            'https://placehold.co/600x400/1f2937/ffffff?text=Optimización',
            'https://placehold.co/600x400/1f2937/ffffff?text=Revisión',
        ]
    },
    { 
        id: 'eliminacion-virus',
        icon: '🛡️', 
        title: 'Eliminación de Virus', 
        shortDescription: 'Protegemos tu información eliminando cualquier amenaza de seguridad.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Seguridad',
        mainDescription: "Las amenazas en línea son constantes. Nuestro servicio de eliminación de virus no solo limpia tu equipo de malware, spyware y ransomware, sino que también repara los daños causados al sistema y te asesoramos para que navegues de forma más segura y protejas tus datos personales.",
        features: [
            'Escaneo profundo y eliminación de todo tipo de malware.',
            'Reparación de archivos del sistema dañados por virus.',
            'Instalación y configuración de software antivirus.',
            'Recomendaciones para mejorar tus hábitos de seguridad.'
        ],
        gallery: [
            'https://placehold.co/600x400/1f2937/ffffff?text=Escaneo',
            'https://placehold.co/600x400/1f2937/ffffff?text=Protección',
            'https://placehold.co/600x400/1f2937/ffffff?text=Antivirus',
        ]
    },
    { 
        id: 'recuperacion-datos',
        icon: '💾', 
        title: 'Recuperación de Datos', 
        shortDescription: 'Intentamos rescatar tus archivos valiosos de dispositivos dañados.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Recuperacion',
        mainDescription: "La pérdida de datos puede ser devastadora. Ya sea por un borrado accidental o una falla del disco duro, nuestro equipo utiliza técnicas avanzadas para intentar recuperar tus fotos, documentos y archivos importantes. Ofrecemos un diagnóstico inicial para evaluar las posibilidades de éxito.",
        features: [
            'Recuperación de archivos borrados accidentalmente.',
            'Extracción de datos de discos duros que no arrancan.',
            'Recuperación de información de pendrives y tarjetas SD.',
            'Diagnóstico previo sin costo.'
        ],
        gallery: [
            'https://placehold.co/600x400/1f2937/ffffff?text=Disco+Duro',
            'https://placehold.co/600x400/1f2937/ffffff?text=Archivos',
            'https://placehold.co/600x400/1f2937/ffffff?text=Rescate',
        ]
    },
    { 
        id: 'soporte-remoto',
        icon: '🌐', 
        title: 'Soporte Remoto', 
        shortDescription: 'Solución de problemas de software de forma rápida y segura sin moverte.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Soporte+Remoto',
        mainDescription: "Ahorra tiempo y obtén soluciones rápidas con nuestro servicio de soporte remoto. Nos conectamos a tu equipo de forma segura para resolver problemas de software, configurar programas, instalar periféricos y responder a tus dudas, todo sin que tengas que salir de tu casa u oficina.",
        features: [
            'Configuración de programas y periféricos (impresoras, etc.).',
            'Asistencia para resolver dudas de software.',
            'Limpieza de archivos basura y optimización remota.',
            'Soporte para problemas con correo electrónico y navegadores.'
        ],
        gallery: [
            'https://placehold.co/600x400/1f2937/ffffff?text=Conexión',
            'https://placehold.co/600x400/1f2937/ffffff?text=Asistencia',
            'https://placehold.co/600x400/1f2937/ffffff?text=Solución',
        ]
    },
    { 
        id: 'diseno-web',
        icon: '🎨', 
        title: 'Diseño Web', 
        shortDescription: 'Creamos sitios web modernos y funcionales para tu negocio.',
        heroImage: 'https://placehold.co/1200x400/111827/4F8AFE?text=Diseno+Web', // Reemplaza con tu imagen
        mainDescription: "En el mundo digital actual, tu sitio web es tu carta de presentación más importante. Creamos páginas web visualmente atractivas, rápidas y fáciles de usar que convierten visitantes en clientes. Nos enfocamos en un diseño responsivo que se ve increíble en cualquier dispositivo, desde teléfonos móviles hasta computadoras de escritorio.",
        features: [
            'Diseño de páginas web responsivas (adaptables a móviles).',
            'Creación de Landing Pages para campañas de marketing.',
            'Integración con redes sociales y formularios de contacto.',
            'Optimización básica de SEO para mejorar la visibilidad en Google.'
        ],
        gallery: [ // Reemplaza con tus imágenes
            'https://placehold.co/600x400/1f2937/ffffff?text=Proyecto+Web+1',
            'https://placehold.co/600x400/1f2937/ffffff?text=Proyecto+Web+2',
            'https://placehold.co/600x400/1f2937/ffffff?text=Carrusel+de+Disenos',
        ]
    }
];
