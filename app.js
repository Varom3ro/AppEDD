/**
 * State Management Pattern centralizado con persistencia
 */

// Datos Iniciales Mock
const INITIAL_USERS = [
  {
    "id": "u-admin-ana",
    "ci": "V-11111111",
    "name": "Ana Meinhard",
    "position": "Gerente General",
    "department": "Dirección",
    "role": "ADMIN",
    "supervisorId": null,
    "password": "Admin.Ana"
  },
  {
    "id": "u-admin-andrea",
    "ci": "V-22222222",
    "name": "Andrea Granda",
    "position": "Gerente de RRHH",
    "department": "Recursos Humanos",
    "role": "ADMIN",
    "supervisorId": null,
    "password": "Admin.Andrea"
  },
  {
    "id": "u-ext-v20327194",
    "ci": "V-20327194",
    "name": "Andrea Granada",
    "position": "Gerente de RRHH",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.20327194"
  },
  {
    "id": "u-ext-v18154875",
    "ci": "V-18154875",
    "name": "Ángel Navarro",
    "position": "Analista de Ventas y Cobranzas",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.18154875"
  },
  {
    "id": "u-ext-v29720696",
    "ci": "V-29720696",
    "name": "Angelimar Caña",
    "position": "Asistente Administrativo",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.29720696"
  },
  {
    "id": "u-ext-v27007894",
    "ci": "V-27007894",
    "name": "Angiemar Rivas",
    "position": "Dibujante",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.27007894"
  },
  {
    "id": "u-ext-v6403120",
    "ci": "V-6403120",
    "name": "Arelis Garcia",
    "position": "Auxiliar de limpieza planta",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.6403120"
  },
  {
    "id": "u-ext-e84275610",
    "ci": "E-84275610",
    "name": "Beatriz Pulido",
    "position": "Especialista Contable",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.84275610"
  },
  {
    "id": "u-ext-v20802219",
    "ci": "V-20802219",
    "name": "Carlos Acosta",
    "position": "Operario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.20802219"
  },
  {
    "id": "u-ext-v5300740",
    "ci": "V-5300740",
    "name": "Elisabeth Larez",
    "position": "Consultor Senior",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.5300740"
  },
  {
    "id": "u-ext-v18315353",
    "ci": "V-18315353",
    "name": "Gielymar Cáceres",
    "position": "Analista de compras y servicios",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.18315353"
  },
  {
    "id": "u-ext-v15133422",
    "ci": "V-15133422",
    "name": "Harold Rengifo",
    "position": "Coord. de Planificacion e Inventario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.15133422"
  },
  {
    "id": "u-ext-v14387196",
    "ci": "V-14387196",
    "name": "Jonathan Jauregui",
    "position": "Coordinador de Compras y Serv.",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.14387196"
  },
  {
    "id": "u-ext-v20129697",
    "ci": "V-20129697",
    "name": "Kelvin Velazco",
    "position": "Ejecutivo Comercial",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.20129697"
  },
  {
    "id": "u-ext-v11632344",
    "ci": "V-11632344",
    "name": "Laura Martinez",
    "position": "Operario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.11632344"
  },
  {
    "id": "u-ext-v24672787",
    "ci": "V-24672787",
    "name": "Luis Segovia",
    "position": "Operario de almacén y despacho",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.24672787"
  },
  {
    "id": "u-ext-v17756748",
    "ci": "V-17756748",
    "name": "Luisana Fermin",
    "position": "Coordinador de Contabilidad",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.17756748"
  },
  {
    "id": "u-ext-v10246342",
    "ci": "V-10246342",
    "name": "Maria Quintero",
    "position": "Consultor Senior",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.10246342"
  },
  {
    "id": "u-ext-v24210616",
    "ci": "V-24210616",
    "name": "Mariangel Guitian",
    "position": "Analista de Recursos Humanos",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.24210616"
  },
  {
    "id": "u-ext-v13233023",
    "ci": "V-13233023",
    "name": "Meyling Márquez",
    "position": "Gerente de Adm y Finanzas",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.13233023"
  },
  {
    "id": "u-ext-v6896225",
    "ci": "V-6896225",
    "name": "Patricia Garcia",
    "position": "Consultor Senior",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.6896225"
  },
  {
    "id": "u-ext-v11030217",
    "ci": "V-11030217",
    "name": "Rafael Cordero",
    "position": "Coordinador de instalaciones",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.11030217"
  },
  {
    "id": "u-ext-v19556977",
    "ci": "V-19556977",
    "name": "Ranses Guzmán",
    "position": "Jefe de Operaciones",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.19556977"
  },
  {
    "id": "u-ext-v6662200",
    "ci": "V-6662200",
    "name": "Roberto Graterol",
    "position": "Consultor de Servicios",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.6662200"
  },
  {
    "id": "u-ext-v22350304",
    "ci": "V-22350304",
    "name": "Ronald Andrade",
    "position": "Especialista Contable",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.22350304"
  },
  {
    "id": "u-ext-v6210373",
    "ci": "V-6210373",
    "name": "Ronald Peña",
    "position": "Coordinador de Instalación",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.6210373"
  },
  {
    "id": "u-ext-v12587278",
    "ci": "V-12587278",
    "name": "Rosalia Querales",
    "position": "Operario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.12587278"
  },
  {
    "id": "u-ext-v6402294",
    "ci": "V-6402294",
    "name": "Rufino Pacheco",
    "position": "Operario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.6402294"
  },
  {
    "id": "u-ext-v11666232",
    "ci": "V-11666232",
    "name": "Victor Ghinaglia",
    "position": "Dibujante",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.11666232"
  },
  {
    "id": "u-ext-v7928538",
    "ci": "V-7928538",
    "name": "Zulay Barrios",
    "position": "Auxiliar de Limpieza Las Mercedes",
    "department": "Administración y Finanzas",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.7928538"
  },
  {
    "id": "u-ext-v12960939",
    "ci": "V-12960939",
    "name": "Zulay Hernándezl",
    "position": "Ejecutivo Comercial",
    "department": "Comercial",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.12960939"
  },
  {
    "id": "u-ext-v11224702",
    "ci": "V-11224702",
    "name": "Yajaira Berbesi",
    "position": "Operario",
    "department": "Operaciones",
    "role": "EMPLOYEE",
    "supervisorId": "u-admin-ana",
    "password": "Edd.11224702"
  }
];

const ROLE_LABELS = {
  "ADMIN": "ADMINISTRADOR",
  "SUPERVISOR": "SUPERVISOR",
  "EMPLOYEE": "EMPLEADO"
};

function getMockDataForPosition(position, department) {
  const p = (position || "").toLowerCase();
  const d = (department || "").toLowerCase();

  // 1. DIBUJANTE
  if (p.includes("dibujante")) {
    return {
      categories: [
        { id: "cat-diseno", title: "DISEÑO Y DIBUJO TÉCNICO" },
        { id: "cat-soporte", title: "SOPORTE COMERCIAL Y AJUSTES" },
        { id: "cat-organizacion", title: "ORGANIZACIÓN E INNOVACIÓN" }
      ],
      goals: [
        { categoryId: "cat-diseno", title: "Tiempo de entrega de planos de despiece y modelado 3D.", indicator: "% de entregas en fecha acordada", target: ">= 95% de entregas a tiempo", weight: 30, q1: 95, q2: 98, q3: 94, q4: 97 },
        { categoryId: "cat-diseno", title: "Precisión técnica de planos de fabricación.", indicator: "Nº de incidencias de corrección técnica de planta", target: "<= 2 errores por trimestre", weight: 20, q1: 90, q2: 95, q3: 100, q4: 95 },
        { categoryId: "cat-soporte", title: "Velocidad de respuesta para modificaciones y ajustes.", indicator: "Tiempo promedio de actualización de planos en horas", target: "<= 8 horas hábiles", weight: 20, q1: 95, q2: 90, q3: 95, q4: 95 },
        { categoryId: "cat-soporte", title: "Optimización teórica del consumo de materiales.", indicator: "% de merma estimada en planos de corte (cómputos)", target: "<= 5% de desperdicio estimado", weight: 10, q1: 85, q2: 90, q3: 92, q4: 95 },
        { categoryId: "cat-organizacion", title: "Orden en la biblioteca digital de planos de la empresa.", indicator: "% de proyectos correctamente codificados y archivados", target: "100% de proyectos estandarizados", weight: 20, q1: 95, q2: 100, q3: 100, q4: 95 }
      ],
      incidents: [
        { id: "inc-1", month: "Mar", date: "2026-03-12", situation: "Diseño tridimensional complejo en tiempo récord para licitación corporativa clave.", consequence: "El área comercial ganó el contrato de 50 puestos de trabajo gracias a la calidad visual del render." }
      ]
    };
  }

  // 2. VENTAS / COMERCIAL
  if (p.includes("venta") || p.includes("cobranza") || p.includes("consultor") || p.includes("ejecutivo") || p.includes("comercial")) {
    return {
      categories: [
        { id: "cat-ventas", title: "GESTIÓN COMERCIAL Y VENTAS" },
        { id: "cat-servicio", title: "ATENCIÓN Y FIDELIZACIÓN DE CLIENTES" },
        { id: "cat-crm", title: "DESARROLLO Y PROCESOS INTERNOS" }
      ],
      goals: [
        { categoryId: "cat-ventas", title: "Cumplimiento de la cuota de ventas asignada.", indicator: "(Ventas reales / Cuota asignada) * 100", target: ">= 100% de la cuota trimestral", weight: 30, q1: 95, q2: 92, q3: 100, q4: 96 },
        { categoryId: "cat-ventas", title: "Tiempo de respuesta en cotizaciones y ofertas comerciales.", indicator: "Promedio en horas para el envío de propuestas", target: "<= 24 horas hábiles", weight: 20, q1: 92, q2: 96, q3: 95, q4: 100 },
        { categoryId: "cat-servicio", title: "Satisfacción de clientes atendidos (CSAT).", indicator: "Encuesta post-venta (Escala 1 al 5)", target: ">= 4.5 / 5 puntos", weight: 20, q1: 90, q2: 92, q3: 88, q4: 94 },
        { categoryId: "cat-servicio", title: "Fidelización de clientes recurrentes asignados.", indicator: "Nº de clientes activos con recompras anuales", target: ">= 85% de retención", weight: 10, q1: 100, q2: 90, q3: 90, q4: 100 },
        { categoryId: "cat-crm", title: "Registro oportuno de la gestión y visitas en el CRM.", indicator: "% de leads y cotizaciones registradas semanalmente", target: "100% de registros en la misma semana", weight: 20, q1: 85, q2: 90, q3: 95, q4: 90 }
      ],
      incidents: [
        { id: "inc-1", month: "Abr", date: "2026-04-18", situation: "Cierre exitoso del proyecto corporativo de oficinas de Banco Mercantil, superando la meta de ventas mensual.", consequence: "Incremento del 15% en el cumplimiento comercial del área y posicionamiento de la marca." },
        { id: "inc-2", month: "Sep", date: "2026-09-05", situation: "Resolución rápida de un reclamo por mobiliario con daño estético menor en obra de Banco Exterior.", consequence: "El cliente aprobó la entrega formal, felicitando el servicio de posventa y manteniendo la cuenta activa." }
      ]
    };
  }

  // 3. LIMPIEZA
  if (p.includes("limpieza") || p.includes("aseo") || p.includes("limpiador")) {
    return {
      categories: [
        { id: "cat-higiene", title: "LIMPIEZA E HIGIENE DE INSTALACIONES" },
        { id: "cat-insumos", title: "CONTROL Y EFICIENCIA DE INSUMOS" },
        { id: "cat-seguridad", title: "SEGURIDAD Y COOPERACIÓN" }
      ],
      goals: [
        { categoryId: "cat-higiene", title: "Higiene y mantenimiento de oficinas, baños y áreas comunes.", indicator: "Evaluación semanal del estado de limpieza por Supervisor", target: ">= 95% de nivel de conformidad", weight: 30, q1: 98, q2: 95, q3: 96, q4: 98 },
        { categoryId: "cat-higiene", title: "Presentación impecable del Showroom y áreas de clientes.", indicator: "Inspección de limpieza visual diaria en Showroom", target: "0 incidentes estéticos o reportes de desorden", weight: 20, q1: 100, q2: 95, q3: 98, q4: 100 },
        { categoryId: "cat-insumos", title: "Uso racional y eficiente de artículos de limpieza y desinfección.", indicator: "Consumo mensual de insumos vs presupuesto asignado", target: "<= 5% de desviación presupuestaria", weight: 20, q1: 95, q2: 98, q3: 95, q4: 95 },
        { categoryId: "cat-insumos", title: "Control de stock y solicitud oportuna de insumos.", indicator: "Alertas de reposición antes de ruptura de inventario", target: "0 quiebres de inventario de insumos críticos", weight: 10, q1: 90, q2: 100, q3: 100, q4: 100 },
        { categoryId: "cat-seguridad", title: "Cumplimiento estricto de normas de bioseguridad y uso de químicos.", indicator: "Inspecciones de uso de EPP y rotulado de envases químicos", target: "100% de cumplimiento en normas de seguridad", weight: 20, q1: 100, q2: 100, q3: 100, q4: 100 }
      ],
      incidents: [
        { id: "inc-1", month: "Sep", date: "2026-09-14", situation: "Detección y reporte oportuno de una pequeña filtración en la tubería principal del baño de planta.", consequence: "Evitó inundación y daños en el mobiliario de stock en el almacén adyacente. Reparación rápida." }
      ]
    };
  }

  // 4. COORDINADORES, JEFES DE OPERACIONES O INSTALACIÓN
  if (p.includes("coordinador") || p.includes("jefe") || p.includes("coord") || p.includes("planificacion") || p.includes("inventario") || p.includes("instalacion")) {
    return {
      categories: [
        { id: "cat-gestion", title: "GESTIÓN DE OPERACIONES E INSTALACIONES" },
        { id: "cat-servicio", title: "CALIDAD DE SERVICIO Y SATISFACCIÓN" },
        { id: "cat-presupuesto", title: "EFICIENCIA FINANCIERA Y DE COSTOS" }
      ],
      goals: [
        { categoryId: "cat-gestion", title: "Cumplimiento del cronograma de despacho e instalación acordado.", indicator: "% de proyectos terminados en fecha comprometida", target: ">= 95% de entregas a tiempo en obra", weight: 30, q1: 94, q2: 96, q3: 98, q4: 95 },
        { categoryId: "cat-gestion", title: "Control de mermas y desperdicios de material en instalación.", indicator: "% de materiales sobrantes/dañados vs planificados", target: "<= 3% de desviación técnica", weight: 20, q1: 90, q2: 95, q3: 95, q4: 92 },
        { categoryId: "cat-servicio", title: "Calidad en la entrega del mobiliario al cliente final.", indicator: "% de actas de entrega firmadas sin observaciones ('Conforme')", target: ">= 95% de firmas limpias", weight: 20, q1: 98, q2: 95, q3: 97, q4: 98 },
        { categoryId: "cat-servicio", title: "Seguridad y prevención de accidentes laborales en obra/planta.", indicator: "Nº de incidentes o accidentes de trabajo reportados", target: "0 incidentes reportados", weight: 10, q1: 100, q2: 100, q3: 100, q4: 100 },
        { categoryId: "cat-presupuesto", title: "Control de horas extras y viáticos del equipo de operaciones.", indicator: "Costo real de instalación vs presupuesto asignado", target: "<= 5% de desvío presupuestario", weight: 20, q1: 95, q2: 90, q3: 92, q4: 95 }
      ],
      incidents: [
        { id: "inc-1", month: "Jun", date: "2026-06-20", situation: "Coordinación impecable de cuadrilla múltiple para entrega nocturna especial en el centro empresarial de Caracas.", consequence: "Se instalaron 120 puestos de trabajo sin interrumpir la jornada del cliente. Cero quejas de ruidos." }
      ]
    };
  }

  // 5. CONTABILIDAD / ADMINISTRACIÓN / FINANZAS
  if (p.includes("contable") || p.includes("contabilidad") || p.includes("administr") || p.includes("finanzas") || p.includes("compras") || p.includes("asistente")) {
    return {
      categories: [
        { id: "cat-procesos", title: "PROCESOS CONTABLES Y CUMPLIMIENTO FISCAL" },
        { id: "cat-control", title: "CONTROL INTERNO Y TESORERÍA" },
        { id: "cat-eficiencia", title: "EFICIENCIA Y ORGANIZACIÓN DE SOPORTES" }
      ],
      goals: [
        { categoryId: "cat-procesos", title: "Cierre contable mensual oportuno y emisión de balances.", indicator: "Día del mes en que se presentan los estados contables", target: "Primeros 5 días hábiles del mes posterior", weight: 30, q1: 100, q2: 95, q3: 100, q4: 95 },
        { categoryId: "cat-procesos", title: "Declaraciones de IVA, ISLR y retenciones municipales sin multas.", indicator: "% de obligaciones tributarias presentadas en tiempo de ley", target: "100% presentados en fecha reglamentaria", weight: 20, q1: 100, q2: 100, q3: 100, q4: 100 },
        { categoryId: "cat-control", title: "Conciliación semanal de cuentas bancarias y de balance.", indicator: "% de cuentas bancarias conciliadas al final del mes", target: "100% de conciliaciones al día", weight: 20, q1: 95, q2: 98, q3: 100, q4: 95 },
        { categoryId: "cat-control", title: "Control de pagos oportunos a proveedores del exterior y nacionales.", indicator: "Tiempo promedio de procesamiento y emisión del pago", target: "<= 3 días hábiles desde aprobación", weight: 10, q1: 90, q2: 95, q3: 95, q4: 98 },
        { categoryId: "cat-eficiencia", title: "Digitalización y archivo estructurado de soportes de egresos.", indicator: "% de comprobantes con respaldo digital en repositorio compartido", target: "100% de egresos digitalizados", weight: 20, q1: 95, q2: 90, q3: 95, q4: 100 }
      ],
      incidents: [
        { id: "inc-1", month: "Jul", date: "2026-07-10", situation: "Detección a tiempo de una discrepancia en retención de IVA de un proveedor clave durante conciliación mensual.", consequence: "Evitó una multa fiscal y fiscalización del SENIAT estimada en un costo de más de 500 USD." }
      ]
    };
  }

  // 6. RECURSOS HUMANOS
  if (d.includes("recurso") || p.includes("rrhh") || p.includes("personal") || p.includes("humano")) {
    return {
      categories: [
        { id: "cat-talento", title: "GESTIÓN DEL TALENTO Y NÓMINA" },
        { id: "cat-clima", title: "DESARROLLO DE CLIMA Y CULTURA" },
        { id: "cat-control", title: "CONTROL DE ASISTENCIA Y SALUD" }
      ],
      goals: [
        { categoryId: "cat-talento", title: "Cálculo, procesamiento y pago exacto de la nómina.", indicator: "% de recibos de nómina sin reclamos justificables del personal", target: ">= 99% de exactitud en liquidaciones", weight: 30, q1: 100, q2: 100, q3: 98, q4: 100 },
        { categoryId: "cat-talento", title: "Reclutamiento y cobertura oportuna de cargos vacantes.", indicator: "Tiempo promedio de selección y onboarding en días", target: "<= 21 días promedio", weight: 20, q1: 90, q2: 95, q3: 90, q4: 95 },
        { categoryId: "cat-clima", title: "Cumplimiento del Plan Anual de Capacitación y Entrenamiento.", indicator: "% de horas ejecutadas vs. programadas en adiestramiento", target: ">= 90% de ejecución trimestral", weight: 20, q1: 90, q2: 95, q3: 92, q4: 95 },
        { categoryId: "cat-clima", title: "Actualización de expedientes físicos y digitales del personal.", indicator: "% de expedientes activos con documentos y contratos al día", target: "100% de expedientes sin rezagos", weight: 10, q1: 95, q2: 100, q3: 100, q4: 100 },
        { categoryId: "cat-control", title: "Control de ausentismo y planes preventivos de salud laboral.", indicator: "% de índice de ausentismo general en planta e instalaciones", target: "<= 3% de ausentismo no planificado", weight: 20, q1: 95, q2: 95, q3: 98, q4: 98 }
      ],
      incidents: [
        { id: "inc-1", month: "Ago", date: "2026-08-12", situation: "Organización integral del plan anual de capacitación en Higiene y Ergonomía Laboral para personal de planta.", consequence: "Reducción del 25% en los reportes trimestrales por dolores lumbares y fatiga física en el puesto." }
      ]
    };
  }

  // 7. OPERARIO / PRODUCCIÓN POR DEFECTO
  return {
    categories: [
      { id: "cat-prod", title: "PRODUCTIVIDAD Y CALIDAD OPERATIVA" },
      { id: "cat-seg", title: "SEGURIDAD INDUSTRIAL Y NORMAS (5S)" },
      { id: "cat-asis", title: "ASISTENCIA, EFICIENCIA Y COMPROMISO" }
    ],
    goals: [
      { categoryId: "cat-prod", title: "Cumplimiento de las cuotas de producción diaria y armado asignadas.", indicator: "% de órdenes de trabajo completadas en el tiempo estándar", target: ">= 98% de rendimiento operativo", weight: 30, q1: 96, q2: 98, q3: 99, q4: 97 },
      { categoryId: "cat-prod", title: "Minimización de rechazos de calidad en piezas y armado.", indicator: "% de piezas marcadas como no conformes por control de calidad", target: "<= 1.5% de rechazos de producción", weight: 20, q1: 95, q2: 95, q3: 92, q4: 96 },
      { categoryId: "cat-seg", title: "Uso obligatorio y correcto de los Equipos de Protección Personal (EPP).", indicator: "Nº de observaciones de seguridad por supervisores en planta", target: "0 observaciones de riesgo cometidas", weight: 20, q1: 100, q2: 100, q3: 100, q4: 100 },
      { categoryId: "cat-seg", title: "Orden y limpieza autónoma de la máquina o área asignada (5S).", indicator: "% de cumplimiento en auditorías de orden interno", target: ">= 90% de puntaje de orden y aseo", weight: 10, q1: 90, q2: 95, q3: 95, q4: 95 },
      { categoryId: "cat-asis", title: "Asistencia impecable y puntualidad al puesto de producción.", indicator: "Nº de retardos injustificados registrados en el biométrico", target: "<= 2 retardos al mes como máximo", weight: 20, q1: 95, q2: 98, q3: 95, q4: 100 }
    ],
    incidents: [
      { id: "inc-1", month: "May", date: "2026-05-10", situation: "Detección oportuna de una vibración extraña en la sierra principal antes de procesar lote crítico de melamina.", consequence: "Permitió corregir a tiempo la tensión de la hoja, evitando la merma de 10 tableros y posibles riesgos físicos." }
    ]
  };
}

