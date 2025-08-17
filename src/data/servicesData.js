// src/data/servicesData.js

export const services = [
    { 
        id: 'reparacion-pc',
        icon: '💻', 
        title: 'Reparación de Laptops y PC', 
        shortDescription: 'Diagnóstico y solución completa para fallas de hardware y software.',
        heroImage: 'https://serviciotecnicoencomputacion.com/images/Mantenimiento-Preventivo-Correctivo.webp', // Reemplaza con tu imagen
        mainDescription: "Nuestro servicio de reparación de computadoras aborda desde los problemas más comunes hasta las fallas más complejas. Entendemos lo crucial que es tu equipo para tu trabajo y vida diaria, por lo que ofrecemos un diagnóstico rápido y soluciones efectivas para que vuelvas a estar en línea lo antes posible. Utilizamos piezas de alta calidad y las últimas herramientas para garantizar una reparación duradera y confiable.",
        features: [
            'Reemplazo de pantallas, teclados y baterías.',
            'Solución a problemas de sobrecalentamiento.',
            'Reparación de placa base a nivel de componentes.',
            'Instalación y configuración de Windows, macOS y Linux.'
        ],
        gallery: [ // Reemplaza con tus imágenes
            'https://facialix.com/wp-content/uploads/2024/05/formacion-en-reparacion-de-laptops.jpg',
            'https://intratecno.com/wp-content/uploads/servicio-tecnico-reparacion-de-computadoras-notebooks-mac-armado-de-pc-intratecno.webp',
            'https://larepublica.cronosmedia.glr.pe/original/2022/02/12/62081478655ab87daf1fce77.jpg',
        ]
    },
    { 
        id: 'mantenimiento-preventivo',
        icon: '⚙️', 
        title: 'Mantenimiento Preventivo', 
        shortDescription: 'Optimiza y alarga la vida útil de tus equipos con nuestro servicio completo.',
        heroImage: 'https://www.computronixco.com/wp-content/uploads/2021/10/mantenimiento-preventivo-00-Ejemplos-de-mantenimiento-preventivo-de-computadoras-para-hacer-en-casa.jpg',
        mainDescription: "Un equipo bien mantenido es un equipo que dura más y funciona mejor. Nuestro servicio de mantenimiento preventivo está diseñado para anticipar problemas, limpiar componentes vitales y optimizar el software para garantizar el máximo rendimiento y evitar fallas costosas en el futuro.",
        features: [
            'Limpieza física interna de polvo y componentes.',
            'Optimización de arranque y rendimiento del sistema operativo.',
            'Actualización de drivers y software esencial.',
            'Revisión de estado del disco duro y memoria RAM.'
        ],
        gallery: [
            'https://www.ofimarket.pe/cdn/shop/articles/como-limpiar-pantalla-teclado-laptop_600x600_crop_center.jpg?v=1666732861',
            'https://jfsoluciones.com.ar/wp-content/uploads/2024/11/limpieza-de-pc-portatil-1024x853-1.png',
            'https://intelite.gt/wp-content/uploads/2019/02/mantenimiento-computadoras-1024x536.jpg',
        ]
    },
    { 
        id: 'eliminacion-virus',
        icon: '🛡️', 
        title: 'Eliminación de Virus', 
        shortDescription: 'Protegemos tu información eliminando cualquier amenaza de seguridad.',
        heroImage: 'https://icorp.com.mx/wp-content/uploads/2015/05/%C2%BFCuales-son-los-3-pilares-de-la-seguridad-informatica-scaled.webp',
        mainDescription: "Las amenazas en línea son constantes. Nuestro servicio de eliminación de virus no solo limpia tu equipo de malware, spyware y ransomware, sino que también repara los daños causados al sistema y te asesoramos para que navegues de forma más segura y protejas tus datos personales.",
        features: [
            'Escaneo profundo y eliminación de todo tipo de malware.',
            'Reparación de archivos del sistema dañados por virus.',
            'Instalación y configuración de software antivirus.',
            'Recomendaciones para mejorar tus hábitos de seguridad.'
        ],
        gallery: [
            'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/05/hwinfo-software-diagnostico-gratis-windows-utilizan-incluso-nasa-3403837.jpg?tf=3840x',
            'https://www.ucalp.edu.ar/wp-content/uploads/2017/07/5-7-Consejos-b%C3%A1sicos-para-proteger-tu-computadora.jpg',
            'https://cdn.shopify.com/s/files/1/0329/9865/3996/t/5/assets/antivirus_software_list_for_pc-5v7BR8.True?v=1707759816',
        ]
    },
    { 
        id: 'recuperacion-datos',
        icon: '💾', 
        title: 'Recuperación de Datos', 
        shortDescription: 'Intentamos rescatar tus archivos valiosos de dispositivos dañados.',
        heroImage: 'https://www.cloudcenterandalucia.es/wp-content/uploads/2022/12/iStock-1409475480.jpg',
        mainDescription: "La pérdida de datos puede ser devastadora. Ya sea por un borrado accidental o una falla del disco duro, nuestro equipo utiliza técnicas avanzadas para intentar recuperar tus fotos, documentos y archivos importantes. Ofrecemos un diagnóstico inicial para evaluar las posibilidades de éxito.",
        features: [
            'Recuperación de archivos borrados accidentalmente.',
            'Extracción de datos de discos duros que no arrancan.',
            'Recuperación de información de pendrives y tarjetas SD.',
            'Diagnóstico previo sin costo.'
        ],
        gallery: [
            'https://images.wondershare.com/recoverit/article/2019/11/data-recovery-1.jpg',
            'https://www.muycomputer.com/wp-content/uploads/2016/08/data-backup.png',
            'https://www.seguromovil.com/storage/como-recuperar-datos-de-un-pc-1649140324Ke7yT.jpg',
        ]
    },
    { 
        id: 'soporte-remoto',
        icon: '🌐', 
        title: 'Soporte Remoto', 
        shortDescription: 'Solución de problemas de software de forma rápida y segura sin moverte.',
        heroImage: 'https://configsystem.pe/wp-content/uploads/2024/08/Soporte-remoto-de-alta-confiabilidad-Plataforma-resuelve-problemas-tecnicos-en-segundos-y-con-la-maxima-seguridad-que-existe-en-el-mercado-scaled-1.jpg',
        mainDescription: "Ahorra tiempo y obtén soluciones rápidas con nuestro servicio de soporte remoto. Nos conectamos a tu equipo de forma segura para resolver problemas de software, configurar programas, instalar periféricos y responder a tus dudas, todo sin que tengas que salir de tu casa u oficina.",
        features: [
            'Configuración de programas y periféricos (impresoras, etc.).',
            'Asistencia para resolver dudas de software.',
            'Limpieza de archivos basura y optimización remota.',
            'Soporte para problemas con correo electrónico y navegadores.'
        ],
        gallery: [
            'https://tramite.pe/img/soporte_tecnico_remoto.png',
            'https://datacentro.cl/wp-content/uploads/2024/07/img-soporte-tecnico-remoto.jpg',
            'https://blackbytes.com/wp-content/uploads/2021/08/remote-it-support-1170x658.jpg',
        ]
    },
    { 
        id: 'diseno-web',
        icon: '🎨', 
        title: 'Diseño Web', 
        shortDescription: 'Creamos sitios web modernos y funcionales para tu negocio.',
        heroImage: 'https://i0.wp.com/www.elrincondelpublicista.com/wp-content/uploads/2018/03/dise%C3%B1o-pagina-web.jpg?fit=650%2C350&ssl=1', // Reemplaza con tu imagen
        mainDescription: "En el mundo digital actual, tu sitio web es tu carta de presentación más importante. Creamos páginas web visualmente atractivas, rápidas y fáciles de usar que convierten visitantes en clientes. Nos enfocamos en un diseño responsivo que se ve increíble en cualquier dispositivo, desde teléfonos móviles hasta computadoras de escritorio.",
        features: [
            'Diseño de páginas web responsivas (adaptables a móviles).',
            'Creación de Landing Pages para campañas de marketing.',
            'Integración con redes sociales y formularios de contacto.',
            'Optimización básica de SEO para mejorar la visibilidad en Google.'
        ],
        gallery: [ // Reemplaza con tus imágenes
            'https://riodigital.net/wp-content/uploads/2023/08/Diseno-de-Paginas-Web-Rio-Digital.jpg',
            'https://www.webempresa.com/wp-content/uploads/2024/09/diseno-web-02.jpg',
            'https://www.hostingplus.cl/wp-content/uploads/2025/01/diseno-web-que-es-y-para-que-sirve.jpg',
        ]
    }
];
