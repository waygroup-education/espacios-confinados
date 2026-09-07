/* =========================================================
   CURSO · Trabajo Seguro en Espacios Confinados (TSEC)
   ---------------------------------------------------------
   Cliente:  Waygroup
   Audiencia: Trabajadores, supervisores y jefes de área con actividades en espacios confinados
   Duración: 4 horas
   Preset visual: paleta de TSA (estándar Waygroup)
   ========================================================= */
module.exports = {
  brand: {
    name: '', sub: '',
    logo:       'assets/img/logos/waygroup-for-education-h.svg',
    logoMobile: 'assets/img/logos/waygroup-w-only.svg',
  },
  course: {
    code: '', name: 'Trabajo Seguro en Espacios Confinados (TSEC)', subtitle: '', duration: '4 horas',
    iso: 'ISO 9001:2015', licencia: 'Creative Commons BY-NC-SA 4.0',
    preset: 'tsa', pdf: 'assets/downloads/Curso_Espacios_Confinados.pdf',
    portadaFullBleed: true,
  },
  /* MENÚ · estándar Waygroup: Portada, Presentación, temas numerados con subtemas como
     secciones ancladas (1.1, 1.2… los numera el build), Glosario y Referencias.
     La evaluación entra cuando el cliente la entregue. */
  menu: [
    { id: 'inicio', titulo: 'Inicio', tipo: 'especial' },
    { id: 'presentacion', titulo: 'Presentación', tipo: 'especial' },
    { id: 'tema1', titulo: 'Marco normativo, definición y roles en espacios confinados', tipo: 'tema',
      secciones: [
        { titulo: 'La normatividad de espacios confinados en Colombia, explicada de una forma simple', ancla: 'normatividad' },
        { titulo: 'Qué es un espacio confinado y cómo se clasifica', ancla: 'que-es' },
        { titulo: 'Un espacio confinado puede cambiar: por qué la clasificación no es para siempre', ancla: 'clasificacion-cambia' },
        { titulo: 'Quién es quién: los responsables en espacios confinados', ancla: 'roles' },
      ] },
    { id: 'tema2', titulo: 'Identificación de peligros y grados de peligrosidad en espacios confinados', tipo: 'tema',
      secciones: [
        { titulo: 'Qué peligros existen dentro de un espacio confinado', ancla: 'peligros' },
        { titulo: 'Por qué se mide la atmósfera antes de entrar: los valores que no debes ignorar', ancla: 'atmosfera' },
        { titulo: 'Por qué el gas no siempre se queda arriba: densidad y estratificación', ancla: 'estratificacion' },
        { titulo: 'Grados de peligrosidad: cómo se clasifica un espacio confinado', ancla: 'grados' },
      ] },
    { id: 'tema3', titulo: 'Equipos de protección, medición y sistemas de descenso para espacios confinados', tipo: 'tema',
      secciones: [
        { titulo: 'Equipos de respiración: cuándo se necesitan y cuáles existen', ancla: 'equipos-respiracion' },
        { titulo: 'Otros elementos de protección: arnés, trajes y careta', ancla: 'otros-epp' },
        { titulo: 'El medidor de gases: qué revisar antes de cada entrada', ancla: 'medidor' },
        { titulo: 'Cómo se entra y se sale de forma segura: línea de vida, escaleras y trípode', ancla: 'descenso' },
      ] },
    { id: 'tema4', titulo: 'Permiso de entrada, procedimientos operativos y atención de emergencias', tipo: 'tema',
      secciones: [
        { titulo: 'El permiso de entrada a espacios confinados', ancla: 'permiso' },
        { titulo: 'Qué se hace antes, durante y después de la tarea', ancla: 'procedimientos' },
        { titulo: 'Si algo sale mal: el plan de rescate y las alarmas del medidor', ancla: 'plan-rescate' },
        { titulo: 'Cuándo no se autoriza o se detiene el ingreso', ancla: 'detener-ingreso' },
      ] },
    { id: 'tema5', titulo: 'Uso de la Inmersión de espacios confinados', tipo: 'tema' },
    { id: 'tema6', titulo: 'Cierre', tipo: 'tema' },
    // PENDIENTE: descomentar al recibir el documento de evaluación del cliente
    // { id: 'evaluacion', titulo: 'Evaluación', tipo: 'especial' },
    { id: 'glosario', titulo: 'Glosario', tipo: 'especial' },
    { id: 'referencias', titulo: 'Referencias', tipo: 'especial' },
  ],
  /* GLOSARIO · literal de la tabla "Palabra, término o abreviatura | Significado" del DI */
  glosario: [
    { letra: 'A', termino: 'AirPack',
      definicion: 'Sistema de suministro de aire compacto que entrega una salida de presión media, usado como fuente de aire independiente, para uno o dos usuarios de equipos de respiración.' },
    { letra: 'A', termino: 'Atmósfera IPVS',
      definicion: 'Atmósfera inmediatamente peligrosa para la vida o la salud: concentración de una sustancia tóxica, corrosiva o asfixiante que representa una amenaza inmediata o interfiere con la capacidad de escape de una persona.' },
    { letra: 'E', termino: 'Equipo de circuito abierto (aire purificado)',
      definicion: 'Respirador con filtros o cartuchos intercambiables que purifican el aire del ambiente; no aporta oxígeno propio, por lo que solo se usa con contaminante conocido y oxígeno suficiente en el espacio.' },
    { letra: 'E', termino: 'Equipo de respiración autónoma (ERA)',
      definicion: 'Sistema de aire respirable de uso personal y portátil, utilizado en atmósferas con deficiencia de oxígeno o presencia de contaminantes que un filtro no puede manejar.' },
    { letra: 'E', termino: 'Espacio confinado',
      definicion: 'Lugar no diseñado para ocupación continua, con medios de entrada y salida restringidos o limitados, y lo suficientemente grande para que el cuerpo de un trabajador pueda entrar.' },
    { letra: 'E', termino: 'Estratificación de gases',
      definicion: 'Fenómeno por el cual los gases se concentran en diferentes niveles dentro de un espacio confinado, según su densidad respecto al aire y la temperatura del entorno.' },
    { letra: 'G', termino: 'Grado de peligrosidad',
      definicion: 'Clasificación (A, B o C) de un espacio confinado, según qué tan grave es el peligro para la vida o la salud de quien entra, siendo A el más crítico.' },
    { letra: 'G', termino: 'GTC 45',
      definicion: 'Guía Técnica Colombiana del ICONTEC para la identificación de peligros y la valoración de riesgos en seguridad y salud ocupacional, usada también para valorar los peligros de un espacio confinado.' },
    { letra: 'I', termino: 'IDLH',
      definicion: 'Immediately dangerous to life or health: concentración de una sustancia que presenta un peligro inmediato de daños graves irreversibles o de muerte.' },
    { letra: 'L', termino: 'LEL',
      definicion: 'Lower explosive limit (límite inferior de inflamabilidad): concentración mínima de un gas o vapor inflamable en el aire, a partir de la cual una fuente de ignición puede provocar una explosión.' },
    { letra: 'P', termino: 'Permiso de entrada a espacios confinados',
      definicion: 'Documento que autoriza formalmente el ingreso a una tarea concreta en un espacio confinado específico, firmado por el supervisor antes de que el trabajador entrante inicie la tarea.' },
    { letra: 'P', termino: 'Plan de rescate',
      definicion: 'Conjunto de procedimientos, roles y recursos definidos previamente, para atender de forma segura a una persona dentro de un espacio confinado verificado antes de autorizar el permiso de entrada.' },
    { letra: 'P', termino: 'Prueba de estanqueidad',
      definicion: 'Chequeo del medidor de gases que confirma que el equipo detecta cambios reales en la atmósfera y no está fallando de forma silenciosa, realizado antes de cada entrada.' },
    { letra: 'R', termino: 'Responsable del programa',
      definicion: 'Persona encargada del diseño, la administración y el aseguramiento del programa de gestión de trabajo seguro en espacios confinados de una organización.' },
    { letra: 'S', termino: 'STEL',
      definicion: 'Short time exposure limit: concentración de una sustancia a la que la mayoría de los trabajadores puede exponerse durante un máximo de 15 minutos, hasta 4 veces al día, sin efectos adversos.' },
    { letra: 'S', termino: 'Supervisor (espacios confinados)',
      definicion: 'Trabajador encargado de coordinar el ingreso a un espacio confinado, con autoridad para autorizar, rotar, negar, suspender o cancelar el permiso de entrada.' },
    { letra: 'T', termino: 'Tipo I (espacio confinado)',
      definicion: 'Espacio abierto por su parte superior, con una profundidad que dificulta la ventilación natural, como una zanja de más de 1,2 metros o un pozo.' },
    { letra: 'T', termino: 'Tipo II (espacio confinado)',
      definicion: 'Espacio cerrado con una abertura pequeña de entrada y salida, como un tanque, un túnel, una alcantarilla o un silo.' },
    { letra: 'T', termino: 'TLV',
      definicion: 'Threshold limit value (valor límite de umbral): concentración de una sustancia a la que se considera que casi todos los trabajadores pueden exponerse repetidamente, día tras día, sin efectos adversos para la salud.' },
    { letra: 'T', termino: 'Trabajador entrante',
      definicion: 'Trabajador capacitado y autorizado para ejecutar las actividades encomendadas dentro de un espacio confinado, cumpliendo las medidas de prevención y protección del programa de gestión.' },
    { letra: 'T', termino: 'Trabajador vigía',
      definicion: 'Trabajador que permanece en la entrada de un espacio confinado, verifica las condiciones de ingreso, monitorea la tarea y activa el plan de respuesta a emergencia si es necesario.' },
    { letra: 'T', termino: 'Trípode para rescate',
      definicion: 'Elemento de tres patas que se instala sobre la entrada de un espacio confinado, complemento del sistema de recuperación de una persona junto con el malacate.' },
    { letra: 'T', termino: 'TWA',
      definicion: 'Time-weighted average: concentración máxima ponderada de una sustancia a la que puede exponerse un trabajador en una jornada de 8 horas, en una semana de 40 horas, sin efectos adversos.' },
    { letra: 'V', termino: 'Ventilación forzada',
      definicion: 'Proceso mediante el cual se suministra o extrae aire de un espacio confinado usando dispositivos mecánicos, con el fin de controlar el calor, los gases y las partículas, y proveer aire respirable.' },
  ],
  referencias: [
    { texto: 'American National Standards Institute y American Society of Safety Professionals. (2016). ANSI/ASSP Z359.1, Safety requirements for personal fall arrest systems.' },
    { texto: 'Congreso de la República de Colombia. (1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias.' },
    { texto: 'Congreso de la República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el sistema de riesgos laborales.' },
    { texto: 'Consejo Colombiano de Seguridad (CCS) y Federación de Aseguradores Colombianos (Fasecolda). Informe de accidentalidad laboral en Colombia.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). GTC 45, Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2021). Resolución 4272 de 2021, por la cual se establecen los requisitos mínimos de seguridad para el desarrollo de trabajo en alturas, y se deroga la Resolución 1409 de 2012.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2020). Resolución 0491 de 2020, por la cual se establece el Programa de Gestión de Trabajo Seguro en Espacios Confinados.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2020). Resolución 2605 de 2020, por la cual se modifica y adiciona la Resolución 0491 de 2020.' },
    { texto: 'National Institute for Occupational Safety and Health (NIOSH). (1986). Request for Assistance in Preventing Occupational Fatalities in Confined Spaces. DHHS (NIOSH) Publication N.º 86-110.' },
    { texto: 'National Institute for Occupational Safety and Health (NIOSH). (1994). Worker Deaths in Confined Spaces: A Summary of NIOSH Surveillance and Investigative Findings. DHHS (NIOSH) Publication N.º 94-103.' },
  ],
  creditos: {
    bloques: [
      { titulo: 'Equipo del curso', personas: [
        { nombre: 'Pendiente confirmar', cargo: 'Dirección académica', area: '—' },
        { nombre: 'Pendiente confirmar', cargo: 'Diseño instruccional', area: '—' },
        { nombre: 'Pendiente confirmar', cargo: 'Validación técnica SST', area: '—' },
        { nombre: 'Pendiente confirmar', cargo: 'Diseño y desarrollo OVA', area: '—' },
      ] },
    ],
  },
};