class Store {
  constructor() {
    this.state = this.loadFromStorage();
    this.listeners = [];
  }

  getInitialState() {
    return {
      users: INITIAL_USERS,
      evaluations: {}, // Record<evalId, evalData>
      currentUser: null, // ID del usuario logueado
      currentEvalId: null, // ID de la evaluación seleccionada
      viewMode: 'cards', // 'cards' | 'list'
      globalEvalCount: 4 // Configuración corporativa global de la periodicidad
    };
  }

  loadFromStorage() {
    const state = this.getInitialState();
    
    // 1. Cargar datos persistentes (Compartidos entre pestañas y sesiones)
    const localData = localStorage.getItem("edd_app_state");
    if (localData) {
      const parsed = JSON.parse(localData);
      if (parsed.users) state.users = parsed.users;
      if (parsed.evaluations) {
        state.evaluations = parsed.evaluations;
      }
      if (parsed.viewMode) state.viewMode = parsed.viewMode;
      if (parsed.globalEvalCount !== undefined) state.globalEvalCount = parsed.globalEvalCount;
    }
    
    // 2. Cargar datos de sesión (Únicos por cada pestaña)
    const sessionData = sessionStorage.getItem("edd_app_session");
    if (sessionData) {
      const parsed = JSON.parse(sessionData);
      if (parsed.currentUser !== undefined) state.currentUser = parsed.currentUser;
      if (parsed.currentEvalId !== undefined) state.currentEvalId = parsed.currentEvalId;
    }
    
    return state;
  }

  saveToStorage(skipMerge = false) {
    // Merge: leer evaluaciones de otras pestañas antes de sobreescribir
    if (!skipMerge) {
      try {
        const stored = localStorage.getItem("edd_app_state");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.evaluations) {
            Object.keys(parsed.evaluations).forEach(evalId => {
              // Solo aceptar datos de otras pestañas para evaluaciones que NO estamos editando
              if (evalId !== this.state.currentEvalId) {
                this.state.evaluations[evalId] = parsed.evaluations[evalId];
              }
            });
          }
        }
      } catch(e) { /* silenciar errores de parse */ }
    }

    // Guardar datos persistentes globalmente
    localStorage.setItem("edd_app_state", JSON.stringify({
      users: this.state.users,
      evaluations: this.state.evaluations,
      viewMode: this.state.viewMode,
      globalEvalCount: this.state.globalEvalCount
    }));
    
    // Guardar sesión específicamente en esta pestaña
    sessionStorage.setItem("edd_app_session", JSON.stringify({
      currentUser: this.state.currentUser,
      currentEvalId: this.state.currentEvalId
    }));
  }

  setViewMode(mode) {
    this.state.viewMode = mode;
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify(skipMerge = false) {
    this.saveToStorage(skipMerge);
    this.listeners.forEach((listener) => listener());
  }

  // ==== AUTH & SESSION ====
  loginWithKey(key) {
    const user = this.state.users.find(u => u.password === key);
    if (user) {
      this.state.currentUser = user.id;
      this.state.currentEvalId = null;
      this.notify();
      return true;
    }
    return false;
  }

  logout() {
    this.state.currentUser = null;
    this.state.currentEvalId = null;
    this.notify();
  }

  selectEvaluation(evalId) {
    this.state.currentEvalId = evalId;
    this.notify();
  }

  // ==== USER MANAGEMENT ====
  addUser(userData) {
    const newUser = {
      id: "u-" + Date.now(),
      ...userData
    };
    this.state.users.push(newUser);
    this.notify();
  }

  updateUser(userId, userData) {
    const userIndex = this.state.users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      this.state.users[userIndex] = { ...this.state.users[userIndex], ...userData };
      this.notify();
    }
  }

  deleteUser(userId) {
    if (userId === "u-admin-ana") {
      alert("Operación denegada: No se puede eliminar a la Administradora Principal.");
      return;
    }
    const user = this.state.users.find(u => u.id === userId);
    if (!user) return;
    if (confirm(`¿Estás seguro de que deseas eliminar al usuario "${user.name}"?`)) {
      this.state.users = this.state.users.filter(u => u.id !== userId);
      this.notify();
    }
  }

  // ==== EVALUATIONS MANAGEMENT ====
  getOrCreateEvaluation(userId, year = new Date().getFullYear()) {
    const evalId = `${userId}-${year}`;
    if (!this.state.evaluations[evalId]) {
      // Crear nueva EDD vacía en blanco por defecto para producción real
      this.state.evaluations[evalId] = {
        id: evalId,
        userId: userId,
        year: year,
        status: "DRAFT", // DRAFT, PENDING_SUPERVISOR, PENDING_HR, APPROVED
        data: {
          categories: [{ id: "cat-init", title: "" }],
          goals: [{
            id: "goal-init", categoryId: "cat-init", title: "", indicator: "", target: "", weight: null,
            q1: null, q2: null, q3: null, q4: null
          }],
          incidents: [{ id: "inc-init", month: "", date: "", situation: "", consequence: "" }],
          evalCount: this.state.globalEvalCount || 4
        }
      };
      this.saveToStorage();
    }
    return evalId;
  }

  clearAndResetAllEvaluations(targetYear = new Date().getFullYear()) {
    this.state.evaluations = {};
    this.state.currentEvalId = null;
    
    // Forzar la creación de la evaluación en blanco por defecto para cada empleado en el estado
    this.state.users.forEach(u => {
      if (u.id !== "u-admin-ana") {
        const evalId = `${u.id}-${targetYear}`;
        this.state.evaluations[evalId] = {
          id: evalId,
          userId: u.id,
          year: Number(targetYear),
          status: "DRAFT",
          data: {
            categories: [{ id: "cat-init", title: "" }],
            goals: [{
              id: "goal-init", categoryId: "cat-init", title: "", indicator: "", target: "", weight: null,
              q1: null, q2: null, q3: null, q4: null
            }],
            incidents: [{ id: "inc-init", month: "", date: "", situation: "", consequence: "" }],
            evalCount: this.state.globalEvalCount || 4
          }
        };
      }
    });

    // Guardar directamente en localStorage sobreescribiendo todo el estado (evita merge de saveToStorage)
    localStorage.setItem("edd_app_state", JSON.stringify({
      users: this.state.users,
      evaluations: this.state.evaluations,
      viewMode: this.state.viewMode,
      globalEvalCount: this.state.globalEvalCount
    }));

    // Sincronizar el sessionStorage
    sessionStorage.setItem("edd_app_session", JSON.stringify({
      currentUser: this.state.currentUser,
      currentEvalId: this.state.currentEvalId
    }));

    // Notificar a los listeners sin invocar saveToStorage()
    this.listeners.forEach((listener) => listener());
  }

  seedRealisticEvaluations(year = new Date().getFullYear()) {
    this.state.evaluations = {};
    this.state.currentEvalId = null;

    this.state.users.forEach((u) => {
      if (u.id === "u-admin-ana") return;

      const evalId = `${u.id}-${year}`;
      const template = getMockDataForPosition(u.position, u.department);

      // Tiers de desempeño redistribuidos de forma corporativa estándar:
      // 0: Elite/Estrella (8%) -> Notas 85-94
      // 1: Sólido/Cumplidor (45%) -> Notas 71-82
      // 2: En Desarrollo/Inconsistente (35%) -> Notas 56-68
      // 3: Bajo Rendimiento/Riesgo (12%) -> Notas 38-52
      const rand = Math.random();
      let tier = 1;
      if (rand < 0.08) tier = 0;
      else if (rand < 0.53) tier = 1;
      else if (rand < 0.88) tier = 2;
      else tier = 3;

      let potential = "MEDIUM";
      if (tier === 0) {
        potential = Math.random() > 0.4 ? "HIGH" : "MEDIUM";
      } else if (tier === 1) {
        potential = Math.random() > 0.75 ? "HIGH" : (Math.random() > 0.3 ? "MEDIUM" : "LOW");
      } else if (tier === 2) {
        potential = Math.random() > 0.8 ? "HIGH" : (Math.random() > 0.4 ? "MEDIUM" : "LOW");
      } else {
        potential = Math.random() > 0.7 ? "MEDIUM" : "LOW";
      }

      const goals = template.goals.map((g, idx) => {
        let baseGrade = 80;
        if (tier === 0) baseGrade = 85 + Math.floor(Math.random() * 10);
        else if (tier === 1) baseGrade = 71 + Math.floor(Math.random() * 12);
        else if (tier === 2) baseGrade = 56 + Math.floor(Math.random() * 13);
        else baseGrade = 38 + Math.floor(Math.random() * 15);

        return {
          id: `goal-${idx}-${Date.now()}-${Math.floor(Math.random()*1000)}`,
          categoryId: g.categoryId,
          title: g.title,
          indicator: g.indicator,
          target: g.target,
          weight: g.weight,
          q1: Math.max(0, Math.min(100, baseGrade + Math.floor(Math.random() * 7) - 3)),
          q2: Math.max(0, Math.min(100, baseGrade + Math.floor(Math.random() * 7) - 3)),
          q3: Math.max(0, Math.min(100, baseGrade + Math.floor(Math.random() * 7) - 3)),
          q4: Math.max(0, Math.min(100, baseGrade + Math.floor(Math.random() * 7) - 3))
        };
      });

      this.state.evaluations[evalId] = {
        id: evalId,
        userId: u.id,
        year: year,
        status: Math.random() > 0.4 ? "APPROVED" : "PENDING_HR",
        data: {
          categories: template.categories,
          goals: goals,
          incidents: template.incidents || [],
          evalCount: this.state.globalEvalCount || 4,
          potential: potential
        }
      };
    });

    this.notify();
  }

  updateEvaluationStatus(status) {
    if (this.state.currentEvalId && this.state.evaluations[this.state.currentEvalId]) {
      this.state.evaluations[this.state.currentEvalId].status = status;
      this.notify();
    }
  }

  // Helpers de acceso rápido a la EDD activa
  getActiveData() {
    if (!this.state.currentEvalId) return null;
    return this.state.evaluations[this.state.currentEvalId]?.data;
  }

  // ==== EDD DATA MUTATORS ====
  setGlobalEvalCount(count) {
    this.state.globalEvalCount = count;
    // Actualizar todas las evaluaciones activas al nuevo periodo unificado
    Object.values(this.state.evaluations).forEach(ev => {
      if (ev.data) {
        ev.data.evalCount = count;
      }
    });
    this.notify(true); // Omitir merge para propagar el cambio global a todos los colaboradores
  }

  setEvalCount(count) {
    const data = this.getActiveData();
    if (data) {
      data.evalCount = count;
      this.notify();
    }
  }

  setPotential(potential) {
    const data = this.getActiveData();
    if (this.state.currentEvalId && this.state.evaluations[this.state.currentEvalId]) {
      this.state.evaluations[this.state.currentEvalId].data.potential = potential;
      this.notify();
    }
  }

  addCategory(title = "") {
    const data = this.getActiveData();
    if (data) {
      const newCategory = { id: Date.now().toString(), title };
      data.categories.push(newCategory);
      this.notify();
      return newCategory;
    }
  }

  updateCategory(id, newTitle) {
    const data = this.getActiveData();
    if (data) {
      const cat = data.categories.find((c) => c.id === id);
      if (cat) cat.title = newTitle;
      this.saveToStorage();
    }
  }

  removeCategory(id) {
    const data = this.getActiveData();
    if (data) {
      const cat = data.categories.find(c => c.id === id);
      const catTitle = cat ? (cat.title || "Sin nombre") : "esta categoría";
      if (confirm(`¿Estás seguro de que deseas eliminar la categoría "${catTitle}"? Esto también eliminará todos sus objetivos asociados.`)) {
        data.categories = data.categories.filter((c) => c.id !== id);
        data.goals = data.goals.filter((g) => g.categoryId !== id);
        this.notify();
      }
    }
  }

  addGoal(categoryId) {
    const data = this.getActiveData();
    if (data) {
      data.goals.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        categoryId,
        title: "", indicator: "", target: "", weight: null,
        q1: null, q2: null, q3: null, q4: null,
      });
      this.notify();
    }
  }

  updateGoal(id, field, value) {
    const data = this.getActiveData();
    if (data) {
      const goal = data.goals.find((g) => g.id === id);
      if (goal) {
        if (["weight", "q1", "q2", "q3", "q4"].includes(field)) {
          goal[field] = value === "" ? null : Number(value);
          this.saveToStorage();
          if (typeof updateEDDCalculations === "function") {
            updateEDDCalculations();
          }
        } else {
          goal[field] = value;
          this.saveToStorage();
        }
      }
    }
  }

  removeGoal(id) {
    const data = this.getActiveData();
    if (data) {
      const goal = data.goals.find(g => g.id === id);
      const goalTitle = goal ? (goal.title || "Sin nombre") : "este objetivo";
      if (confirm(`¿Estás seguro de que deseas eliminar el objetivo "${goalTitle}"?`)) {
        data.goals = data.goals.filter((g) => g.id !== id);
        this.notify();
      }
    }
  }

  addIncident() {
    const data = this.getActiveData();
    if (data) {
      data.incidents.push({
        id: Date.now().toString(), month: "", date: "", situation: "", consequence: "",
      });
      this.notify();
    }
  }

  updateIncident(id, field, value) {
    const data = this.getActiveData();
    if (data) {
      const incident = data.incidents.find((i) => i.id === id);
      if (incident) {
        incident[field] = value;
        this.saveToStorage();
      }
    }
  }

  removeIncident(id) {
    const data = this.getActiveData();
    if (data) {
      if (confirm(`¿Estás seguro de que deseas eliminar este incidente de la bitácora?`)) {
        data.incidents = data.incidents.filter((i) => i.id !== id);
        this.notify();
      }
    }
  }

  // Selectores y Cáculos
  calculateMCDM() {
    let totalWeight = 0;
    let globalScore = 0;
    const data = this.getActiveData();
    
    if (!data) return { totalWeight: 0, globalScore: 0, computedGoals: [], trimesterScores: [], categoryTotals: {} };

    const count = data.evalCount;
    const trimesterSums = Array(count).fill(0);
    const weightSumsPerTrim = Array(count).fill(0);

    const categoryTotals = {};
    data.categories.forEach(cat => {
      categoryTotals[cat.id] = {
        weightSum: 0, trimesterSums: Array(count).fill(0), weightSumsPerTrim: Array(count).fill(0),
        pointsSum: 0, trimesterScores: []
      };
    });

    const computedGoals = data.goals.map((goal) => {
      const w = Number(goal.weight) || 0;
      const catId = goal.categoryId;
      totalWeight += w;
      if (categoryTotals[catId]) categoryTotals[catId].weightSum += w;

      const trimValues = [goal.q1, goal.q2, goal.q3, goal.q4].slice(0, count).filter((v) => v !== null && v !== "");

      for (let i = 1; i <= count; i++) {
        const val = goal[`q${i}`];
        if (val !== null && val !== "") {
          const weightedVal = Number(val) * w;
          trimesterSums[i - 1] += weightedVal;
          weightSumsPerTrim[i - 1] += w;

          if (categoryTotals[catId]) {
            categoryTotals[catId].trimesterSums[i - 1] += weightedVal;
            categoryTotals[catId].weightSumsPerTrim[i - 1] += w;
          }
        }
      }

      let average = 0;
      const sum = trimValues.reduce((acc, curr) => acc + Number(curr), 0);
      if (count > 0) average = sum / count;

      const points = w * (average / 100);
      globalScore += points;
      if (categoryTotals[catId]) categoryTotals[catId].pointsSum += points;

      return { ...goal, average, points };
    });

    const trimesterScores = trimesterSums.map((sum, i) => weightSumsPerTrim[i] > 0 ? sum / weightSumsPerTrim[i] : 0);

    Object.keys(categoryTotals).forEach(catId => {
      const cat = categoryTotals[catId];
      cat.trimesterScores = cat.trimesterSums.map((sum, i) => cat.weightSumsPerTrim[i] > 0 ? sum / cat.weightSumsPerTrim[i] : 0);
    });

    return { totalWeight, globalScore, computedGoals, trimesterScores, categoryTotals };
  }
}

