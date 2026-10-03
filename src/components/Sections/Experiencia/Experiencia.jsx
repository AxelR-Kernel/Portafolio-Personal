import "./Experiencia.css";

// Datos de la línea de tiempo — separados del JSX para facilitar edición futura
const experiencias = [
  {
    id: 1,
    titulo: "Proyecto: Sistema de Gestión de Empleados con Registro Biométrico",
    rol: "Desarrollador",
    descripcion:
      "Logré automatizar el control de asistencia y eliminar registros manuales erróneos, medido por la precisión del sistema de verificación, desarrollando de inicio a fin —conceptualización, diseño, desarrollo e implementación— una aplicación con autenticación biométrica por huella digital, trabajando bajo metodología Scrum y documentando el avance mediante informes técnicos.",
  },
  {
    id: 2,
    titulo: "Servicio Social: Plataforma Web de Agenda para Servicios y Transporte",
    rol: "Desarrollador",
    descripcion:
      "Logré optimizar la programación de actividades y reducir conflictos de horario, medido por la eficiencia en la asignación de citas, desarrollando de inicio a fin una aplicación web integral bajo metodología Scrum, diseñando la base de datos con procedimientos almacenados y triggers para garantizar la integridad de la información, y entregando informes técnicos periódicos al equipo.",
  },
  {
    id: 3,
    titulo: "Residencias Profesionales: Plataforma Web de Agenda y Análisis de Servicios",
    rol: "Desarrollador",
    descripcion:
      "Logré mejorar la toma de decisiones del negocio, medido por la disponibilidad de reportes analíticos en tiempo real, desarrollando funcionalidades backend para una aplicación web de principio a fin, colaborando en equipo bajo Scrum, dando mantenimiento de software continuo post-implementación y presentando informes técnicos de avance.",
  },
  {
    id: 4,
    titulo: "Proyectos Personales — Infraestructura y Acceso Remoto",
    rol: "Desarrollador",
    descripcion:
      "Logré habilitar acceso remoto seguro a archivos, medido por la disponibilidad continua del servicio, implementando y configurando un servidor NAS con Ubuntu Server, protocolos SSH y transferencia segura SFTP.",
  },
  {
    id: 5,
    titulo: "Hackathons y Competencias Tecnológicas",
    rol: "Participante",
    descripcion:
      "Participé en el Rally Latinoamericano de Innovación 2024 y en Hackathon Hack4Edu (5ª edición), colaborando en equipo bajo presión de tiempo para desarrollar soluciones tecnológicas funcionales en formato de competencia (certificados obtenidos).",
  },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia-section">
      <div className="experiencia-grid">

        {/* Columna izquierda — etiqueta de sección */}
        <div className="experiencia-label-col">
          <h2 className="experiencia-label">Experiencia</h2>
        </div>

        {/* Columna derecha — línea de tiempo */}
        <div className="experiencia-content">
          <ol className="exp-timeline">
            {experiencias.map((item, index) => (
              <li key={item.id} className="exp-item">

                {/* Línea vertical + nodo */}
                <div className="exp-line-col" aria-hidden="true">
                  {/* Nodo circular */}
                  <div className="exp-node" />
                  {/* Línea descendente — no se renderiza en el último ítem */}
                  {index < experiencias.length - 1 && (
                    <div className="exp-connector" />
                  )}
                </div>

                {/* Contenido del ítem */}
                <div className="exp-body">
                  <h3 className="exp-titulo">{item.titulo}</h3>
                  <span className="exp-rol">{item.rol}</span>
                  <p className="exp-descripcion">{item.descripcion}</p>
                </div>

              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};

export default Experiencia;
