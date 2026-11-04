/* =====================================================================
   DATOS DEL CICLO — único archivo que hay que editar cada ciclo
   ---------------------------------------------------------------------
   Todas las páginas leen de aquí: número de ciclo, fechas clave,
   enlaces de Drive/Docs/Formularios, avisos y fecha de actualización.
   Los textos marcados como "HTML" admiten etiquetas (<a>, <strong>…).
   ===================================================================== */

window.CICLO = {

  // Número de ciclo tal como se muestra: "Fechas clave del ciclo 02", "Ciclo 02"…
  numero: '02',

  // Fecha que aparece en "Última actualización" de la hoja interactiva de horarios
  ultimaActualizacion: '8/7/2026',

  // Fecha límite para solicitar autorización de 3.ª matrícula (se usa dentro de oraciones)
  fechaLimite3aMatricula: 'jueves 9 de julio',

  // Texto del botón principal de horarios en la portada
  textoBotonHorarios: 'Ver horarios 2018/2023',

  // ---------- Enlaces ----------
  enlaces: {
    horarios:            'https://drive.google.com/open?id=1923eWimsNDPZbsRJVhP5gRsiucGjTOb5',
    listadoAsignaturas:  'https://drive.google.com/open?id=1y3ivrCp_7fT7D3oIXPWiKIe9DtbUjibN',
    hojaInteractiva:     'https://docs.google.com/spreadsheets/d/16tKmF9h26Kjmy846Naq4Z-XloA2qgfeH?rtpof=true&usp=drive_fs',
    calendarioAcademico: 'https://drive.google.com/open?id=1ztWR73ITUoLOF77Rh7TLZA5f2QSHo3m7',
    formato3aMatricula:  'https://docs.google.com/document/d/1ooplPmo3fWcnGAQLoOipXJLfIvERY1R8',
    plantillaHorario:    'https://docs.google.com/document/d/1C3xfEp7ahcFnmivXKQX4BlCA20AUCL06C6SOFeYF5bc/edit?usp=sharing',
    hojaAsesoria:        'https://docs.google.com/document/d/15p5K80oAelcqt8tGNRQlPJ7tnhvFVyxe',
    formularioProblemas: 'https://forms.gle/niYX9DEPgqshswdW7',
    mallaAri2018:        'https://drive.google.com/open?id=1e8xpUFCSqy_6aFLFYJ4rYyiDkTk_DrwK',
    mallaArq2018:        'https://drive.google.com/open?id=1e02tQdBMCcbCzEgWoytMqdnPlkGfabal',
    mallaAri2023:        'https://drive.google.com/open?id=1LbUfrU8d8MPIpe7XYC3Wa8VljsyWFBXw',
    mallaArq2023:        'https://drive.google.com/open?id=1LcKixuJLy1CkPlPRgVf4YlogJbpoIIKR'
  },

  // ---------- Fechas clave (portada) ----------
  // dia: texto grande en amarillo · texto: descripción (HTML)
  fechas: [
    {
      dia: 'Jueves 9 de julio',
      texto: 'Fecha límite para presentar la solicitud de autorización de 3.ª matrícula.'
    },
    {
      dia: '19, 20 y 21 de agosto',
      texto: 'Período de retiro y adición. Plazo para inscribir la asignatura que requiere UV adicional (2.ª matrícula).'
    },
    {
      dia: 'Tu segmento',
      texto: 'Consulta la fecha en que te corresponde inscribir en los <a href="https://www.ujmd.edu.sv/inscripcion-horario/arquitectura/" target="_blank" rel="noopener">horarios de inscripción</a>.'
    }
  ],

  // ---------- Avisos de asignaturas (Recomendaciones → "Consideraciones de asignaturas") ----------
  // tipo: 'amarilla' (destacado) o 'gris' · titulo: texto en negrita · texto: HTML
  avisosAsignaturas: [
    {
      tipo: 'gris',
      titulo: 'Luminotecnia (LTC0) y Ética y Legislación Profesional (ELP0)',
      texto: 'Estarán habilitadas únicamente para estudiantes de la carrera de Arquitectura de Interiores.'
    },
    {
      tipo: 'gris',
      titulo: 'Laboratorio de Fabricación Digital',
      texto: 'La convocatoria a los cursos y prácticas será realizada una vez iniciado el ciclo, y estará dirigida a quienes hayan aprobado la asignatura PDP1. Estas prácticas no tienen costo para los estudiantes.'
    },
    {
      tipo: 'gris',
      titulo: 'Diseño del Portafolio Profesional (DPP0)',
      texto: 'El grupo 1-4 es exclusivo para estudiantes de la carrera de Arquitectura de Interiores.'
    },
    {
      tipo: 'amarilla',
      titulo: 'No se permiten choques de horarios',
      texto: 'Ya sea en modalidad presencial o no presencial.'
    }
  ]
};
