Vue.createApp({
    data() {
        return {

            tituloPagina: '9950X3D Pro',

            // Objeto que guardará los datos del formulario (Tema 4)
            formulario: {
                nombre: '',
                correo: '',
                mensaje: ''
            },

            // Variable para mostrar errores de validación
            mensajeError: '',

            // Datos para el Carousel
            slidesCarousel: [
                {
                    id: 1,
                    titulo: "DOMINIO EN GAMING",
                    descripcion: "Fluidez absoluta en fotogramas mínimos (1% lows).",
                    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200",
                    tag: "STABLE",
                    frecuencia: "5.7 GHz"
                },
                {
                    id: 2,
                    titulo: "POTENCIA CREATIVA",
                    descripcion: "Renderizado 8K y multitarea sin compromisos.",
                    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200",
                    tag: "BOOST ACTIVE",
                    frecuencia: "5.4 GHz"
                },
                {
                    id: 3,
                    titulo: "ARQUITECTURA NIRVANA",
                    descripcion: "Salto generacional del 16% en IPC con Zen 5.",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
                    tag: "OPTIMIZED",
                    frecuencia: "N/A"
                }
            ],  

            // Datos para las 3 características principales de Zen 5
            caracteristicasZen5: [
                {
                    icono: 'bi-cpu',
                    titulo: 'Motor ensanchado',
                    texto: 'Evolución a un diseño de despacho de 8 vías para procesar más micro-operaciones sin atascos.'
                },
                {
                    icono: 'bi-graph-up-arrow',
                    titulo: 'Predicción avanzada',
                    texto: 'Predictor "TAGE 2-Ahead" que anticipa instrucciones dos pasos adelante, eliminando ciclos inactivos.'
                },
                {
                    icono: 'bi-gpu-card',
                    titulo: 'AVX-512 Nativa',
                    texto: 'Ruta de datos de 512 bits para acelerar cargas de trabajo de IA y modelado 3D complejo.'
                }
            ],
            vCachepuntos: [
                {
                    id: 1,
                    icono: 'bi-layers-half',
                    titulo: 'Diseño Invertido',
                    desc: 'Colocamos la memoria SRAM debajo de los núcleos para un contacto directo con el disipador.'
                },
                {
                    id: 2,
                    icono: 'bi-thermometer-snow',
                    titulo: 'Eficiencia Térmica',
                    desc: 'Mejora del 15% en la disipación, permitiendo overclocking completo en serie X3D.'
                },
                {
                    id: 3,
                    icono: 'bi-cpu-fill',
                    titulo: 'Unión Cu-Cu',
                    desc: 'Interconexión a nivel atómico sin soldadura para una comunicación 15 veces más rápida.'
                }
            ],
            chiplets: [
                {
                    id: 'gaming',
                    tag: 'GAMING & LATENCIA',
                    titulo: 'Chiplet con 3D V-Cache',
                    specs: '8 Núcleos / 96 MB L3 apilada',
                    uso: 'Tareas sensibles a la latencia (Juegos). Evita viajes costosos a la memoria RAM.',
                    color: 'var(--amd-red)',
                    glow: 'var(--amd-red-glow)'
                },
                {
                    id: 'fuerza',
                    tag: 'FUERZA BRUTA & FRECUENCIA',
                    titulo: 'Chiplet Estándar (High Freq)',
                    specs: '8 Núcleos / 32 MB L3 estándar',
                    uso: 'Tareas de productividad (Renderizado 8K). Escala hasta los 5.7 GHz sin restricciones físicas.',
                    color: 'var(--ryzen-orange)',
                    glow: 'rgba(255, 93, 34, 0.4)'
                }
            ],
            metricasTelemetria: [
                { id: 1, etiqueta: 'Estabilidad 1% Lows', valor: '+30', unidad: '%', icono: 'bi-graph-up' },
                { id: 2, etiqueta: 'Latencia de Memoria', valor: '0', unidad: 'ms', icono: 'bi-lightning-charge' },
                { id: 3, etiqueta: 'Ancho de Banda L3', valor: '2.5', unidad: 'TB/s', icono: 'bi-speedometer' },
                { id: 4, etiqueta: 'Eficiencia Zen 5', valor: '16', unidad: '% IPC', icono: 'bi-cpu' }
            ],
            filtroGaleria: 'Todas', // Estado para el filtro actual[Vue tema 4]
            fotosGaleria: [
                { id: 1, url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600', titulo: 'Arquitectura Zen 5', categoria: 'Arquitectura' },
                { id: 2, url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600', titulo: 'Pruebas de Renderizado', categoria: 'Desempeño' },
                { id: 3, url: 'https://images.unsplash.com/photo-1555617766-c94804975da3?w=600', titulo: 'Diseño de Chiplets', categoria: 'Arquitectura' },
                { id: 4, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600', titulo: 'Estructura 3D V-Cache', categoria: 'Tecnología' },
                { id: 5, url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600', titulo: 'Gaming 4K Ultra', categoria: 'Desempeño' },
                { id: 6, url: 'images/workstation.png', titulo: 'Workstation Multi-core', categoria: 'Desempeño' },
                { id: 7, url: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600', titulo: 'Socket AM5 Next-Gen', categoria: 'Tecnología' },
                { id: 8, url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600', titulo: 'Nanolitografía 4nm', categoria: 'Tecnología' }
            ],
            especificacionesTecnicas: [
                { id: 'specs1', tema: 'Arquitectura y Núcleos', detalle: '16 núcleos y 32 hilos basados en Zen 5 (Nirvana). Proceso de fabricación de 4nm de TSMC para máxima eficiencia energética.' },
                { id: 'specs2', tema: 'Memoria Caché masiva', detalle: '144 MB de caché total (L2+L3). La tecnología 3D V-Cache de 2.ª generación coloca la SRAM bajo los núcleos para mejorar la térmica en un 15%.' },
                { id: 'specs3', tema: 'Frecuencias y Overclocking', detalle: 'Frecuencia base de 4.3 GHz con Boost de hasta 5.7 GHz. Por primera vez en la serie X3D, se permite overclocking completo del multiplicador.' }
            ],


            preguntasFrecuentes: [
                {
                    id: 'faq1',
                    pregunta: '¿Qué es el IPC y por qué el salto del 16%?',
                    respuesta: 'IPC (Instrucciones por Ciclo) es la eficiencia real del núcleo. Zen 5 ensancha el motor de ejecución a 8 vías, permitiendo procesar más micro-operaciones simultáneamente que cualquier arquitectura anterior.'
                },
                {
                    id: 'faq2',
                    pregunta: '¿Cómo funciona el diseño térmico invertido?',
                    respuesta: 'En la 2.ª Gen de 3D V-Cache, la SRAM se coloca DEBAJO de los núcleos. Esto permite que los núcleos tengan contacto directo con el disipador, mejorando la eficiencia térmica en un 15%.'
                },
                {
                    id: 'faq3',
                    pregunta: '¿Por qué un diseño asimétrico mejora el gaming?',
                    respuesta: 'Al asignar juegos al chiplet con 3D V-Cache y tareas pesadas al chiplet de alta frecuencia, el procesador elimina los viajes a la RAM externa, estabilizando los fotogramas mínimos (1% lows).'
                }
            ],

            seleccionado: null, // Controla qué ventaja mostrar. null = modal cerrado
            ventajas: [
                {
                    id: 1,
                    titulo: 'Gaming Extremo',
                    resumen: 'Domina los títulos competitivos con 144 MB de caché.',
                    detalle: 'Vs i9-14900K: El 9950X3D ofrece hasta un 15% más de estabilidad en fotogramas mínimos (1% lows) gracias a la reducción de latencia de memoria.',
                    icono: 'bi-controller'
                },
                {
                    id: 2,
                    titulo: 'Creación de Contenido',
                    resumen: 'Renderizado 8K y modelado 3D sin esperas.',
                    detalle: 'Arquitectura Zen 5: Gracias a la ruta AVX-512 nativa, las tareas de IA y renderizado son un 20% más rápidas que en la generación anterior.',
                    icono: 'bi-camera-reels'
                }
            ],
            contacto: {
                nombre: '',
                email: '',
                mensaje: '',
                perfil: ''
            },
            mensajeExito: '',
            erroresForm: {}, // Objeto para guardar errores específicos
        }
    },
    computed: {
        fotosFiltradas() {
            if (this.filtroGaleria === 'Todas') return this.fotosGaleria;
            return this.fotosGaleria.filter(f => f.categoria === this.filtroGaleria);
        }
    },
    methods: {
        // Función que validará el formulario más adelante
        enviarRegistro() {
            this.erroresForm = {}; // Reset de errores

            if (!this.contacto.nombre) this.erroresForm.nombre = "El nombre es requerido.";
            if (!this.contacto.email.includes('@')) this.erroresForm.email = "Correo electrónico no válido.";
            if (this.contacto.mensaje.length < 10) this.erroresForm.mensaje = "Cuéntanos un poco más (min. 10 carac.).";

            if (Object.keys(this.erroresForm).length === 0) {
                alert("¡Registro enviado con éxito para el " + this.tituloPagina + "!");
                this.contacto = { nombre: '', email: '', mensaje: '', perfil: '' }; // Limpieza
            }
        },
        abrirModal(item) {
            this.seleccionado = item; // Asigna el objeto para que v-if lo detecte
        },
        cerrarModal() {
            this.seleccionado = null; // Al ser null, el modal desaparece
        }

    }
}).mount('#app');