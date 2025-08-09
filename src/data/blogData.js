// src/data/blogData.js
export const blogPosts = [
  {
    id: '5-trucos-pc-rapido',
    heroImage: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/05/como-hacer-pc-arranque-rapido_1.jpg',
    title: '5 Trucos para que tu PC sea más Rápido',
    excerpt: 'Descubre cinco sencillos pasos que puedes tomar hoy mismo para mejorar significativamente la velocidad y el rendimiento de tu computadora.',
    content: [
      { type: 'paragraph', text: 'Un ordenador lento puede ser una gran fuente de frustración. Antes de pensar en comprar uno nuevo, existen varios trucos sencillos que puedes aplicar para devolverle la vida a tu equipo. Aquí te presentamos cinco consejos efectivos que marcarán la diferencia.' },
      { type: 'heading', text: '1. Limpia tu Disco Duro' },
      { type: 'paragraph', text: 'Con el tiempo, tu disco duro se llena de archivos temporales, programas que no usas y descargas olvidadas. Utiliza la herramienta "Liberador de espacio en disco" de Windows o una aplicación similar para eliminar archivos innecesarios. Un disco duro con más espacio libre permite que el sistema operativo trabaje de forma más holgada.' },
      { type: 'image', src: 'https://placehold.co/800x400/1f2937/ffffff?text=Limpieza+de+Disco', alt: 'Limpieza de disco duro' },
      { type: 'heading', text: '2. Desactiva Programas de Inicio' },
      { type: 'paragraph', text: 'Muchos programas se configuran para iniciarse automáticamente cuando enciendes tu PC, consumiendo memoria RAM y ralentizando el arranque. Presiona Ctrl+Shift+Esc para abrir el Administrador de Tareas, ve a la pestaña "Inicio" y deshabilita las aplicaciones que no necesites que se ejecuten constantemente.' },
      { type: 'heading', text: '3. Aumenta la Memoria RAM' },
      { type: 'paragraph', text: 'Si sueles trabajar con muchas aplicaciones abiertas al mismo tiempo, es posible que te estés quedando sin memoria RAM. Añadir más RAM es una de las mejoras de hardware más económicas y efectivas para acelerar tu equipo.' },
      { type: 'heading', text: '4. Utiliza un Disco de Estado Sólido (SSD)' },
      { type: 'paragraph', text: 'Si tu computadora todavía usa un disco duro mecánico (HDD), cambiar a un disco de estado sólido (SSD) es la mejora que más impacto tendrá. Los SSD son increíblemente más rápidos, lo que reduce drásticamente los tiempos de carga del sistema operativo y de las aplicaciones.' },
      { type: 'heading', text: '5. Mantén tu Sistema y Drivers Actualizados' },
      { type: 'paragraph', text: 'Las actualizaciones de Windows, macOS y de los drivers de tus componentes (como la tarjeta gráfica) a menudo incluyen optimizaciones de rendimiento y parches de seguridad. Asegúrate de tener siempre tu sistema al día.' },
    ],
    gallery: [
      'https://placehold.co/600x400/1f2937/ffffff?text=RAM',
      'https://placehold.co/600x400/1f2937/ffffff?text=SSD',
      'https://placehold.co/600x400/1f2937/ffffff?text=Windows+Update',
    ]
  },
  {
    id: 'cuando-cambiar-bateria',
    heroImage: 'https://caremobile.mx/img/uploads/servicios/cambiar-bateria-laptop-20211019626.jpg',
    title: 'Cómo Saber si la Batería de tu Laptop Necesita un Cambio',
    excerpt: 'La duración de la batería es crucial. Te enseñamos a identificar las señales de advertencia de una batería desgastada y cuándo es el momento de reemplazarla.',
    content: [
      { type: 'paragraph', text: 'Una de las mayores ventajas de una laptop es su portabilidad, pero esta depende completamente de la salud de su batería. Con el tiempo, todas las baterías se degradan. Saber cuándo es el momento adecuado para un reemplazo puede ahorrarte muchos problemas.' },
      { type: 'heading', text: '1. El Sistema Operativo te Avisa' },
      { type: 'paragraph', text: 'Tanto Windows como macOS tienen sistemas de monitoreo de batería. Si ves una notificación con un ícono de una "X" roja sobre la batería o un mensaje que dice "Considera reemplazar la batería", es la señal más clara de que su vida útil está llegando a su fin.' },
      { type: 'image', src: 'https://placehold.co/800x400/1f2937/ffffff?text=Aviso+de+Batería', alt: 'Notificación de batería' },
      { type: 'heading', text: '2. Duración Drásticamente Reducida' },
      { type: 'paragraph', text: 'Si notas que tu laptop, que antes duraba varias horas desconectada, ahora apenas sobrevive 30 o 40 minutos, es un síntoma inequívoco de degradación. La capacidad máxima de la batería ha disminuido considerablemente.' },
      { type: 'heading', text: '3. Se Apaga Inesperadamente' },
      { type: 'paragraph', text: 'Cuando la batería está muy desgastada, puede que no sea capaz de suministrar la energía necesaria en momentos de alta demanda. Esto puede provocar que la laptop se apague de repente, incluso cuando el indicador muestra que todavía queda un 20% o 30% de carga.' },
      { type: 'heading', text: '4. Sobrecalentamiento Excesivo al Cargar' },
      { type: 'paragraph', text: 'Es normal que una laptop se caliente un poco al cargar, pero si notas que la zona de la batería se calienta de forma excesiva, podría ser una señal de que las celdas internas están dañadas, lo cual puede ser peligroso.' },
    ],
    gallery: [
      'https://placehold.co/600x400/1f2937/ffffff?text=Duración+de+Batería',
      'https://placehold.co/600x400/1f2937/ffffff?text=Laptop+Caliente',
      'https://placehold.co/600x400/1f2937/ffffff?text=Reemplazo',
    ]
  },
  {
    id: 'importancia-diseno-web',
    heroImage: 'https://castelloncreativa.com/wp-content/uploads/2019/08/la-importancia-del-diseno-web.png',
    title: 'La Importancia de un Buen Diseño Web para tu Negocio',
    excerpt: 'Tu sitio web es tu vitrina al mundo. Analizamos por qué un diseño profesional y adaptable es una de las mejores inversiones para tu emprendimiento.',
    content: [
        { type: 'paragraph', text: 'En la era digital, tu presencia en línea es fundamental. Un sitio web no es solo una tarjeta de presentación digital; es una herramienta poderosa para atraer clientes, generar confianza y hacer crecer tu negocio. Aquí te explicamos por qué invertir en un buen diseño web es crucial.' },
        { type: 'heading', text: '1. Causa una Primera Impresión Duradera' },
        { type: 'paragraph', text: 'Los visitantes tardan solo unos segundos en formarse una opinión sobre tu negocio basándose en el diseño de tu página. Un diseño limpio, moderno y profesional comunica credibilidad y confianza desde el primer momento.' },
        { type: 'image', src: 'https://placehold.co/800x400/1f2937/ffffff?text=Primera+Impresión', alt: 'Diseño web profesional' },
        { type: 'heading', text: '2. Mejora la Experiencia del Usuario (UX)' },
        { type: 'paragraph', text: 'Un buen diseño no solo es estético, sino también funcional. Una navegación intuitiva, tiempos de carga rápidos y un diseño adaptable a dispositivos móviles (responsive) garantizan que tus visitantes encuentren lo que buscan fácilmente, mejorando su satisfacción y aumentando las posibilidades de conversión.' },
        { type: 'heading', text: '3. Potencia tu Posicionamiento en Google (SEO)' },
        { type: 'paragraph', text: 'Los motores de búsqueda como Google favorecen a los sitios web que ofrecen una buena experiencia de usuario. Un código limpio, una estructura clara y un diseño responsive son factores clave que ayudan a que tu página aparezca en los primeros resultados de búsqueda.' },
    ],
    gallery: [
      'https://placehold.co/600x400/1f2937/ffffff?text=Responsive+Design',
      'https://placehold.co/600x400/1f2937/ffffff?text=SEO',
      'https://placehold.co/600x400/1f2937/ffffff?text=UX/UI',
    ]
  },
    {
    id: 'protegerse-phishing',
    heroImage: 'https://www.lisot.com/wp-content/uploads/2021/06/que-es-phising.jpg',
    title: 'Protégete del Phishing: Señales de Alerta',
    excerpt: 'El phishing es una de las estafas más comunes. Aprende a reconocer correos y mensajes fraudulentos para mantener tu información segura.',
    content: [
      { type: 'paragraph', text: 'El phishing es una técnica de ciberdelincuencia que utiliza el fraude, el engaño y el timo para manipular a sus víctimas y hacer que revelen información personal confidencial. Aprender a identificar estas amenazas es el primer paso para protegerte.' },
      { type: 'heading', text: '1. Revisa el Remitente' },
      { type: 'paragraph', text: 'No confíes ciegamente en el nombre que aparece. Fíjate bien en la dirección de correo electrónico completa. Los estafadores a menudo usan dominios que se parecen a los oficiales pero con ligeras variaciones, como "banco@notificaciones-banco.com" en lugar de "notificaciones@banco.com".' },
      { type: 'heading', text: '2. Busca un Tono Alarmista o Urgente' },
      { type: 'paragraph', text: 'Los correos de phishing a menudo intentan asustarte. Frases como "Tu cuenta será suspendida", "Actividad sospechosa detectada" o "Tienes 24 horas para actuar" buscan que actúes por impulso sin pensar.' },
      { type: 'image', src: 'https://placehold.co/800x400/1f2937/ffffff?text=Correo+Falso', alt: 'Ejemplo de correo de phishing' },
      { type: 'heading', text: '3. Desconfía de Enlaces y Archivos Adjuntos' },
      { type: 'paragraph', text: 'Nunca hagas clic en enlaces ni descargues archivos de correos sospechosos. Puedes pasar el cursor del ratón sobre un enlace (sin hacer clic) para ver la dirección real a la que te dirige en la esquina inferior de tu navegador. Si no coincide o parece extraña, no hagas clic.' },
    ],
    gallery: [
      'https://placehold.co/600x400/1f2937/ffffff?text=Remitente+Falso',
      'https://placehold.co/600x400/1f2937/ffffff?text=Enlace+Sospechoso',
      'https://placehold.co/600x400/1f2937/ffffff?text=Candado+de+Seguridad',
    ]
  },
  {
    id: 'backup-esencial',
    heroImage: 'https://www.linuxinsider.com/wp-content/uploads/sites/2/2024/06/backup.jpg',
    title: 'Por Qué Hacer Copias de Seguridad es Esencial',
    excerpt: 'No esperes a perder tus datos para actuar. Te explicamos la importancia de las copias de seguridad y las mejores formas de realizarlas.',
    content: [
      { type: 'paragraph', text: 'Tus fotos, documentos de trabajo, proyectos personales... La información digital es valiosa y, a la vez, vulnerable. Un fallo de disco duro, un virus o un simple error humano pueden hacer que desaparezca para siempre. Por eso, las copias de seguridad no son una opción, son una necesidad.' },
      { type: 'heading', text: '1. Protección contra Fallos de Hardware' },
      { type: 'paragraph', text: 'Los discos duros y SSD tienen una vida útil limitada. Si tu unidad de almacenamiento principal falla, una copia de seguridad es la única forma de garantizar que no perderás toda tu información.' },
      { type: 'heading', text: '2. Defensa contra Ransomware y Virus' },
      { type: 'paragraph', text: 'El ransomware es un tipo de malware que secuestra tus archivos y exige un pago para liberarlos. Con una copia de seguridad reciente y desconectada de tu equipo, puedes simplemente restaurar tus archivos sin tener que pagar a los ciberdelincuentes.' },
      { type: 'image', src: 'https://placehold.co/800x400/1f2937/ffffff?text=Nube+vs+Disco+Externo', alt: 'Copia de seguridad en la nube y en disco' },
      { type: 'heading', text: '3. La Regla 3-2-1' },
      { type: 'paragraph', text: 'La estrategia de copia de seguridad más recomendada es la regla 3-2-1: Ten al menos TRES copias de tus datos, en DOS tipos de almacenamiento diferentes, y al menos UNA de esas copias debe estar en una ubicación física distinta (por ejemplo, en la nube).' },
    ],
    gallery: [
      'https://placehold.co/600x400/1f2937/ffffff?text=Disco+Externo',
      'https://placehold.co/600x400/1f2937/ffffff?text=Almacenamiento+en+la+Nube',
      'https://placehold.co/600x400/1f2937/ffffff?text=Restauración',
    ]
  }
];