const store = new Store();
window.store = store; // Asegurar acceso global para onclick en HTML

// ==== GESTIÓN GLOBAL PARA EL CIERRE DE EVALUACIONES ====
window.closeActiveEvaluation = function() {
  sessionStorage.setItem("edd_employee_autoselected", "true");
  store.selectEvaluation(null);
};

// ==== INICIALIZACIÓN ====
function init() {
  setupDelegations();
  
  // Sincronizar cambios de otras pestañas en tiempo real
  window.addEventListener("storage", (e) => {
    if ((e.key === "edd_app_state" || e.key === "edd_app_history") && e.newValue) {
      try {
        if (e.key === "edd_app_state") {
          const parsed = JSON.parse(e.newValue);
          if (parsed.users) store.state.users = parsed.users;
          if (parsed.evaluations) {
            store.state.evaluations = parsed.evaluations;
          }
        }
        store.listeners.forEach(l => l()); // Re-render sin guardar
      } catch(err) {}
    }
  });

  store.subscribe(renderApp);
  store.notify(); // Trigger initial render
}

function renderApp() {
  const { currentUser, currentEvalId, users, evaluations } = store.state;

  if (!currentUser) {
    document.getElementById("login-modal").classList.remove("hidden");
    document.getElementById("app-content").classList.add("hidden");
    document.getElementById("login-key").value = "";
    
    // Resetear manualClose en logout
    const container = document.getElementById("dashboard-container");
    if (container) delete container.dataset.manualClose;
    return;
  }

  document.getElementById("login-modal").classList.add("hidden");
  document.getElementById("app-content").classList.remove("hidden");

  const loggedUser = users.find(u => u.id === currentUser);
  document.getElementById("logged-user-name").textContent = `Usuario activo: ${loggedUser.name} (${ROLE_LABELS[loggedUser.role] || loggedUser.role})`;

  // Top Nav Buttons logic
  const btnUserMgmt = document.getElementById("btn-user-management");
  const btnDashboard = document.getElementById("btn-dashboard");
  const btnAnalyticsNav = document.getElementById("btn-analytics-nav");
  
  if (loggedUser.role === "ADMIN" || loggedUser.role === "HR") {
    btnUserMgmt.classList.remove("hidden");
  } else {
    btnUserMgmt.classList.add("hidden");
  }
  
  if (loggedUser.role === "ADMIN") {
    btnAnalyticsNav.classList.remove("hidden");
  } else {
    btnAnalyticsNav.classList.add("hidden");
  }
  btnDashboard.classList.remove("hidden");

  const userMgmtContainer = document.getElementById("user-management-container");
  const dashboardContainer = document.getElementById("dashboard-container");
  const analyticsContainer = document.getElementById("analytics-container");

  const userMgmtHidden = userMgmtContainer.classList.contains("hidden");
  const dashboardHidden = dashboardContainer.classList.contains("hidden");
  const analyticsHidden = analyticsContainer.classList.contains("hidden");

  // Primer inicio tras login: decidir qué pestaña mostrar por defecto
  if (userMgmtHidden && dashboardHidden && analyticsHidden) {
    if (loggedUser.role === "ADMIN") {
      analyticsContainer.classList.remove("hidden");
    } else {
      dashboardContainer.classList.remove("hidden");
    }
  }

  // Rutas activas de renderizado
  if (!userMgmtContainer.classList.contains("hidden")) {
    if (loggedUser.role === "ADMIN" || loggedUser.role === "HR") {
      dashboardContainer.classList.add("hidden");
      analyticsContainer.classList.add("hidden");
      document.getElementById("evaluation-overlay").classList.add("hidden");
      renderUserManagement();
      return;
    } else {
      userMgmtContainer.classList.add("hidden");
    }
  }

  if (!analyticsContainer.classList.contains("hidden")) {
    if (loggedUser.role === "ADMIN") {
      userMgmtContainer.classList.add("hidden");
      dashboardContainer.classList.add("hidden");
      renderAnalytics(loggedUser);
    } else {
      analyticsContainer.classList.add("hidden");
      dashboardContainer.classList.remove("hidden");
      renderDashboard(loggedUser);
    }
  } else {
    renderDashboard(loggedUser);
  }

  if (currentEvalId && evaluations[currentEvalId]) {
    document.getElementById("evaluation-overlay").classList.remove("hidden");
    renderEmployeeInfo(evaluations[currentEvalId]);
    renderEDDMatrix();
    renderSTARMatrix();
    updateGlobalStats();
    autoResizeAllTextareas();
  } else {
    document.getElementById("evaluation-overlay").classList.add("hidden");
  }
}

function autoResizeAllTextareas() {
  setTimeout(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight) + 'px';
    });
  }, 25);
}

function calculateMCDMForData(data) {
  let totalWeight = 0;
  let globalScore = 0;
  
  if (!data) return { totalWeight: 0, globalScore: 0, trimesterScores: [] };

  const count = data.evalCount || 4;
  const trimesterSums = Array(count).fill(0);
  const weightSumsPerTrim = Array(count).fill(0);

  data.goals.forEach((goal) => {
    const w = Number(goal.weight) || 0;
    totalWeight += w;

    const trimValues = [goal.q1, goal.q2, goal.q3, goal.q4].slice(0, count).filter((v) => v !== null && v !== "");

    for (let i = 1; i <= count; i++) {
      const val = goal[`q${i}`];
      if (val !== null && val !== "") {
        const weightedVal = Number(val) * w;
        trimesterSums[i - 1] += weightedVal;
        weightSumsPerTrim[i - 1] += w;
      }
    }

    let average = 0;
    const sum = trimValues.reduce((acc, curr) => acc + Number(curr), 0);
    if (count > 0) average = sum / count;

    const points = w * (average / 100);
    globalScore += points;
  });

  const trimesterScores = trimesterSums.map((sum, i) => weightSumsPerTrim[i] > 0 ? sum / weightSumsPerTrim[i] : 0);

  return { totalWeight, globalScore, trimesterScores };
}

// ==== GENERADOR DE LA CAMPANA DE GAUSS INTERACTIVA (DISTRIBUCIÓN NORMAL) ====
function generateGaussWidget(scores, selectedDept = "all") {
  // Obtener departamentos únicos dinámicamente del store
  const departments = [...new Set(store.state.users.filter(u => u.id !== "u-admin-ana" && u.department).map(u => u.department))];
  departments.sort((a, b) => a.localeCompare(b));

  // Filtrar puntajes por departamento seleccionado si no es "all"
  const filteredScores = selectedDept === "all" 
    ? scores 
    : scores.filter(s => s.department === selectedDept);

  const N = filteredScores.length;
  
  // Cabecera premium del selector
  const headerHtml = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem;">
      <h3 style="margin: 0; border: none; padding: 0; font-size: 1.25rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.6rem;">
        🔔 Distribución y Dispersión de Calificaciones
      </h3>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <label for="gauss-dept-filter" style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0;">Área:</label>
        <select id="gauss-dept-filter" style="width: auto; padding: 0.35rem 0.75rem; font-size: 0.85rem; cursor: pointer; border-radius: 0.375rem; border: 1px solid var(--border-color); background: var(--surface-color); font-weight: 600;">
          <option value="all" ${selectedDept === 'all' ? 'selected' : ''}>-- Empresa Completa --</option>
          ${departments.map(d => `<option value="${d}" ${selectedDept === d ? 'selected' : ''}>${d}</option>`).join("")}
        </select>
      </div>
    </div>
  `;

  if (N < 2) {
    return `
      <!-- Widget de Campana de Gauss (Sin datos suficientes) -->
      <div class="analytics-widget" style="grid-column: span 2; margin-top: 2rem;">
        ${headerHtml}
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem; text-align: center; background: #f8fafc; border: 1px dashed var(--border-color); border-radius: 0.75rem;">
          <span style="font-size: 3.5rem; margin-bottom: 1rem; opacity: 0.85;">📊</span>
          <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary); font-weight: 700;">Datos estadísticos insuficientes</h4>
          <p style="margin: 0; color: var(--text-secondary); max-width: 450px; font-size: 0.85rem; line-height: 1.5;">Se requieren al menos dos colaboradores con evaluaciones puntuadas mayores a 0 en el área de <strong>"${selectedDept === 'all' ? 'Empresa Completa' : selectedDept}"</strong> para calcular la distribución normal.</p>
        </div>
      </div>
    `;
  }

  // Cálculos de Media y Desviación Estándar para los datos filtrados
  const mean = filteredScores.reduce((sum, item) => sum + item.score, 0) / N;
  const variance = filteredScores.reduce((sum, item) => sum + Math.pow(item.score - mean, 2), 0) / N;
  const stdDev = Math.max(Math.sqrt(variance), 0.01); // evitar división por cero

  // Función de Densidad de Probabilidad (PDF)
  const pdf = (x, mu, sigma) => {
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
  };

  // Dimensiones físicas del SVG
  const width = 1000;
  const height = 200;
  const paddingX = 50;
  const paddingYTop = 35;
  const paddingYBottom = 30;

  const plotWidth = width - 2 * paddingX;
  const plotHeight = height - paddingYTop - paddingYBottom;

  // Mapeadores lineales
  const scoreToX = (score) => paddingX + (score / 100) * plotWidth;
  const yMaxVal = pdf(mean, mean, stdDev);
  const scoreToY = (score) => {
    const val = pdf(score, mean, stdDev);
    return height - paddingYBottom - (val / yMaxVal) * plotHeight;
  };

  // Generar puntos de la curva teórica
  let pathPoints = [];
  for (let s = 0; s <= 100; s += 0.5) {
    const px = scoreToX(s);
    const py = scoreToY(s);
    pathPoints.push(`${px},${py}`);
  }
  const curveD = `M ` + pathPoints.join(" L ");
  
  const startX = scoreToX(0);
  const startY = height - paddingYBottom;
  const endX = scoreToX(100);
  const endY = height - paddingYBottom;
  const areaD = `M ${startX},${startY} L ` + pathPoints.join(" L ") + ` L ${endX},${endY} Z`;

  // Renderizar las líneas verticales de guía
  const meanX = scoreToX(mean);
  const meanYTop = scoreToY(mean);

  // Líneas de 1 Desviación Estándar (-1SD y +1SD)
  const sdLeft = Math.max(mean - stdDev, 0);
  const sdRight = Math.min(mean + stdDev, 100);
  const sdLeftX = scoreToX(sdLeft);
  const sdLeftY = scoreToY(sdLeft);
  const sdRightX = scoreToX(sdRight);
  const sdRightY = scoreToY(sdRight);

  // Renderizar los puntos de los empleados reales filtrados
  let employeePointsHtml = '';
  filteredScores.forEach(emp => {
    const px = scoreToX(emp.score);
    const py = scoreToY(emp.score);
    employeePointsHtml += `
      <circle class="gauss-employee-point" cx="${px}" cy="${py}" r="7.5" 
              data-name="${emp.name}" data-score="${emp.score.toFixed(2)}">
      </circle>
    `;
  });

  // Determinar interpretación de la distribución
  let interpTitle = "";
  let interpText = "";
  let interpColor = "";
  let interpBg = "";
  const areaName = selectedDept === "all" ? "general de la empresa" : `del departamento de <strong>${selectedDept}</strong>`;
  
  if (mean > 85) {
    interpTitle = "Sesgo de Desempeño Alto (Lenidad)";
    interpText = `La media ${areaName} es de <strong>${mean.toFixed(2)} pts</strong>. Las evaluaciones están notablemente sesgadas hacia el extremo superior. Esto puede indicar un desempeño excepcional generalizado en esta área, o un criterio de calificación sumamente flexible por parte de los supervisores (Lenidad). Se sugiere contrastar si los objetivos trazados fueron suficientemente exigentes.`;
    interpColor = "#10b981"; // verde
    interpBg = "rgba(16, 185, 129, 0.04)";
  } else if (mean < 70) {
    interpTitle = "Sesgo de Desempeño Crítico (Exigencia)";
    interpText = `La media ${areaName} es de <strong>${mean.toFixed(2)} pts</strong>. Las puntuaciones se concentran en el extremo inferior. Esto puede deberse a objetivos excesivamente severos, rigidez extrema en los criterios de valoración, o limitaciones operativas severas. Se sugiere revisar la viabilidad de las metas propuestas.`;
    interpColor = "#ef4444"; // rojo
    interpBg = "rgba(239, 68, 68, 0.04)";
  } else {
    interpTitle = "Distribución Normal Balanceada";
    interpText = `La media ${areaName} es de <strong>${mean.toFixed(2)} pts</strong>. Muestra un equilibrio estadístico ideal. Refleja que la mayoría del personal cumple con los estándares óptimos esperados, con proporciones adecuadas de desempeño en desarrollo y logros sobresalientes. Indica un proceso EDD justo, equilibrado y bien calibrado.`;
    interpColor = "#8b5cf6"; // morado
    interpBg = "rgba(139, 92, 246, 0.04)";
  }

  return `
    <!-- Widget de Campana de Gauss -->
    <div class="analytics-widget" style="grid-column: span 2; margin-top: 2rem;">
      ${headerHtml}
      
      <div class="gauss-main-layout">
        
        <!-- Tarjeta de Gráfico SVG -->
        <div class="gauss-chart-card">
          <div class="gauss-svg-wrapper">
            <div class="gauss-tooltip" id="gauss-tooltip"></div>
            
            <svg viewBox="0 0 ${width} ${height}" class="gauss-svg">
              <defs>
                <linearGradient id="gauss-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="50%" stop-color="#8b5cf6" />
                  <stop offset="100%" stop-color="#ec4899" />
                </linearGradient>
                <linearGradient id="gauss-area-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#8b5cf6" stop-opacity="1" />
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                </linearGradient>
              </defs>
              
              <!-- Línea Base y Ejes -->
              <line x1="${paddingX}" y1="${height - paddingYBottom}" x2="${width - paddingX}" y2="${height - paddingYBottom}" stroke="#cbd5e1" stroke-width="2" />
              
              <!-- Líneas Guía de Eje X (Puntajes de 0 a 100) -->
              <line x1="${scoreToX(0)}" y1="${height - paddingYBottom}" x2="${scoreToX(0)}" y2="${height - paddingYBottom + 8}" stroke="#94a3b8" stroke-width="1.5" />
              <line x1="${scoreToX(25)}" y1="${height - paddingYBottom}" x2="${scoreToX(25)}" y2="${height - paddingYBottom + 5}" stroke="#cbd5e1" stroke-width="1" />
              <line x1="${scoreToX(50)}" y1="${height - paddingYBottom}" x2="${scoreToX(50)}" y2="${height - paddingYBottom + 8}" stroke="#94a3b8" stroke-width="1.5" />
              <line x1="${scoreToX(75)}" y1="${height - paddingYBottom}" x2="${scoreToX(75)}" y2="${height - paddingYBottom + 5}" stroke="#cbd5e1" stroke-width="1" />
              <line x1="${scoreToX(100)}" y1="${height - paddingYBottom}" x2="${scoreToX(100)}" y2="${height - paddingYBottom + 8}" stroke="#94a3b8" stroke-width="1.5" />
              
              <!-- Etiquetas Eje X -->
              <text x="${scoreToX(0)}" y="${height - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">0 Ptos</text>
              <text x="${scoreToX(25)}" y="${height - 10}" text-anchor="middle" font-size="10" font-weight="600" fill="#94a3b8">25 Ptos</text>
              <text x="${scoreToX(50)}" y="${height - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">50 Ptos</text>
              <text x="${scoreToX(75)}" y="${height - 10}" text-anchor="middle" font-size="10" font-weight="600" fill="#94a3b8">75 Ptos</text>
              <text x="${scoreToX(100)}" y="${height - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">100 Ptos</text>

              <!-- Área bajo la Curva -->
              <path class="gauss-curve-area" d="${areaD}" />

              <!-- Líneas Guía de la Media y Desviación Estándar -->
              <!-- Media (μ) -->
              <line x1="${meanX}" y1="${meanYTop}" x2="${meanX}" y2="${height - paddingYBottom}" class="gauss-mean-line" />
              <circle cx="${meanX}" cy="${meanYTop}" r="4" fill="#8b5cf6" />
              
              <!-- -1 SD -->
              <line x1="${sdLeftX}" y1="${sdLeftY}" x2="${sdLeftX}" y2="${height - paddingYBottom}" class="gauss-axis-line" stroke="#3b82f6" />
              <!-- +1 SD -->
              <line x1="${sdRightX}" y1="${sdRightY}" x2="${sdRightX}" y2="${height - paddingYBottom}" class="gauss-axis-line" stroke="#ec4899" />
              
              <!-- La Curva Teórica -->
              <path class="gauss-curve-line" d="${curveD}" />

              <!-- Puntos Reales de Empleados -->
              ${employeePointsHtml}
            </svg>
          </div>
          
          <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 0.5rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #8b5cf6; display: inline-block;"></span>
              <span style="color: #8b5cf6;">Media (μ)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="width: 15px; height: 2px; border-top: 1.5px dashed var(--border-color); display: inline-block;"></span>
              <span style="color: var(--text-secondary);">Rangos σ (Desviación)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #3b82f6; border: 1.5px solid white; display: inline-block; box-shadow: 0 1px 2px rgba(0,0,0,0.1);"></span>
              <span style="color: #3b82f6;">Colaboradores (Interactivos)</span>
            </div>
          </div>
        </div>
        
        <!-- Tarjeta de Estadísticas e Interpretación -->
        <div class="gauss-stats-card">
          
          <div class="gauss-stat-mini">
            <span class="gauss-stat-mini-label">Media General (μ)</span>
            <span class="gauss-stat-mini-value" style="color: #8b5cf6;">${mean.toFixed(2)} pts</span>
          </div>

          <div class="gauss-stat-mini">
            <span class="gauss-stat-mini-label">Desv. Estándar (σ)</span>
            <span class="gauss-stat-mini-value" style="color: #3b82f6;">${stdDev.toFixed(2)} pts</span>
          </div>

          <!-- Cuadro interpretativo dinámico -->
          <div class="gauss-interpretation-box" style="background: ${interpBg}; border-color: rgba(139, 92, 246, 0.15);">
            <div class="gauss-interpretation-title" style="color: ${interpColor};">
              <span>🎯</span>
              <span>${interpTitle}</span>
            </div>
            <p class="gauss-interpretation-text">${interpText}</p>
          </div>

        </div>

      </div>
    </div>
  `;
}

// ==== GENERADOR DE LA MATRIZ DE TALENTO DE 9 CAJAS (9-BOX GRID) ====
function generateNineBoxWidget(scores, selectedDept = "all") {
  const filteredScores = selectedDept === "all" 
    ? scores 
    : scores.filter(s => s.department === selectedDept);

  const cells = {
    "high-high": { title: "Talento Estratégico", desc: "Potencial Alto • Desempeño Alto", class: "nb-star", employees: [] },
    "high-medium": { title: "Talento en Aumento", desc: "Potencial Alto • Desempeño Medio", class: "nb-high-grow", employees: [] },
    "high-low": { title: "Talento no Comprobado", desc: "Potencial Alto • Desempeño Bajo", class: "nb-core", employees: [] },
    
    "medium-high": { title: "Talento Clave", desc: "Potencial Medio • Desempeño Alto", class: "nb-high-grow", employees: [] },
    "medium-medium": { title: "Protagonista Clave", desc: "Potencial Medio • Desempeño Medio", class: "nb-core", employees: [] },
    "medium-low": { title: "Contribución Inconsistente", desc: "Potencial Medio • Desempeño Bajo", class: "nb-inconsistent", employees: [] },
    
    "low-high": { title: "Experto", desc: "Potencial Bajo • Desempeño Alto", class: "nb-core", employees: [] },
    "low-medium": { title: "Profesional Sólido", desc: "Potencial Bajo • Desempeño Medio", class: "nb-inconsistent", employees: [] },
    "low-low": { title: "Baja Contribución", desc: "Potencial Bajo • Desempeño Bajo", class: "nb-risk", employees: [] }
  };

  filteredScores.forEach(emp => {
    let perfKey = "low";
    if (emp.score > 85) perfKey = "high";
    else if (emp.score >= 70) perfKey = "medium";

    const potKey = (emp.potential || "MEDIUM").toLowerCase();
    const key = `${potKey}-${perfKey}`;

    if (cells[key]) {
      cells[key].employees.push(emp);
    }
  });

  const renderCellHtml = (key, col, row) => {
    const cell = cells[key];
    const avatarsHtml = cell.employees.map(emp => {
      const initials = emp.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
      return `
        <div class="ninebox-talent-avatar" 
             data-name="${emp.name}" 
             data-score="${emp.score.toFixed(2)}" 
             data-potential="${emp.potential === 'HIGH' ? 'Alto' : emp.potential === 'LOW' ? 'Bajo' : 'Medio'}"
             data-position="${emp.position}"
             data-dept="${emp.department}">
          ${initials}
        </div>
      `;
    }).join("");

    return `
      <div class="ninebox-cell ${cell.class}" style="grid-column: ${col}; grid-row: ${row};">
        <div class="ninebox-cell-header">
          <div>
            <div class="ninebox-cell-title">${cell.title}</div>
            <div style="font-size: 0.6rem; opacity: 0.7; font-weight: 700; text-transform: uppercase;">${cell.desc}</div>
          </div>
          <div class="ninebox-cell-count">${cell.employees.length}</div>
        </div>
        <div class="ninebox-avatars-container">
          ${avatarsHtml}
        </div>
      </div>
    `;
  };

  return `
    <!-- Widget de la Matriz de Talento (9-Box Grid) -->
    <div class="ninebox-widget-container" style="margin-top: 2rem;">
      <div class="ninebox-grid-card">
        <div class="gauss-tooltip" id="ninebox-tooltip"></div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem;">
          <h3 style="margin: 0; border: none; padding: 0; font-size: 1.25rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.6rem;">
            🔳 Matriz de Talento (9 Box)
          </h3>
          <div style="display: flex; gap: 0.5rem; align-items: center; position: relative;">
            <button id="btn-ninebox-info" class="btn btn-icon" style="background: #2563eb; border: none; font-size: 1.15rem; cursor: pointer; color: white; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; padding: 0; padding-bottom: 5px; font-weight: 800; font-family: inherit; line-height: 1;" title="¿Cómo funciona la Matriz de Talento?">¡</button>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); background: #f1f5f9; padding: 0.25rem 0.6rem; border-radius: 0.25rem;">
              Área: ${selectedDept === 'all' ? 'Empresa Completa' : selectedDept}
            </span>
            
            <!-- POPUP INFO CARD -->
            <div id="ninebox-info-card" class="hidden" style="position: absolute; right: 0; top: 100%; margin-top: 0.5rem; width: 480px; background: rgba(15, 23, 42, 0.98); color: white; padding: 1.25rem; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); z-index: 100; font-size: 0.8rem; line-height: 1.5; pointer-events: auto; text-align: left;">
              <div style="font-weight: 800; color: #60a5fa; margin-bottom: 0.75rem; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.4rem; display: flex; justify-content: space-between; align-items: center;">
                <span>🎯 Criterios de Clasificación (9-Box)</span>
                <button onclick="document.getElementById('ninebox-info-card').classList.add('hidden')" style="background:none; border:none; color:rgba(255,255,255,0.5); font-size:1.2rem; cursor:pointer; line-height:1;">&times;</button>
              </div>
              <p style="margin: 0 0 0.75rem 0; color: #cbd5e1;">El puntaje de la evaluación EDD determina la columna (<strong>Desempeño / Eje X</strong>) en la que se ubica el colaborador, mientras que su nivel asignado de <strong>Potencial (Eje Y)</strong> define la fila:</p>
              <ul style="margin: 0; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.6rem; color: #e2e8f0; list-style-type: disc;">
                <li><strong>Desempeño Alto (Puntaje mayor a 85 pts):</strong> Corresponde a la columna derecha e incluye los perfiles de <em>Talento Estratégico</em> (Potencial Alto), <em>Talento Clave</em> (Potencial Medio) y <em>Experto</em> (Potencial Bajo).</li>
                <li><strong>Desempeño Medio (Entre 70 y 85 pts inclusive):</strong> Corresponde a la columna central e incluye a <em>Talento en Aumento</em> (Potencial Alto), <em>Protagonista Clave</em> (Potencial Medio) y <em>Profesional Sólido</em> (Potencial Bajo).</li>
                <li><strong>Desempeño Bajo (Puntaje menor a 70 pts):</strong> Corresponde a la columna izquierda e incluye a <em>Talento no Comprobado</em> (Potencial Alto), <em>Contribución Inconsistente</em> (Potencial Medio) y <em>Baja Contribución</em> (Potencial Bajo).</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ninebox-grid-layout">

          <!-- Eje Y labels individualmente alineados a cada celda de la fila -->
          <div style="grid-column: 1; grid-row: 1; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-secondary); writing-mode: vertical-lr; transform: rotate(180deg); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; height: 100%;">
            <span>↑ ALTO</span>
          </div>
          <div style="grid-column: 1; grid-row: 2; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-secondary); writing-mode: vertical-lr; transform: rotate(180deg); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; height: 100%;">
            <span>POTENCIAL (Y)</span>
          </div>
          <div style="grid-column: 1; grid-row: 3; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-secondary); writing-mode: vertical-lr; transform: rotate(180deg); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; height: 100%;">
            <span>BAJO ↓</span>
          </div>

          <!-- Celdas de la Matriz (Fila 1: Potencial Alto) -->
          ${renderCellHtml("high-low", 2, 1)}
          ${renderCellHtml("high-medium", 3, 1)}
          ${renderCellHtml("high-high", 4, 1)}

          <!-- Celdas (Fila 2: Potencial Medio) -->
          ${renderCellHtml("medium-low", 2, 2)}
          ${renderCellHtml("medium-medium", 3, 2)}
          ${renderCellHtml("medium-high", 4, 2)}

          <!-- Celdas (Fila 3: Potencial Bajo) -->
          ${renderCellHtml("low-low", 2, 3)}
          ${renderCellHtml("low-medium", 3, 3)}
          ${renderCellHtml("low-high", 4, 3)}

          <!-- Eje X label -->
          <div class="ninebox-axis-x-label" style="grid-column: 2 / span 3; grid-row: 4; display: flex; justify-content: space-between; width: 100%; padding: 0.5rem 1rem; font-weight: bold; color: var(--text-secondary);">
            <span>← BAJO</span>
            <span>DESEMPEÑO (X)</span>
            <span>ALTO →</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAnalytics(loggedUser) {
  const container = document.getElementById("analytics-container");
  const { users } = store.state;
  const targetUsers = users.filter(u => u.id !== "u-admin-ana"); // Excluir Directora General

  // Determinar la periodicidad corporativa predominante (el evalCount más común, por defecto 4)
  const evalCounts = targetUsers.map(u => {
    const evalId = store.getOrCreateEvaluation(u.id);
    const ev = store.state.evaluations[evalId];
    return ev?.data?.evalCount || 4;
  });
  
  // Encontrar el valor más frecuente (moda)
  const countFrequencies = {};
  let dominantEvalCount = 4;
  let maxFreq = 0;
  evalCounts.forEach(c => {
    countFrequencies[c] = (countFrequencies[c] || 0) + 1;
    if (countFrequencies[c] > maxFreq) {
      maxFreq = countFrequencies[c];
      dominantEvalCount = c;
    }
  });

  let trendTitle = "Tendencia Trimestral Corporativa";
  let periodNames = ["Trimestre 1", "Trimestre 2", "Trimestre 3", "Trimestre 4"];
  if (dominantEvalCount === 1) {
    trendTitle = "Desempeño Anual Corporativo";
    periodNames = ["Anual"];
  } else if (dominantEvalCount === 2) {
    trendTitle = "Tendencia Semestral Corporativa";
    periodNames = ["Semestre 1", "Semestre 2"];
  } else if (dominantEvalCount === 3) {
    trendTitle = "Tendencia Cuatrimestral Corporativa";
    periodNames = ["Cuatrimestre 1", "Cuatrimestre 2", "Cuatrimestre 3"];
  }

  let totalScoreSum = 0;
  let evaluatedCount = 0;
  const statusCounts = { APPROVED: 0, PENDING_HR: 0, PENDING_SUPERVISOR: 0, DRAFT: 0 };
  const deptScores = {};
  const trimScoresSum = Array(dominantEvalCount).fill(0);
  const trimScoresCount = Array(dominantEvalCount).fill(0);
  const rankingList = [];
  const allIncidents = [];
  const pendingByStatus = { PENDING_HR: [], PENDING_SUPERVISOR: [], DRAFT: [] };

  targetUsers.forEach(u => {
    const evalId = store.getOrCreateEvaluation(u.id);
    const ev = store.state.evaluations[evalId];
    if (ev) {
      const { globalScore, trimesterScores } = calculateMCDMForData(ev.data);
      
      const currentStatus = ev.status || "DRAFT";
      if (statusCounts[currentStatus] !== undefined) {
        statusCounts[currentStatus]++;
      }
      if (currentStatus !== "APPROVED" && pendingByStatus[currentStatus]) {
        pendingByStatus[currentStatus].push({
          name: u.name,
          position: u.position,
          dept: u.department || "General"
        });
      }

      if (globalScore > 0) {
        totalScoreSum += globalScore;
        evaluatedCount++;

        const dept = u.department || "General";
        if (!deptScores[dept]) {
          deptScores[dept] = { sum: 0, count: 0 };
        }
        deptScores[dept].sum += globalScore;
        deptScores[dept].count++;

        trimesterScores.forEach((score, idx) => {
          if (idx < dominantEvalCount && score > 0) {
            trimScoresSum[idx] += score;
            trimScoresCount[idx]++;
          }
        });
      }

      rankingList.push({
        id: u.id,
        name: u.name,
        position: u.position,
        department: u.department,
        score: globalScore,
        potential: ev.data.potential || "MEDIUM"
      });

      if (ev.data && ev.data.incidents) {
        ev.data.incidents.forEach(inc => {
          if (inc.situation && inc.situation.trim() !== "" && inc.consequence && inc.consequence.trim() !== "") {
            allIncidents.push({
              employeeName: u.name,
              employeePosition: u.position,
              employeeDept: u.department || "General",
              month: inc.month,
              date: inc.date,
              situation: inc.situation,
              consequence: inc.consequence
            });
          }
        });
      }
    }
  });

  const avgCompanyScore = evaluatedCount > 0 ? (totalScoreSum / evaluatedCount) : 0;
  
  // Ordenar ranking
  rankingList.sort((a, b) => b.score - a.score);
  const evaluatedList = rankingList.filter(emp => emp.score > 0);
  const top3 = evaluatedList.slice(0, 3);
  const bottom3 = evaluatedList.length > 3 ? evaluatedList.slice(-3) : [];

  // Calcular promedios por departamento
  const deptAverages = Object.keys(deptScores).map(dept => ({
    name: dept,
    score: deptScores[dept].sum / deptScores[dept].count
  }));
  deptAverages.sort((a, b) => b.score - a.score);

  // Calcular promedios trimestrales corporativos
  const trimAverages = trimScoresSum.map((sum, idx) => trimScoresCount[idx] > 0 ? sum / trimScoresCount[idx] : 0);

  // Mapear gradientes personalizados por departamento
  const DEPT_GRADIENTS = {
    "recursos humanos": "linear-gradient(90deg, #10b981 0%, #34d399 100%)",
    "comercial": "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
    "administración y finanzas": "linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)",
    "operaciones": "linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)",
    "dirección": "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)"
  };

  // Lógica de gráfico de dona (Donut Chart SVG)
  const totalEvals = targetUsers.length;
  const approvedPct = totalEvals > 0 ? (statusCounts.APPROVED / totalEvals) * 100 : 0;
  const pendingHrPct = totalEvals > 0 ? (statusCounts.PENDING_HR / totalEvals) * 100 : 0;
  const pendingSuperPct = totalEvals > 0 ? (statusCounts.PENDING_SUPERVISOR / totalEvals) * 100 : 0;
  const draftPct = totalEvals > 0 ? (statusCounts.DRAFT / totalEvals) * 100 : 0;

  let accumulated = 0;
  const donutSegments = [
    { pct: approvedPct, color: "#10b981", class: "approved" },
    { pct: pendingHrPct, color: "#f97316", class: "pending-hr" },
    { pct: pendingSuperPct, color: "#eab308", class: "pending-super" },
    { pct: draftPct, color: "#94a3b8", class: "draft" }
  ].filter(s => s.pct > 0);

  let donutSvgHtml = `
    <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut-chart">
      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f1f5f9" stroke-width="4.5"></circle>
  `;

  donutSegments.forEach(seg => {
    const offset = 100 - accumulated + 25; // +25 para rotar el inicio a las 12 en punto
    donutSvgHtml += `
      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" 
              fill="transparent" stroke="${seg.color}" stroke-width="4.5" 
              stroke-dasharray="${seg.pct} ${100 - seg.pct}" 
              stroke-dashoffset="${offset}">
      </circle>
    `;
    accumulated += seg.pct;
  });

  donutSvgHtml += `
      <g class="donut-text">
        <text x="50%" y="49%" class="donut-number">${totalEvals}</text>
        <text x="50%" y="62%" class="donut-label">Total EDD</text>
      </g>
    </svg>
  `;

  // Armar el HTML espectacular
  let html = `
    <div class="analytics-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 1rem;">
      <h2 style="margin: 0; border: none; padding: 0; font-size: 1.6rem; color: #2c3e50; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">📊 Dashboard Analítico de Desempeño (EDD)</h2>
      <button id="btn-print-report" class="btn btn-print-report-nav">📄 Exportar Reporte de Supervisión</button>
    </div>

    <!-- KPIs Corporativos -->
    <div class="kpi-row">
      <div class="kpi-card kpi-hero">
        <span class="kpi-title">Desempeño Promedio</span>
        <span class="kpi-value">${avgCompanyScore.toFixed(2)} pts</span>
        <span class="kpi-subtext">⭐ Cumplimiento General: ${avgCompanyScore.toFixed(1)}%</span>
      </div>
      <div class="kpi-card kpi-purple">
        <span class="kpi-title">Colaboradores</span>
        <span class="kpi-value">${targetUsers.length}</span>
        <span class="kpi-subtext">👥 Personal bajo evaluación EDD</span>
      </div>
      <div class="kpi-card kpi-green">
        <span class="kpi-title">EDDs Aprobadas</span>
        <span class="kpi-value">${statusCounts.APPROVED}</span>
        <span class="kpi-subtext">✔️ ${((statusCounts.APPROVED / targetUsers.length) * 100).toFixed(0)}% del total completado</span>
      </div>
      <div class="kpi-card kpi-yellow">
        <span class="kpi-title">Pendientes de Firma</span>
        <span class="kpi-value">${statusCounts.PENDING_HR + statusCounts.PENDING_SUPERVISOR}</span>
        <span class="kpi-subtext">⏳ Requieren revisión de RRHH/Supervisor</span>
      </div>
    </div>

    <!-- Layout de dos columnas: Estatus + Tendencia Trimestral -->
    <div class="analytics-grid">
      
      <!-- Estatus de las Evaluaciones (Gráfico tipo Torta / Dona) -->
      <div class="analytics-widget" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h3 class="widget-title">🍩 Estatus de las Evaluaciones</h3>
          <div class="donut-widget-layout">
            <div class="donut-chart-container">
              ${donutSvgHtml}
            </div>
            <div class="donut-legend">
              <div class="legend-item">
                <span class="legend-color" style="background-color: #10b981;"></span>
                <span>Aprobado (${statusCounts.APPROVED})</span>
              </div>
              <div class="legend-item">
                <span class="legend-color" style="background-color: #f97316;"></span>
                <span>Pendiente RRHH (${statusCounts.PENDING_HR})</span>
              </div>
              <div class="legend-item">
                <span class="legend-color" style="background-color: #eab308;"></span>
                <span>Pendiente Supervisor (${statusCounts.PENDING_SUPERVISOR})</span>
              </div>
              <div class="legend-item">
                <span class="legend-color" style="background-color: #94a3b8;"></span>
                <span>Borrador (${statusCounts.DRAFT})</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Detalle de Evaluaciones Pendientes -->
        ${(() => {
          const totalPending = pendingByStatus.DRAFT.length + pendingByStatus.PENDING_SUPERVISOR.length + pendingByStatus.PENDING_HR.length;
          if (totalPending > 0) {
            let details = `
              <div class="donut-pending-details" style="margin-top: 1.25rem; border-top: 1px dashed var(--border-color); padding-top: 0.85rem; width: 100%;">
                <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.6rem;">
                  ⚠️ Detalle de Pendientes (${totalPending})
                </span>
                <div style="display: flex; flex-direction: column; gap: 0.6rem; max-height: 140px; overflow-y: auto; padding-right: 0.25rem;">
            `;

            if (pendingByStatus.DRAFT.length > 0) {
              details += `
                <div>
                  <span style="font-size: 0.68rem; font-weight: 800; color: #475569; background: #e2e8f0; padding: 0.15rem 0.4rem; border-radius: 0.25rem; display: inline-block; margin-bottom: 0.25rem;">
                    📝 Sin Iniciar / Borrador (${pendingByStatus.DRAFT.length})
                  </span>
                  <div style="font-size: 0.72rem; color: var(--text-primary); padding-left: 0.4rem; display: flex; flex-direction: column; gap: 0.15rem;">
                    ${pendingByStatus.DRAFT.map(p => `<div><strong>${p.name}</strong> <span style="font-size: 0.65rem; color: var(--text-secondary);">(${p.position})</span></div>`).join("")}
                  </div>
                </div>
              `;
            }

            if (pendingByStatus.PENDING_SUPERVISOR.length > 0) {
              details += `
                <div>
                  <span style="font-size: 0.68rem; font-weight: 800; color: #b45309; background: #fef3c7; padding: 0.15rem 0.4rem; border-radius: 0.25rem; display: inline-block; margin-bottom: 0.25rem;">
                    ⏳ Pendiente Supervisor (${pendingByStatus.PENDING_SUPERVISOR.length})
                  </span>
                  <div style="font-size: 0.72rem; color: var(--text-primary); padding-left: 0.4rem; display: flex; flex-direction: column; gap: 0.15rem;">
                    ${pendingByStatus.PENDING_SUPERVISOR.map(p => `<div><strong>${p.name}</strong> <span style="font-size: 0.65rem; color: var(--text-secondary);">(${p.position})</span></div>`).join("")}
                  </div>
                </div>
              `;
            }

            if (pendingByStatus.PENDING_HR.length > 0) {
              details += `
                <div>
                  <span style="font-size: 0.68rem; font-weight: 800; color: #c2410c; background: #ffedd5; padding: 0.15rem 0.4rem; border-radius: 0.25rem; display: inline-block; margin-bottom: 0.25rem;">
                    ⏳ Pendiente RRHH (${pendingByStatus.PENDING_HR.length})
                  </span>
                  <div style="font-size: 0.72rem; color: var(--text-primary); padding-left: 0.4rem; display: flex; flex-direction: column; gap: 0.15rem;">
                    ${pendingByStatus.PENDING_HR.map(p => `<div><strong>${p.name}</strong> <span style="font-size: 0.65rem; color: var(--text-secondary);">(${p.position})</span></div>`).join("")}
                  </div>
                </div>
              `;
            }

            details += `
                </div>
              </div>
            `;
            return details;
          } else {
            return `
              <div class="donut-pending-details" style="margin-top: 1.25rem; border-top: 1px dashed var(--border-color); padding-top: 0.85rem; width: 100%; text-align: center; color: var(--success-color); font-size: 0.78rem; font-weight: 700;">
                🎉 ¡Felicidades! 100% de cumplimiento alcanzado.
              </div>
            `;
          }
        })()}
      </div>

      <!-- Evolución Temporal Corporativa -->
      <div class="analytics-widget">
        <h3 class="widget-title">📈 ${trendTitle}</h3>
        <div class="quarterly-container" style="margin-top: 1rem;">
  `;

  trimAverages.forEach((avg, idx) => {
    html += `
      <div class="quarterly-box">
        <span class="quarterly-name">${periodNames[idx] || `Período ${idx + 1}`}</span>
        <div class="quarterly-bar-container">
          <div class="quarterly-bar-fill" style="height: ${avg.toFixed(0)}%"></div>
        </div>
        <span class="quarterly-value">${avg.toFixed(1)}%</span>
      </div>
    `;
  });

  html += `
        </div>
      </div>

    </div>

    <!-- Layout de Calificaciones Extremas de dos columnas -->
    <div class="analytics-grid" style="margin-bottom: 0;">

      <!-- Ranking de Colaboradores (Lados Opuestos) -->
      <div class="analytics-widget" style="grid-column: span 2;">
        <h3 class="widget-title">⚖️ Calificaciones Extremas (Lados Opuestos)</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1.25rem;">
  `;

  if (evaluatedList.length === 0) {
    html += `<p style="color:var(--text-secondary); font-style:italic; padding: 1.5rem 0; text-align: center; grid-column: span 2;">Aún no se registran evaluaciones puntuadas en este ciclo.</p>`;
  } else {
    // 1. RENDER TOP 3 (Mejores calificaciones)
    html += `
      <div>
        <h4 style="font-size: 0.8rem; text-transform: uppercase; font-weight: 800; color: #10b981; letter-spacing: 0.05em; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>📈</span> 3 Calificaciones Más Altas
        </h4>
        <div style="display: flex; flex-direction: column; gap: 0.6rem;">
    `;
    
    top3.forEach((emp, index) => {
      const initials = emp.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
      html += `
        <div class="ranking-item" style="border-left: 4px solid #10b981;">
          <div class="ranking-member">
            <div class="ranking-position">${index + 1}</div>
            <div class="ranking-avatar" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); color: #065f46;">${initials}</div>
            <div>
              <span class="ranking-name">${emp.name}</span>
              <span class="ranking-dept">${emp.position} • ${emp.department}</span>
            </div>
          </div>
          <span class="ranking-score-badge" style="border-color: #10b981; color: #10b981;">${emp.score.toFixed(2)} Ptos</span>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;

    // 2. RENDER BOTTOM 3 (Calificaciones más bajas)
    if (bottom3.length > 0) {
      html += `
        <div style="border-left: 1px dashed var(--border-color); padding-left: 2rem;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; font-weight: 800; color: #ef4444; letter-spacing: 0.05em; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>📉</span> 3 Calificaciones Más Bajas
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
      `;
      
      bottom3.forEach((emp) => {
        // Encontrar posición real en la lista completa ordenada
        const realPosition = evaluatedList.findIndex(e => e.name === emp.name) + 1;
        const initials = emp.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
        html += `
          <div class="ranking-item" style="border-left: 4px solid #ef4444;">
            <div class="ranking-member">
              <div class="ranking-position" style="background: linear-gradient(135deg, #fca5a5 0%, #ef4444 100%);">${realPosition}</div>
              <div class="ranking-avatar" style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); color: #991b1b;">${initials}</div>
              <div>
                <span class="ranking-name">${emp.name}</span>
                <span class="ranking-dept">${emp.position} • ${emp.department}</span>
              </div>
            </div>
            <span class="ranking-score-badge" style="border-color: #ef4444; color: #ef4444;">${emp.score.toFixed(2)} Ptos</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
  }

  // Cargar histórico de años anteriores
  const historyList = JSON.parse(localStorage.getItem("edd_app_history") || "[]");
  html += `
        </div>
      </div>
    </div> <!-- Fin del grid anterior -->
  `;

  // Inyectar el Widget de la Campana de Gauss (Distribución de Calificaciones)
  const selectedGaussDept = container.dataset.selectedGaussDept || "all";
  const evaluatedScores = rankingList.filter(item => item.score > 0);
  html += generateGaussWidget(evaluatedScores, selectedGaussDept);
  
  // Inyectar el Widget de la Matriz de Talento (9-Box Grid) en sincronía con el filtro de departamentos
  html += generateNineBoxWidget(evaluatedScores, selectedGaussDept);

  html += `
    <!-- Historial de Reportes EDD Anuales -->
    <div class="analytics-widget history-section">
      <h3 class="widget-title">📅 Historial de Reportes EDD Anuales</h3>
      <div class="history-grid">
  `;

  if (historyList.length === 0) {
    html += `<p style="color:var(--text-secondary); font-style:italic; grid-column: span 4; text-align: center; padding: 1.5rem 0;">Aún no se han guardado reportes históricos anuales. Se creará uno automáticamente al Reiniciar Evaluaciones.</p>`;
  } else {
    // Ordenar históricos por año descendente
    historyList.sort((a, b) => b.year - a.year);
    historyList.forEach(hist => {
      html += `
        <div class="history-card" onclick="showHistoryReport('${hist.year}')">
          <button class="btn-delete-history" onclick="deleteHistoryReport(event, '${hist.year}')" title="Eliminar este historial">🗑️</button>
          <span class="history-card-year">Año ${hist.year}</span>
          <span class="history-card-score">⭐ ${hist.avgCompanyScore.toFixed(2)} pts</span>
          <span class="history-card-date">Guardado: ${hist.timestamp.split(",")[0]}</span>
        </div>
      `;
    });
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Registrar interactividad de tooltips para la Campana de Gauss
  const gaussPoints = container.querySelectorAll('.gauss-employee-point');
  const gaussTooltip = container.querySelector('#gauss-tooltip');
  if (gaussTooltip && gaussPoints.length > 0) {
    gaussPoints.forEach(point => {
      point.addEventListener('mouseenter', () => {
        const name = point.getAttribute('data-name');
        const score = point.getAttribute('data-score');
        gaussTooltip.innerHTML = `<span class="gauss-tooltip-name">${name}</span>Desempeño: <span class="gauss-tooltip-score">${score} Ptos</span>`;
        gaussTooltip.classList.add('active');
      });

      point.addEventListener('mousemove', (e) => {
        const chartCard = container.querySelector('.gauss-chart-card');
        if (chartCard) {
          const cardRect = chartCard.getBoundingClientRect();
          const left = e.clientX - cardRect.left;
          const top = e.clientY - cardRect.top;
          gaussTooltip.style.left = `${left}px`;
          gaussTooltip.style.top = `${top}px`;
        }
      });

      point.addEventListener('mouseleave', () => {
        gaussTooltip.classList.remove('active');
      });
    });
  }

  // Registrar interactividad de tooltips para la Matriz 9-Box
  const nineboxAvatars = container.querySelectorAll('.ninebox-talent-avatar');
  const nineboxTooltip = container.querySelector('#ninebox-tooltip');
  if (nineboxTooltip && nineboxAvatars.length > 0) {
    nineboxAvatars.forEach(avatar => {
      avatar.addEventListener('mouseenter', () => {
        const name = avatar.getAttribute('data-name');
        const score = avatar.getAttribute('data-score');
        const potential = avatar.getAttribute('data-potential');
        const position = avatar.getAttribute('data-position');
        const dept = avatar.getAttribute('data-dept');
        nineboxTooltip.innerHTML = `
          <span class="gauss-tooltip-name">${name}</span>
          <small style="color: #94a3b8; display:block; margin-bottom: 0.25rem;">${position} • ${dept}</small>
          Desempeño: <span class="gauss-tooltip-score">${score} Ptos</span><br>
          Potencial: <span style="color:#60a5fa; font-weight:800;">${potential}</span>
        `;
        nineboxTooltip.classList.add('active');
      });

      avatar.addEventListener('mousemove', (e) => {
        const gridCard = container.querySelector('.ninebox-grid-card');
        if (gridCard) {
          const cardRect = gridCard.getBoundingClientRect();
          const left = e.clientX - cardRect.left;
          const top = e.clientY - cardRect.top;
          nineboxTooltip.style.left = `${left}px`;
          nineboxTooltip.style.top = `${top}px`;
        }
      });

      avatar.addEventListener('mouseleave', () => {
        nineboxTooltip.classList.remove('active');
      });
    });
  }

  // Registrar evento para mostrar/ocultar tarjeta de información de la Matriz 9-Box
  const btnNineboxInfo = container.querySelector('#btn-ninebox-info');
  const nineboxInfoCard = container.querySelector('#ninebox-info-card');
  if (btnNineboxInfo && nineboxInfoCard) {
    btnNineboxInfo.addEventListener('click', (e) => {
      e.stopPropagation();
      nineboxInfoCard.classList.toggle('hidden');
    });
    
    // Cerrar si se hace click fuera de la tarjeta
    document.addEventListener('click', (e) => {
      if (!nineboxInfoCard.classList.contains('hidden') && !nineboxInfoCard.contains(e.target) && e.target !== btnNineboxInfo) {
        nineboxInfoCard.classList.add('hidden');
      }
    });
  }

  // Registrar reactividad para el filtro de departamentos de la campana de Gauss
  const gaussDeptFilter = container.querySelector('#gauss-dept-filter');
  if (gaussDeptFilter) {
    gaussDeptFilter.addEventListener('change', (e) => {
      container.dataset.selectedGaussDept = e.target.value;
      const loggedUser = store.state.users.find(u => u.id === store.state.currentUser);
      renderAnalytics(loggedUser);
    });
  }

  // Registrar event listener del botón después de inyectar el HTML
  const btnPrintReport = document.getElementById("btn-print-report");
  if (btnPrintReport) {
    btnPrintReport.addEventListener("click", openPrintConfiguration);
  }
}

// ==== HISTORIAL ANUAL Y REPORTE EJECUTIVO PDF ====

window.openPrintConfiguration = function() {
  const { users } = store.state;
  const select = document.getElementById("print-supervisor-select");
  
  // Obtener todos los supervisores/líderes potenciales del sistema
  const supervisors = users.filter(u => {
    const hasSubordinates = users.some(sub => sub.supervisorId === u.id);
    return u.role === "SUPERVISOR" || u.role === "ADMIN" || u.role === "HR" || hasSubordinates;
  });

  // Eliminar duplicados si los hubiera
  const uniqueSupervisors = [];
  const seenIds = new Set();
  supervisors.forEach(s => {
    if (!seenIds.has(s.id)) {
      seenIds.add(s.id);
      uniqueSupervisors.push(s);
    }
  });

  // Ordenar alfabéticamente
  uniqueSupervisors.sort((a, b) => a.name.localeCompare(b.name));

  let optionsHtml = `<option value="all">-- Todos los Supervisores (Consolidado General) --</option>`;
  uniqueSupervisors.forEach(s => {
    optionsHtml += `<option value="${s.id}">${s.name} (${s.position})</option>`;
  });
  
  select.innerHTML = optionsHtml;
  document.getElementById("print-select-modal").classList.remove("hidden");
};

window.deleteHistoryReport = function(event, year) {
  if (event) event.stopPropagation(); // Evitar que abra el reporte
  if (confirm(`⚠️ ADVERTENCIA DE ELIMINACIÓN:\n\n¿Estás completamente seguro de que deseas eliminar permanentemente el reporte histórico del año ${year}?\n\nEsta acción no se puede deshacer y borrará la captura guardada de localStorage.`)) {
    const historyList = JSON.parse(localStorage.getItem("edd_app_history") || "[]");
    const filteredHistory = historyList.filter(h => h.year !== year);
    localStorage.setItem("edd_app_history", JSON.stringify(filteredHistory));
    
    // Forzar re-renderizado de analíticas con el estado actual
    const loggedUser = store.state.users.find(u => u.id === store.state.currentUser);
    renderAnalytics(loggedUser);
    alert(`Reporte histórico del año ${year} eliminado con éxito.`);
  }
};

window.showHistoryReport = function(year) {
  const historyList = JSON.parse(localStorage.getItem("edd_app_history") || "[]");
  const hist = historyList.find(h => h.year === year);
  if (!hist) {
    alert("No se encontró el reporte histórico para el año " + year);
    return;
  }

  document.getElementById("history-year-label").textContent = hist.year;
  document.getElementById("history-score-label").textContent = hist.avgCompanyScore.toFixed(2) + " pts";
  document.getElementById("history-modal").classList.remove("hidden");

  // Procesar métricas del historial
  const { users, evaluations } = hist;
  const targetUsers = users.filter(u => u.id !== "u-admin-ana");

  const deptScores = {};
  const employeePerformance = [];

  targetUsers.forEach(u => {
    // Buscar la EDD del usuario en el historial
    const evalId = `${u.id}-${year}`;
    const ev = evaluations[evalId] || Object.values(evaluations).find(e => e.userId === u.id);
    let score = 0;
    let incidentCount = 0;

    if (ev && ev.data) {
      const calc = calculateMCDMForData(ev.data);
      score = calc.globalScore;
      incidentCount = ev.data.incidents ? ev.data.incidents.filter(i => i.month && i.situation).length : 0;
    }

    employeePerformance.push({
      name: u.name,
      position: u.position,
      department: u.department || "General",
      score: score,
      incidents: incidentCount
    });

    if (score > 0) {
      const dept = u.department || "General";
      if (!deptScores[dept]) deptScores[dept] = { sum: 0, count: 0 };
      deptScores[dept].sum += score;
      deptScores[dept].count++;
    }
  });

  // Ordenar desempeño por puntaje descendente (Ranking del año)
  employeePerformance.sort((a, b) => b.score - a.score);

  // Generar HTML del Reporte
  let bodyHtml = `
    <h3 style="margin-top: 0; margin-bottom: 1rem; color: #2c3e50; font-size: 1.1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">🏢 Promedios Históricos por Departamento</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
  `;

  Object.keys(deptScores).forEach(dept => {
    const avg = deptScores[dept].sum / deptScores[dept].count;
    bodyHtml += `
      <div style="background: #f8fafc; border: 1px solid var(--border-color); padding: 1rem; border-radius: 0.5rem; text-align: center;">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 0.25rem;">${dept}</span>
        <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary-color);">${avg.toFixed(2)} pts</span>
      </div>
    `;
  });

  if (Object.keys(deptScores).length === 0) {
    bodyHtml += `<p style="grid-column: 1/-1; color: var(--text-secondary); font-style: italic; text-align: center;">Sin datos de departamentos para este período.</p>`;
  }

  bodyHtml += `
    </div>

    <h3 style="margin-bottom: 1rem; color: #2c3e50; font-size: 1.1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">🏆 Ranking y Desempeño Consolidado de Colaboradores</h3>
    <div class="table-responsive">
      <table class="data-table" style="width: 100%;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">Pos</th>
            <th style="width: 35%">Colaborador</th>
            <th style="width: 30%">Cargo / Departamento</th>
            <th style="width: 15%; text-align: center;">Puntuación</th>
            <th style="width: 15%; text-align: center;">Incidentes (STAR)</th>
          </tr>
        </thead>
        <tbody>
  `;

  employeePerformance.forEach((emp, idx) => {
    bodyHtml += `
      <tr>
        <td style="text-align: center; font-weight: bold; color: var(--text-secondary);">${idx + 1}</td>
        <td style="font-weight: 600;">${emp.name}</td>
        <td>${emp.position} <br><small style="color: var(--text-secondary); font-size: 0.8rem;">${emp.department}</small></td>
        <td style="text-align: center; font-weight: 800; color: var(--primary-color);">${emp.score.toFixed(2)} pts</td>
        <td style="text-align: center; font-weight: 600; color: ${emp.incidents > 0 ? 'var(--success-color)' : 'var(--text-secondary)'};">${emp.incidents}</td>
      </tr>
    `;
  });

  bodyHtml += `
        </tbody>
      </table>
    </div>
  `;

  document.getElementById("history-modal-body").innerHTML = bodyHtml;
};

window.printSupervisionReport = function(selectedSupervisorId = "all") {
  const { users, evaluations } = store.state;
  
  // 1. Filtrar los usuarios que no son la administradora principal
  const targetUsers = users.filter(u => u.id !== "u-admin-ana");

  // 2. Agrupar colaboradores por supervisor (aplicando filtro si corresponde)
  const groups = {};
  targetUsers.forEach(u => {
    let superId = u.supervisorId;
    let groupKey = superId || "no-supervisor";
    
    // Filtrar por supervisor seleccionado si no es "all"
    if (selectedSupervisorId && selectedSupervisorId !== "all") {
      if (groupKey !== selectedSupervisorId) return;
    }
    
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(u);
  });

  // Si no hay colaboradores bajo el criterio seleccionado
  if (Object.keys(groups).length === 0) {
    alert("No se encontraron colaboradores evaluados bajo el criterio de supervisor seleccionado.");
    return;
  }

  // 3. Generar el marcado del reporte ejecutivo imprimible
  let subtitleText = "Consolidado General de Todos los Departamentos";
  if (selectedSupervisorId !== "all") {
    const supervisorUser = users.find(u => u.id === selectedSupervisorId);
    if (supervisorUser && supervisorUser.department) {
      subtitleText = `Departamento de ${supervisorUser.department}`;
    }
  }

  let printHtml = `
    <div class="report-print-header">
      <img src="Logo Modusistema.png" alt="Modusistema Logo" class="report-logo">
      <div class="report-meta">
        <strong>Documento Oficial Interno</strong><br>
        Fecha de Emisión: ${new Date().toLocaleDateString()}<br>
        Hora: ${new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}<br>
        Generado por: Administrador
      </div>
    </div>

    <div class="report-title-section">
      <h1>Informe Ejecutivo de Desempeño por Objetivos (EDD)</h1>
      <p>${subtitleText}</p>
    </div>
  `;

  // 4. Recorrer cada supervisor y su equipo
  Object.keys(groups).forEach(superId => {
    let supervisorName = "Colaboradores Sin Supervisor Directo";
    if (superId !== "no-supervisor") {
      const supervisor = users.find(s => s.id === superId);
      if (supervisor) {
        supervisorName = `Supervisor: ${supervisor.name} (${supervisor.position})`;
      }
    }

    const team = groups[superId];
    
    // Calcular promedios de este equipo
    let teamScoreSum = 0;
    let teamEvaluatedCount = 0;
    const teamDetails = [];

    team.forEach(emp => {
      const evalId = store.getOrCreateEvaluation(emp.id);
      const ev = store.state.evaluations[evalId];
      let score = 0;
      let incidentCount = 0;

      if (ev && ev.data) {
        const calc = calculateMCDMForData(ev.data);
        score = calc.globalScore;
        incidentCount = ev.data.incidents ? ev.data.incidents.filter(i => i.month && i.situation).length : 0;
      }

      if (score > 0) {
        teamScoreSum += score;
        teamEvaluatedCount++;
      }

      teamDetails.push({
        ci: emp.ci,
        name: emp.name,
        position: emp.position,
        department: emp.department || "General",
        score: score,
        incidents: incidentCount
      });
    });

    const teamAverage = teamEvaluatedCount > 0 ? (teamScoreSum / teamEvaluatedCount) : 0;

    printHtml += `
      <div class="supervisor-block">
        <div class="supervisor-header">
          <span>👥 ${supervisorName}</span>
          <span>Desempeño Promedio del Equipo: <strong>${teamAverage.toFixed(2)} pts</strong></span>
        </div>
        
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 15%">Cédula ID</th>
              <th style="width: 25%">Nombre Completo</th>
              <th style="width: 30%">Cargo / Departamento</th>
              <th style="width: 15%; text-align: center;">Puntuación EDD</th>
              <th style="width: 15%; text-align: center;">Incidentes STAR</th>
            </tr>
          </thead>
          <tbody>
    `;

    teamDetails.forEach(emp => {
      printHtml += `
        <tr>
          <td>${emp.ci}</td>
          <td style="font-weight: 600;">${emp.name}</td>
          <td>${emp.position} <br><small style="color: #475569;">${emp.department}</small></td>
          <td class="score-col">${emp.score > 0 ? emp.score.toFixed(2) + ' pts' : 'N/A'}</td>
          <td class="incidents-col">${emp.incidents} incidentes</td>
        </tr>
      `;
    });

    printHtml += `
          </tbody>
        </table>
      </div>
    `;
  });

  // 5. Agregar la sección final de firmas institucionales
  printHtml += `
    <div class="signature-block">
      <div class="signature-line">
        <div class="signature-title">Gerencia de Recursos Humanos</div>
        Modusistema C.A.
      </div>
      <div class="signature-line">
        <div class="signature-title">Supervisor / Gerente de Área</div>
        Firma Responsable
      </div>
      <div class="signature-line">
        <div class="signature-title">Dirección General</div>
        Ana Meinhard
      </div>
    </div>
  `;

  // 6. Inyectar en el contenedor y disparar impresión
  const printContainer = document.getElementById("print-report-container");
  if (printContainer) {
    printContainer.innerHTML = printHtml;
    
    // Disparar diálogo de impresión nativo (asíncrono para asegurar carga del DOM)
    setTimeout(() => {
      window.print();
    }, 250);
  }
};

window.printSingleEvaluation = function(evalId) {
  const { users, evaluations } = store.state;
  const evaluation = evaluations[evalId];
  if (!evaluation) {
    alert("No se encontró la evaluación seleccionada.");
    return;
  }

  const user = users.find(u => u.id === evaluation.userId);
  if (!user) {
    alert("No se encontró la información del colaborador.");
    return;
  }

  const supervisor = users.find(s => s.id === user.supervisorId);
  const { computedGoals, trimesterScores, categoryTotals, totalWeight, globalScore } = store.calculateMCDM();
  const globalAvgFulfillment = totalWeight > 0 ? (globalScore / totalWeight) * 100 : 0;
  const count = evaluation.data.evalCount || 4;
  const evalNames = ["Eval 1", "Eval 2", "Eval 3", "Eval 4"];

  let evalColsHtml = '';
  for (let i = 1; i <= count; i++) {
    evalColsHtml += `<th style="width: 8%; text-align: center;">${evalNames[i-1]}</th>`;
  }

  let printHtml = `
    <div class="report-print-header">
      <img src="Logo Modusistema.png" alt="Modusistema Logo" class="report-logo">
      <div class="report-meta">
        <strong>Ficha de Evaluación Individual</strong><br>
        Año del Ciclo: ${evaluation.year}<br>
        Estatus: ${ROLE_LABELS[evaluation.status] || evaluation.status}<br>
        Fecha de Emisión: ${new Date().toLocaleDateString()}<br>
        Generado por: ${store.state.users.find(u => u.id === store.state.currentUser)?.name || 'Administrador'}
      </div>
    </div>

    <div class="report-title-section">
      <h1>Evaluación de Desempeño por Objetivos (EDD)</h1>
      <p>Ficha de Resultados y Registro de Logros de Gestión</p>
    </div>

    <!-- DATOS DEL COLABORADOR -->
    <div class="supervisor-block" style="margin-bottom: 2rem;">
      <div class="supervisor-header" style="background-color: #f1f5f9; padding: 0.5rem 1rem; font-weight: bold; border-left: 5px solid #475569;">
        <span>👤 DATOS GENERALES DEL COLABORADOR</span>
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
        <tbody>
          <tr>
            <td style="width: 20%; font-weight: bold; background-color: #f8fafc;">Colaborador:</td>
            <td style="width: 30%;">${user.name}</td>
            <td style="width: 20%; font-weight: bold; background-color: #f8fafc;">Cédula de Identidad:</td>
            <td style="width: 30%;">${user.ci}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; background-color: #f8fafc;">Cargo:</td>
            <td>${user.position}</td>
            <td style="font-weight: bold; background-color: #f8fafc;">Departamento:</td>
            <td>${user.department}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; background-color: #f8fafc;">Supervisor Directo:</td>
            <td>${supervisor ? supervisor.name : 'Sin supervisor asignado'}</td>
            <td style="font-weight: bold; background-color: #f8fafc;">Cumplimiento / Puntaje:</td>
            <td style="font-weight: 800; color: #1e3a8a;">${globalAvgFulfillment.toFixed(0)}% / ${globalScore.toFixed(2)} pts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MATRIZ DE EVALUACIÓN -->
    <div class="supervisor-block" style="margin-bottom: 2rem;">
      <div class="supervisor-header" style="background-color: #f1f5f9; padding: 0.5rem 1rem; font-weight: bold; border-left: 5px solid #475569;">
        <span>📊 MATRIZ DE RENDIMIENTO POR METAS</span>
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
        <thead>
          <tr>
            <th style="width: 25%; font-weight: 700;">Objetivos / Metas</th>
            <th style="width: 7%; text-align: center; font-weight: 700;">Pond. (%)</th>
            <th style="width: 20%; font-weight: 700;">Indicador de Medición</th>
            <th style="width: 15%; font-weight: 700;">Meta</th>
            ${evalColsHtml}
            <th style="width: 9%; text-align: center; font-weight: 700;">Cumpl. (%)</th>
            <th style="width: 9%; text-align: center; font-weight: 700;">Ptos.</th>
          </tr>
        </thead>
        <tbody>
  `;

  evaluation.data.categories.forEach(category => {
    printHtml += `
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td colspan="${5 + count}" style="text-align: left; text-transform: uppercase;">Categoría: ${category.title || "General"}</td>
        <td colspan="2"></td>
      </tr>
    `;

    const categoryGoals = computedGoals.filter(g => g.categoryId === category.id);
    categoryGoals.forEach(goal => {
      let trimValsHtml = '';
      for (let i = 1; i <= count; i++) {
        const val = goal[`q${i}`];
        trimValsHtml += `<td style="text-align: center;">${val !== null && val !== "" ? val + "%" : "-"}</td>`;
      }

      printHtml += `
        <tr>
          <td style="font-weight: 500;">${goal.title || "Meta sin descripción"}</td>
          <td style="text-align: center;">${goal.weight || 0}%</td>
          <td>${goal.indicator || "-"}</td>
          <td>${goal.target || "-"}</td>
          ${trimValsHtml}
          <td style="text-align: center; font-weight: 600;">${goal.average.toFixed(0)}%</td>
          <td style="text-align: center; font-weight: 600; background-color: #f8fafc;">${goal.points.toFixed(2)}</td>
        </tr>
      `;
    });

    const sub = categoryTotals[category.id];
    if (sub) {
      let subTrimHtml = '';
      sub.trimesterScores.forEach(score => {
        subTrimHtml += `<td style="text-align: center; font-weight: bold;">${score.toFixed(0)}%</td>`;
      });
      const subAvgFulfillment = sub.weightSum > 0 ? (sub.pointsSum / sub.weightSum) * 100 : 0;
      printHtml += `
        <tr style="background-color: rgba(110, 142, 158, 0.05); font-weight: bold; font-size: 0.85rem;">
          <td style="text-align: left; text-transform: uppercase;">SUBTOTAL CATEGORÍA</td>
          <td style="text-align: center;">${sub.weightSum}%</td>
          <td colspan="2"></td>
          ${subTrimHtml}
          <td style="text-align: center;">${subAvgFulfillment.toFixed(0)}%</td>
          <td style="text-align: center; background-color: #f8fafc;">${sub.pointsSum.toFixed(2)}</td>
        </tr>
      `;
    }
  });

  let footerTrimHtml = '';
  trimesterScores.forEach(score => {
    footerTrimHtml += `<td style="text-align: center; font-weight: 800;">${score.toFixed(0)}%</td>`;
  });

  printHtml += `
        <tr style="background-color: #e2e8f0; font-weight: 800;">
          <td style="text-align: left;">TOTAL CONSOLIDADO EDD</td>
          <td style="text-align: center;">${totalWeight}%</td>
          <td colspan="2" style="text-align: right; text-transform: uppercase;">Desempeño %</td>
          ${footerTrimHtml}
          <td style="text-align: center;">${globalAvgFulfillment.toFixed(0)}%</td>
          <td style="text-align: center; background-color: #cbd5e1; font-size: 1.1rem; color: #1e3a8a;">${globalScore.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `;
  printHtml += `
    <!-- BITÁCORA DE INCIDENTES (STAR) -->
    <div class="supervisor-block" style="margin-bottom: 2rem; page-break-inside: avoid;">
      <div class="supervisor-header" style="background-color: #f1f5f9; padding: 0.5rem 1rem; font-weight: bold; border-left: 5px solid #475569;">
        <span>📝 BITÁCORA DE INCIDENTES DE GESTIÓN (STAR)</span>
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
        <thead>
          <tr>
            <th style="width: 12%; font-weight: 700; text-align: center;">Mes</th>
            <th style="width: 15%; font-weight: 700; text-align: center;">Fecha</th>
            <th style="width: 35%; font-weight: 700; text-align: left;">Situación (Evento)</th>
            <th style="width: 38%; font-weight: 700; text-align: left;">Consecuencia (Impacto)</th>
          </tr>
        </thead>
        <tbody>
          ${evaluation.data.incidents && evaluation.data.incidents.filter(i => i.month && i.situation).length > 0
            ? evaluation.data.incidents.filter(i => i.month && i.situation).map(inc => `
                <tr>
                  <td style="text-align: center; font-weight: 600;">${inc.month}</td>
                  <td style="text-align: center;">${inc.date ? inc.date.split("-").reverse().join("/") : "-"}</td>
                  <td style="text-align: left;">${inc.situation}</td>
                  <td style="text-align: left;">${inc.consequence}</td>
                </tr>
              `).join("")
            : `<tr><td colspan="4" style="text-align: center; color: #64748b; font-style: italic; padding: 1rem;">No se registran incidentes en la bitácora STAR durante este ciclo laboral.</td></tr>`
          }
        </tbody>
      </table>
    </div>

    <div class="signature-block" style="margin-top: 4rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; page-break-inside: avoid;">
      <div class="signature-line" style="border-top: 1px solid #334155; text-align: center; padding-top: 0.75rem; font-size: 8pt; color: #475569;">
        <div class="signature-title" style="font-weight: 700; color: #1e293b; margin-bottom: 0.2rem;">Colaborador Evaluado</div>
        Firma y Cédula de Identidad
      </div>
      <div class="signature-line" style="border-top: 1px solid #334155; text-align: center; padding-top: 0.75rem; font-size: 8pt; color: #475569;">
        <div class="signature-title" style="font-weight: 700; color: #1e293b; margin-bottom: 0.2rem;">Supervisor Directo</div>
        Firma Responsable
      </div>
      <div class="signature-line" style="border-top: 1px solid #334155; text-align: center; padding-top: 0.75rem; font-size: 8pt; color: #475569;">
        <div class="signature-title" style="font-weight: 700; color: #1e293b; margin-bottom: 0.2rem;">Recursos Humanos</div>
        Modusistema C.A.
      </div>
    </div>
  `;

  const printContainer = document.getElementById("print-report-container");
  if (printContainer) {
    printContainer.innerHTML = printHtml;
    
    // Disparar diálogo de impresión nativo de forma asíncrona
    setTimeout(() => {
      window.print();
    }, 250);
  }
};

// ==== UI RENDERERS ====

function renderUserManagement() {
  const tbody = document.getElementById("users-tbody");
  const superSelect = document.getElementById("new-user-supervisor");
  let html = "";
  let superHtml = '<option value="">(Sin Supervisor)</option>';
  const loggedUserId = store.state.currentUser;

  store.state.users.forEach(u => {
    // Populate supervisors dropdown
    if (u.role === "SUPERVISOR" || u.role === "ADMIN" || u.role === "HR") {
      superHtml += `<option value="${u.id}">${u.name} (${u.role})</option>`;
    }

    const supervisor = store.state.users.find(s => s.id === u.supervisorId);
    const superName = supervisor ? supervisor.name : "-";

    const isMainAdmin = u.id === "u-admin-ana";
    const canEditOrDelete = !isMainAdmin || loggedUserId === "u-admin-ana";

    const actionsHtml = canEditOrDelete ? `
      <button class="btn btn-icon" onclick="editUser('${u.id}')" title="Editar" style="color:var(--primary-color);">✏️</button>
      <button class="btn btn-icon" onclick="store.deleteUser('${u.id}')" title="Eliminar" style="color:var(--danger-color);">🗑️</button>
    ` : `
      <span style="color: var(--text-secondary); font-size: 0.8rem; font-style: italic;">Protegido</span>
    `;

    html += `
      <tr>
        <td>${u.name}</td>
        <td>${u.ci}</td>
        <td>${u.position} / ${u.department}</td>
        <td><span class="badge badge-${(u.role || 'draft').toLowerCase()}">${ROLE_LABELS[u.role] || u.role}</span></td>
        <td>${u.password}</td>
        <td>${superName}</td>
        <td>${actionsHtml}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  superSelect.innerHTML = superHtml;

  // Sincronizar el selector de periodicidad global de la empresa
  const globalEvalSelect = document.getElementById("global-eval-count");
  if (globalEvalSelect) {
    globalEvalSelect.value = store.state.globalEvalCount || 4;
  }
}

window.editUser = function(userId) {
  const user = store.state.users.find(u => u.id === userId);
  if (!user) return;
  
  const loggedUserId = store.state.currentUser;
  if (userId === "u-admin-ana" && loggedUserId !== "u-admin-ana") {
    alert("Operación denegada: No tienes permisos para editar a la Administradora Principal.");
    return;
  }
  
  document.getElementById("form-user-title").textContent = "Editar Usuario";
  document.getElementById("edit-user-id").value = user.id;
  
  document.getElementById("new-user-name").value = user.name;
  document.getElementById("new-user-ci").value = user.ci;
  document.getElementById("new-user-position").value = user.position;
  document.getElementById("new-user-dept").value = user.department;
  document.getElementById("new-user-role").value = user.role;
  document.getElementById("new-user-supervisor").value = user.supervisorId || "";
  document.getElementById("new-user-key").value = user.password;
  
  document.getElementById("add-user-form").classList.remove("hidden");
  document.getElementById("add-user-form").scrollIntoView({ behavior: "smooth", block: "start" });
};

function renderDashboard(loggedUser) {
  const container = document.getElementById("dashboard-container");
  const { users } = store.state;
  let visibleUsers = [];

  if (loggedUser.role === "ADMIN") {
    // Excluir a la Gerente General de la lista de evaluaciones
    visibleUsers = users.filter(u => u.id !== "u-admin-ana");
  } else if (loggedUser.role === "SUPERVISOR") {
    visibleUsers = users.filter(u => u.id === loggedUser.id || u.supervisorId === loggedUser.id);
  } else {
    // EMPLOYEE: Si es employee, sugerimos su eval si no hay ninguna seleccionada
    visibleUsers = [loggedUser];
    const evalId = store.getOrCreateEvaluation(loggedUser.id);
    
    // Solo auto-seleccionar si es la carga inicial en esta pestaña de sesión y no hay nada seleccionado
    const hasAutoselected = sessionStorage.getItem("edd_employee_autoselected");
    if (!store.state.currentEvalId && !hasAutoselected) {
      sessionStorage.setItem("edd_employee_autoselected", "true");
      setTimeout(() => store.selectEvaluation(evalId), 0);
      container.classList.add("hidden");
      return;
    }
    
    // Si cerró manualmente, mostrar dashboard vacío o con su info
    container.classList.remove("hidden");
  }

  container.classList.remove("hidden");
  
  // Ordenar usuarios alfabéticamente por nombre
  visibleUsers.sort((a, b) => a.name.localeCompare(b.name));
  
  const viewMode = store.state.viewMode || 'cards';
  
  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
      <h3 style="margin: 0;">Seleccionar Evaluación</h3>
      <div style="display: flex; gap: 1rem; align-items: center; flex-grow: 1; justify-content: flex-end; max-width: 600px; width: 100%;">
        <input type="text" id="dashboard-search-input" placeholder="🔍 Buscar colaborador..." style="border: 1px solid var(--border-color); padding: 0.4rem 0.8rem; border-radius: 0.375rem; background: var(--surface-color); font-size: 0.85rem; width: 100%; max-width: 250px;">
        <div class="view-toggle">
          <button class="${viewMode === 'cards' ? 'active' : ''}" onclick="store.setViewMode('cards')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
          <button class="${viewMode === 'list' ? 'active' : ''}" onclick="store.setViewMode('list')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="${viewMode === 'cards' ? 'user-cards' : 'user-list'}">
  `;
  
  visibleUsers.forEach(u => {
    const evalId = store.getOrCreateEvaluation(u.id);
    const evalData = store.state.evaluations[evalId];
    const isSelected = store.state.currentEvalId === evalId;
    const currentStatus = evalData.status || "DRAFT";
    
    if (viewMode === 'cards') {
      html += `
        <div class="user-card" onclick="store.selectEvaluation('${evalId}')" style="cursor:pointer; border: 1px solid var(--border-color); padding: 1rem; border-radius: 0.5rem; background: ${isSelected ? 'var(--alert-bg)' : 'var(--surface-color)'}">
          <strong>${u.name}</strong><br>
          <small>${u.position}</small><br>
          <span class="badge badge-${currentStatus.toLowerCase()}">${currentStatus}</span>
        </div>
      `;
    } else {
      // List view format
      html += `
        <div class="user-list-item" onclick="store.selectEvaluation('${evalId}')" style="cursor:pointer; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 0.5rem; background: ${isSelected ? 'var(--alert-bg)' : 'var(--surface-color)'}; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div style="display: flex; flex-direction: column; flex-grow: 1;">
            <strong>${u.name}</strong>
            <small style="color: var(--text-secondary);">${u.position} • ${u.department}</small>
          </div>
          <div style="min-width: 120px; text-align: right;">
            <span class="badge badge-${currentStatus.toLowerCase()}">${currentStatus}</span>
          </div>
        </div>
      `;
    }
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderEmployeeInfo(evaluation) {
  const user = store.state.users.find(u => u.id === evaluation.userId);
  document.getElementById("emp-ci").textContent = user.ci;
  document.getElementById("emp-name").textContent = user.name;
  document.getElementById("emp-position").textContent = user.position;
  document.getElementById("emp-dept").textContent = user.department;
  document.getElementById("emp-status").textContent = evaluation.status;
  document.getElementById("emp-status").className = `badge badge-${evaluation.status.toLowerCase()}`;

  renderActionButtons(evaluation);
}

function renderActionButtons(evaluation) {
  const actionsContainer = document.getElementById("action-buttons");
  const loggedUser = store.state.users.find(u => u.id === store.state.currentUser);
  let html = '';

  const { totalWeight } = store.calculateMCDM();
  const isWeightValid = totalWeight === 100;
  const disabledAttr = isWeightValid ? '' : 'disabled style="opacity: 0.5; cursor: not-allowed;" title="La sumatoria de ponderaciones debe ser exactamente 100%."';

  if (loggedUser.role === "EMPLOYEE" && evaluation.status === "DRAFT") {
    html += `<button class="btn btn-submit" onclick="store.updateEvaluationStatus('PENDING_SUPERVISOR')" ${disabledAttr}>Enviar a Supervisor</button>`;
  }
  
  if ((loggedUser.role === "SUPERVISOR" || loggedUser.role === "ADMIN") && evaluation.status === "PENDING_SUPERVISOR") {
    html += `<button class="btn btn-danger" style="margin-right: 1rem;" onclick="store.updateEvaluationStatus('DRAFT')">Devolver a Empleado</button>`;
    html += `<button class="btn btn-success" onclick="store.updateEvaluationStatus('PENDING_HR')" ${disabledAttr}>Aprobar (Enviar a RRHH)</button>`;
  }

  if (loggedUser.role === "ADMIN" && evaluation.status === "PENDING_HR") {
    html += `<button class="btn btn-success" onclick="store.updateEvaluationStatus('APPROVED')" ${disabledAttr}>Aprobación Final</button>`;
  }

  if ((loggedUser.role === "SUPERVISOR" || loggedUser.role === "ADMIN") && evaluation.status === "APPROVED") {
    html += `<button class="btn btn-warning" onclick="store.updateEvaluationStatus('PENDING_SUPERVISOR')">Desbloquear Objetivos (Devolver a Supervisor)</button>`;
  }

  // Inyectar una advertencia visual en rojo si la ponderación es incompleta o excedida
  if (!isWeightValid && (evaluation.status === "DRAFT" || evaluation.status === "PENDING_SUPERVISOR" || evaluation.status === "PENDING_HR")) {
    html += `<span style="color: var(--danger-color); font-size: 0.85rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">⚠️ Ponderación debe ser 100%</span>`;
  }

  actionsContainer.innerHTML = html;
}

function getReadOnlyState() {
  const { currentUser, currentEvalId, evaluations, users } = store.state;
  if (!currentEvalId) return { goalsLocked: true, evalLocked: true };
  
  const evaluation = evaluations[currentEvalId];
  const loggedUser = users.find(u => u.id === currentUser);
  const isOwnEval = evaluation.userId === currentUser;

  let goalsLocked = false;
  let evalLocked = false;

  // Supervisores y Admins nunca se bloquean en su propia evaluación
  if (isOwnEval && (loggedUser.role === "SUPERVISOR" || loggedUser.role === "ADMIN")) {
    return { goalsLocked: false, evalLocked: false };
  }

  // Reglas de Read-Only
  if (evaluation.status === "APPROVED") {
    goalsLocked = true;
    evalLocked = false; // Permite colocar la evaluación aunque los objetivos estén aprobados
  } else if (loggedUser.role === "EMPLOYEE" && evaluation.status !== "DRAFT") {
    goalsLocked = true;
    evalLocked = true;
  } else if (loggedUser.role === "SUPERVISOR" && evaluation.status !== "PENDING_SUPERVISOR") {
    goalsLocked = true;
    evalLocked = true;
  }
  
  return { goalsLocked, evalLocked };
}

function renderEDDMatrix() {
  const thead = document.getElementById("edd-thead");
  const tbody = document.getElementById("edd-tbody");
  const data = store.getActiveData();
  if(!data) return;

  const { computedGoals, trimesterScores, categoryTotals, totalWeight, globalScore } = store.calculateMCDM();
  const count = data.evalCount;
  const { goalsLocked, evalLocked } = getReadOnlyState();
  const goalDisableAttr = goalsLocked ? "disabled" : "";
  const evalDisableAttr = evalLocked ? "disabled" : "";

  // Botones de añadir globales y visibilidad del selector de potencial según rol
  const loggedUser = store.state.users.find(u => u.id === store.state.currentUser);
  const evalPotentialSelect = document.getElementById("eval-potential");
  const evalPotentialLabel = document.querySelector('label[for="eval-potential"]');
  if (loggedUser.role === "EMPLOYEE") {
    if (evalPotentialSelect) evalPotentialSelect.classList.add("hidden");
    if (evalPotentialLabel) evalPotentialLabel.classList.add("hidden");
  } else {
    if (evalPotentialSelect) evalPotentialSelect.classList.remove("hidden");
    if (evalPotentialLabel) evalPotentialLabel.classList.remove("hidden");
  }

  document.getElementById("btn-add-category").style.display = goalsLocked ? "none" : "block";
  document.getElementById("btn-add-incident").style.display = evalLocked ? "none" : "block";
  document.getElementById("eval-count").disabled = goalsLocked;
  document.getElementById("eval-count").value = count;
  document.getElementById("eval-potential").disabled = evalLocked;
  document.getElementById("eval-potential").value = data.potential || "MEDIUM";

  let html = "";
  let theadHtml = `
    <tr>
      <th class="col-obj">Objetivos</th>
      <th class="col-pond">Pond. (%)</th>
      <th class="col-ind">Indicador de Medición</th>
      <th class="col-meta">Meta</th>
  `;
  const evalNames = ["Eval 1", "Eval 2", "Eval 3", "Eval 4"];
  for(let i=1; i<=count; i++) {
    theadHtml += `<th class="col-eval">${evalNames[i-1]}</th>`;
  }
  theadHtml += `
      <th class="col-cumpl">Cumpl. (%)</th>
      <th class="col-ptos">Ptos.</th>
      <th class="col-action">-</th>
    </tr>
  `;
  thead.innerHTML = theadHtml;

  data.categories.forEach((category) => {
    html += `
      <tr class="category-row">
        <td colspan="${4 + count}">
          <input type="text" class="cat-input" data-id="${category.id}" placeholder="Nombre de Categoría" value="${category.title}" ${goalDisableAttr}>
        </td>
        <td colspan="2"></td>
        <td class="col-action">
          ${!goalsLocked ? `
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end; align-items: center; white-space: nowrap;">
            <button class="btn btn-icon btn-add-goal-to-cat" data-catid="${category.id}" title="Añadir Meta" style="color: white; font-weight: bold;">+</button>
            <button class="btn btn-icon btn-remove-cat" data-id="${category.id}" title="Borrar Categoría" style="color: white;">🗑️</button>
          </div>` : ''}
        </td>
      </tr>
    `;

    const categoryGoals = computedGoals.filter((g) => g.categoryId === category.id);
    categoryGoals.forEach((goal) => {
      let trHtml = `
        <tr>
          <td><textarea class="goal-input" data-id="${goal.id}" data-field="title" placeholder="Descripción de la meta" rows="2" ${goalDisableAttr}>${goal.title || ""}</textarea></td>
          <td style="text-align: center;"><input type="number" class="goal-input" data-id="${goal.id}" data-field="weight" placeholder="0-100" value="${goal.weight ?? ""}" min="0" max="100" style="text-align: center;" ${goalDisableAttr}></td>
          <td><textarea class="goal-input" data-id="${goal.id}" data-field="indicator" placeholder="Fórmula/Criterio" rows="2" ${goalDisableAttr}>${goal.indicator || ""}</textarea></td>
          <td><textarea class="goal-input" data-id="${goal.id}" data-field="target" placeholder="Ej: <= 5 días" rows="2" ${goalDisableAttr}>${goal.target || ""}</textarea></td>
      `;

      for(let i=1; i<=count; i++) {
        trHtml += `<td><input type="number" class="goal-input" data-id="${goal.id}" data-field="q${i}" placeholder="0-100" value="${goal[`q${i}`] ?? ""}" min="0" max="100" ${evalDisableAttr}></td>`;
      }

      trHtml += `
          <td class="calculated-val" id="avg-${goal.id}">${goal.average.toFixed(0)}%</td>
          <td class="calculated-val" id="pts-${goal.id}">${goal.points.toFixed(2)}</td>
          <td class="col-action" style="white-space: nowrap;">
            ${!goalsLocked ? `<button class="btn btn-icon btn-remove-goal" data-id="${goal.id}" style="font-size: 1.2rem; color: var(--danger-color); line-height: 1;">&times;</button>` : ''}
          </td>
        </tr>
      `;
      html += trHtml;
    });

    const sub = categoryTotals[category.id];
    if (sub) {
      let subHtml = `
        <tr class="subtotal-row" style="background-color: rgba(110, 142, 158, 0.05); font-weight: 600; font-size: 0.85rem;">
          <td style="text-align: left; text-transform: uppercase; font-weight: bold;">SUBTOTAL</td>
          <td style="text-align: center;" id="subweight-${category.id}">${sub.weightSum}</td>
          <td colspan="2"></td>
      `;
      sub.trimesterScores.forEach((score, idx) => {
        subHtml += `<td style="text-align: center;" id="subscore-${category.id}-${idx}">${score.toFixed(0)}%</td>`;
      });
      const subAvgFulfillment = sub.weightSum > 0 ? (sub.pointsSum / sub.weightSum) * 100 : 0;
      subHtml += `
          <td style="text-align: center;" id="subavg-${category.id}">${subAvgFulfillment.toFixed(0)}%</td>
          <td style="text-align: center;" id="subpoints-${category.id}">${sub.pointsSum.toFixed(2)}</td>
          <td></td>
        </tr>
      `;
      html += subHtml;
    }
  });

  let footerHtml = `
    <tr class="total-row">
      <td></td>
      <td style="text-align: center;" id="total-weight-table">${totalWeight}</td>
      <td colspan="2" style="text-align: right; font-weight: bold; text-transform: uppercase; font-size: 0.75rem;">Total Evaluación %</td>
  `;
  trimesterScores.forEach((score, idx) => {
    footerHtml += `<td style="text-align: center;" id="total-score-table-${idx}">${score.toFixed(0)}%</td>`;
  });
  const globalAvgFulfillment = totalWeight > 0 ? (globalScore / totalWeight) * 100 : 0;
  footerHtml += `
      <td style="text-align: center;" id="total-avg-table">${globalAvgFulfillment.toFixed(0)}%</td>
      <td style="text-align: center;" id="total-pts-table">${globalScore.toFixed(2)}</td>
      <td></td>
    </tr>
  `;
  html += footerHtml;
  tbody.innerHTML = html;
}

function updateEDDCalculations() {
  const { computedGoals, categoryTotals, trimesterScores, totalWeight, globalScore } = store.calculateMCDM();
  
  computedGoals.forEach(goal => {
    const avgCell = document.getElementById(`avg-${goal.id}`);
    const ptsCell = document.getElementById(`pts-${goal.id}`);
    if (avgCell) avgCell.textContent = goal.average.toFixed(0) + "%";
    if (ptsCell) ptsCell.textContent = goal.points.toFixed(2);
  });

  Object.keys(categoryTotals).forEach(catId => {
    const sub = categoryTotals[catId];
    const weightCell = document.getElementById(`subweight-${catId}`);
    const pointsCell = document.getElementById(`subpoints-${catId}`);
    const avgCell = document.getElementById(`subavg-${catId}`);

    if (weightCell) weightCell.textContent = sub.weightSum;
    if (pointsCell) pointsCell.textContent = sub.pointsSum.toFixed(2);
    
    if (avgCell) {
      const subAvgFulfillment = sub.weightSum > 0 ? (sub.pointsSum / sub.weightSum) * 100 : 0;
      avgCell.textContent = subAvgFulfillment.toFixed(0) + "%";
    }
    
    sub.trimesterScores.forEach((score, idx) => {
      const scoreCell = document.getElementById(`subscore-${catId}-${idx}`);
      if (scoreCell) scoreCell.textContent = score.toFixed(0) + "%";
    });
  });

  const totalWeightTable = document.getElementById("total-weight-table");
  if (totalWeightTable) totalWeightTable.textContent = totalWeight;

  trimesterScores.forEach((score, idx) => {
    const totalScoreCell = document.getElementById(`total-score-table-${idx}`);
    if (totalScoreCell) totalScoreCell.textContent = score.toFixed(0) + "%";
  });

  const totalAvgTable = document.getElementById("total-avg-table");
  const totalPtsTable = document.getElementById("total-pts-table");
  const globalAvgFulfillment = totalWeight > 0 ? (globalScore / totalWeight) * 100 : 0;
  if (totalAvgTable) totalAvgTable.textContent = globalAvgFulfillment.toFixed(0) + "%";
  if (totalPtsTable) totalPtsTable.textContent = globalScore.toFixed(2);

  updateGlobalStats();

  // Reactividad instantánea de botones de acción del flujo EDD ante cambios de ponderación en tiempo real
  const currentEval = store.state.evaluations[store.state.currentEvalId];
  if (currentEval) {
    renderActionButtons(currentEval);
  }
}

function updateGlobalStats() {
  const { totalWeight, globalScore } = store.calculateMCDM();

  document.getElementById("global-score").textContent = globalScore.toFixed(2);

  const spanTotalWeight = document.getElementById("total-weight");
  const fulfillment = totalWeight > 0 ? (globalScore / totalWeight) * 100 : 0;
  spanTotalWeight.textContent = fulfillment.toFixed(0);

  const alertBanner = document.getElementById("weight-alert");

  if (totalWeight !== 100) {
    spanTotalWeight.classList.add("weight-error");
    alertBanner.classList.remove("hidden");
  } else {
    spanTotalWeight.classList.remove("weight-error");
    alertBanner.classList.add("hidden");
  }
}

function renderSTARMatrix() {
  const tbody = document.getElementById("star-tbody");
  const data = store.getActiveData();
  if(!data) return;

  const { evalLocked } = getReadOnlyState();
  const disableAttr = evalLocked ? "disabled" : "";
  let html = "";

  data.incidents.forEach((incident) => {
    html += `
      <tr>
        <td>
          <select class="star-input" data-id="${incident.id}" data-field="month" ${disableAttr}>
            <option value="" disabled ${!incident.month ? "selected" : ""}>Mes...</option>
            ${["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
              .map(m => `<option value="${m}" ${incident.month === m ? "selected" : ""}>${m}</option>`).join("")}
          </select>
        </td>
        <td><input type="date" class="star-input" data-id="${incident.id}" data-field="date" value="${incident.date}" ${disableAttr}></td>
        <td><textarea class="star-input" data-id="${incident.id}" data-field="situation" placeholder="Describa evento o situación..." rows="2" ${disableAttr}>${incident.situation || ""}</textarea></td>
        <td><textarea class="star-input" data-id="${incident.id}" data-field="consequence" placeholder="Describa el impacto numérico o cualitativo..." rows="2" ${disableAttr}>${incident.consequence || ""}</textarea></td>
        <td class="col-action">
          ${!evalLocked ? `<button class="btn btn-icon btn-remove-incident" data-id="${incident.id}" style="font-size: 1.2rem; color: var(--danger-color); line-height: 1;">&times;</button>` : ''}
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}


// ==== GESTIÓN DOM Y DELEGACIÓN DE EVENTOS ====
function setupDelegations() {
  // Autenticación mock con clave
  document.getElementById("btn-login").addEventListener("click", () => {
    const key = document.getElementById("login-key").value;
    if (key) {
      const success = store.loginWithKey(key);
      if (!success) alert("Clave incorrecta o usuario no encontrado.");
    }
  });

  document.getElementById("login-key").addEventListener("keypress", (e) => {
    if (e.key === "Enter") document.getElementById("btn-login").click();
  });

  document.getElementById("show-key").addEventListener("change", (e) => {
    const input = document.getElementById("login-key");
    input.type = e.target.checked ? "text" : "password";
  });

  // Navegación de botones Top-Nav
  document.getElementById("btn-user-management").addEventListener("click", () => {
    document.getElementById("user-management-container").classList.remove("hidden");
    document.getElementById("dashboard-container").classList.add("hidden");
    document.getElementById("analytics-container").classList.add("hidden");
    document.getElementById("evaluation-overlay").classList.add("hidden");
    store.state.currentEvalId = null;
    store.notify();
  });

  document.getElementById("btn-dashboard").addEventListener("click", () => {
    document.getElementById("dashboard-container").classList.remove("hidden");
    document.getElementById("user-management-container").classList.add("hidden");
    document.getElementById("analytics-container").classList.add("hidden");
    store.state.currentEvalId = null;
    store.notify();
  });

  const btnAnalyticsNavEl = document.getElementById("btn-analytics-nav");
  if (btnAnalyticsNavEl) {
    btnAnalyticsNavEl.addEventListener("click", () => {
      document.getElementById("analytics-container").classList.remove("hidden");
      document.getElementById("dashboard-container").classList.add("hidden");
      document.getElementById("user-management-container").classList.add("hidden");
      store.state.currentEvalId = null;
      store.notify();
    });
  }

  // Reiniciar todas las evaluaciones a blanco con resguardo de historial
  const btnResetEvals = document.getElementById("btn-reset-evals");
  if (btnResetEvals) {
    btnResetEvals.addEventListener("click", () => {
      if (confirm("⚠️ ADVERTENCIA DE SEGURIDAD:\n\n¿Estás completamente seguro de que deseas REINICIAR y borrar todas las evaluaciones y bitácoras STAR del sistema?\n\nAntes de continuar, el sistema CREARÁ automáticamente una captura de historial anual con los datos vigentes para que puedas consultarla en el futuro.")) {
        
        // 1. Solicitar el año del ciclo laboral para resguardo
        const defaultYear = new Date().getFullYear().toString();
        const targetYear = prompt("Para resguardar el historial, por favor ingrese el AÑO de este ciclo de evaluación:", defaultYear);
        if (!targetYear || !targetYear.trim()) {
          alert("Operación cancelada: Es obligatorio indicar el año para poder realizar el resguardo histórico y el reinicio.");
          return;
        }

        // 2. Calcular promedio general actual de la empresa antes de limpiar
        const { users } = store.state;
        const targetUsers = users.filter(u => u.id !== "u-admin-ana");
        let totalScoreSum = 0;
        let evaluatedCount = 0;

        targetUsers.forEach(u => {
          const evalId = `${u.id}-${defaultYear}`; // Clave estándar basada en el año
          const ev = store.state.evaluations[evalId] || store.state.evaluations[`${u.id}-${targetYear.trim()}`];
          if (ev) {
            const { globalScore } = calculateMCDMForData(ev.data);
            if (globalScore > 0) {
              totalScoreSum += globalScore;
              evaluatedCount++;
            }
          }
        });

        const avgCompanyScore = evaluatedCount > 0 ? (totalScoreSum / evaluatedCount) : 0;

        // 3. Crear el objeto de resguardo histórico
        const historyItem = {
          year: targetYear.trim(),
          timestamp: new Date().toLocaleString(),
          avgCompanyScore: avgCompanyScore,
          evaluations: JSON.parse(JSON.stringify(store.state.evaluations)),
          users: JSON.parse(JSON.stringify(store.state.users))
        };

        // 4. Guardar en localStorage
        const historyList = JSON.parse(localStorage.getItem("edd_app_history") || "[]");
        const filteredHistory = historyList.filter(h => h.year !== targetYear.trim());
        filteredHistory.push(historyItem);
        localStorage.setItem("edd_app_history", JSON.stringify(filteredHistory));

        // 5. Vaciar y reiniciar el registro de evaluaciones de forma forzada
        store.clearAndResetAllEvaluations(targetYear.trim());
        
        // Redirigir de forma automática al Dashboard de Analíticas para visualización reactiva e inmediata
        document.getElementById("analytics-container").classList.remove("hidden");
        document.getElementById("user-management-container").classList.add("hidden");
        document.getElementById("dashboard-container").classList.add("hidden");
        store.notify();
        
        alert(`¡Historial resguardado con éxito para el año ${targetYear.trim()}!\nTodas las evaluaciones y bitácoras activas han sido reiniciadas a blanco.`);
      }
    });
  }

  // Generar datos realistas de demostración
  const btnSeedReal = document.getElementById("btn-seed-real");
  if (btnSeedReal) {
    btnSeedReal.addEventListener("click", () => {
      if (confirm("⚡ SIMULACIÓN DE DATOS REALISTAS:\n\n¿Deseas sobreescribir las evaluaciones actuales y generar una distribución estadística realista (Campana de Gauss y 9-Box Grid completas) para fines de demostración?\n\nEsta acción autogenerará calificaciones trimestrales realistas basadas en el cargo de cada colaborador.")) {
        store.seedRealisticEvaluations();
        
        document.getElementById("analytics-container").classList.remove("hidden");
        document.getElementById("user-management-container").classList.add("hidden");
        document.getElementById("dashboard-container").classList.add("hidden");
        
        store.notify();
        alert("¡Datos de simulación realistas generados con éxito!");
      }
    });
  }

  // User Management Actions
  document.getElementById("btn-show-add-user").addEventListener("click", () => {
    document.getElementById("form-user-title").textContent = "Crear Nuevo Usuario";
    document.getElementById("edit-user-id").value = "";
    document.getElementById("new-user-name").value = "";
    document.getElementById("new-user-ci").value = "";
    document.getElementById("new-user-position").value = "";
    document.getElementById("new-user-dept").value = "";
    document.getElementById("new-user-key").value = "";
    document.getElementById("add-user-form").classList.remove("hidden");
  });

  document.getElementById("btn-cancel-add-user").addEventListener("click", () => {
    document.getElementById("add-user-form").classList.add("hidden");
  });

  document.getElementById("btn-save-new-user").addEventListener("click", () => {
    const id = document.getElementById("edit-user-id").value;
    const name = document.getElementById("new-user-name").value;
    const ci = document.getElementById("new-user-ci").value;
    const position = document.getElementById("new-user-position").value;
    const dept = document.getElementById("new-user-dept").value;
    const role = document.getElementById("new-user-role").value;
    const supervisorId = document.getElementById("new-user-supervisor").value || null;
    const password = document.getElementById("new-user-key").value;

    if (!name || !ci || !password) {
      alert("Nombre, C.I. y Clave son obligatorios.");
      return;
    }

    if (id) {
      store.updateUser(id, { name, ci, position, department: dept, role, supervisorId, password });
    } else {
      store.addUser({ name, ci, position, department: dept, role, supervisorId, password });
    }
    
    document.getElementById("add-user-form").classList.add("hidden");
  });
  document.getElementById("btn-logout").addEventListener("click", () => {
    sessionStorage.removeItem("edd_employee_autoselected");
    store.logout();
  });

  // Respaldo y Restauración
  const btnBackup = document.getElementById("btn-backup");
  if (btnBackup) {
    btnBackup.addEventListener("click", () => {
      const data = localStorage.getItem("edd_app_state");
      if (!data) {
        alert("No hay datos para respaldar.");
        return;
      }
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `edd_respaldo_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  const btnRestore = document.getElementById("btn-restore");
  const fileRestore = document.getElementById("file-restore");
  
  if (btnRestore && fileRestore) {
    btnRestore.addEventListener("click", () => {
      fileRestore.click();
    });

    fileRestore.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target.result);
          if (json.users && json.evaluations) {
            localStorage.setItem("edd_app_state", event.target.result);
            store.state.users = json.users;
            store.state.evaluations = json.evaluations;
            if (json.viewMode) store.state.viewMode = json.viewMode;
            store.notify();
            alert("Respaldo restaurado exitosamente.");
          } else {
            alert("El archivo JSON no tiene el formato esperado para EddApp.");
          }
        } catch (err) {
          alert("Error al leer el archivo de respaldo.");
        }
      };
      reader.readAsText(file);
      e.target.value = ""; // Resetear input
    });
  }

  document.getElementById("btn-add-category").addEventListener("click", () => {
    const newCat = store.addCategory("");
    if(newCat) store.addGoal(newCat.id);
  });

  document.getElementById("btn-add-incident").addEventListener("click", () => {
    store.addIncident();
  });

  document.getElementById("eval-count").addEventListener("change", (e) => {
    store.setEvalCount(Number(e.target.value));
  });

  const globalEvalSelect = document.getElementById("global-eval-count");
  if (globalEvalSelect) {
    globalEvalSelect.addEventListener("change", (e) => {
      store.setGlobalEvalCount(Number(e.target.value));
    });
  }

  document.getElementById("eval-potential").addEventListener("change", (e) => {
    store.setPotential(e.target.value);
  });

  document.getElementById("edd-tbody").addEventListener("input", (e) => {
    const target = e.target;
    if (target.matches(".goal-input")) {
      store.updateGoal(target.dataset.id, target.dataset.field, target.value);
    } else if (target.matches(".cat-input")) {
      store.updateCategory(target.dataset.id, target.value);
    }
  });

  document.getElementById("edd-tbody").addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".btn-remove-goal")) {
      store.removeGoal(target.dataset.id);
    } else if (target.matches(".btn-add-goal-to-cat")) {
      store.addGoal(target.dataset.catid);
    } else if (target.matches(".btn-remove-cat")) {
      store.removeCategory(target.dataset.id);
    }
  });

  document.getElementById("star-tbody").addEventListener("input", (e) => {
    const target = e.target;
    if (target.matches(".star-input")) {
      store.updateIncident(target.dataset.id, target.dataset.field, target.value);
    }
  });

  document.getElementById("star-tbody").addEventListener("click", (e) => {
    if (e.target.matches(".btn-remove-incident")) {
      store.removeIncident(e.target.dataset.id);
    }
  });

  const btnConfirmPrint = document.getElementById("btn-confirm-print");
  if (btnConfirmPrint) {
    btnConfirmPrint.addEventListener("click", () => {
      const selected = document.getElementById("print-supervisor-select").value;
      document.getElementById("print-select-modal").classList.add("hidden");
      printSupervisionReport(selected);
    });
  }

  // Imprimir ficha de evaluación individual
  const btnPrintSingleEval = document.getElementById("btn-print-single-eval");
  if (btnPrintSingleEval) {
    btnPrintSingleEval.addEventListener("click", () => {
      if (store.state.currentEvalId) {
        printSingleEvaluation(store.state.currentEvalId);
      }
    });
  }

  // Filtro de búsqueda rápida en Dashboard por delegación
  const dashContainer = document.getElementById("dashboard-container");
  if (dashContainer) {
    dashContainer.addEventListener("input", (e) => {
      if (e.target.id === "dashboard-search-input") {
        const query = e.target.value.toLowerCase().trim();
        
        // Filtrar Tarjetas
        const cards = dashContainer.querySelectorAll(".user-card");
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(query)) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });

        // Filtrar Filas de Lista
        const items = dashContainer.querySelectorAll(".user-list-item");
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      }
    });
  }

  // Auto-redimensionado dinámico de textareas al escribir
  document.addEventListener('input', (e) => {
    if (e.target.tagName && e.target.tagName.toLowerCase() === 'textarea') {
      e.target.style.height = 'auto';
      e.target.style.height = (e.target.scrollHeight) + 'px';
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
