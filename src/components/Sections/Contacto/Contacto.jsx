import "./Contacto.css";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

// ============================================================
// Ícono LinkedIn — no disponible en las librerías del proyecto.
// SVG inline mínimo mantenido únicamente para este caso.
// ============================================================
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// ============================================================
// Datos de los canales de contacto
// ============================================================

const canales = [
  {
    id: "linkedin",
    Icono: IconLinkedIn,
    titulo: "LinkedIn",
    detalle: "/in/Axel-Romero",
    href: "https://www.linkedin.com/in/axel-romero-87bab5366/",
    externo: true,
    // fill: SVG inline ya incluye fill="currentColor"
    iconLib: "inline",
  },
  {
    id: "github",
    Icono: SiGithub,
    titulo: "GitHub",
    detalle: "/AxelRomero",
    href: "https://github.com/AxelR-Kernel",
    externo: true,
    // SiGithub de @icons-pack/react-simple-icons — recibe size y color como props
    iconLib: "simple-icons",
  },
  {
    id: "email",
    Icono: Mail,
    titulo: "Correo Electrónico",
    detalle: "axelrp.dev@gmail.com",
    href: "mailto:axelrp.dev@gmail.com",
    externo: false,
    iconLib: "lucide",
  },
  {
    id: "telefono",
    Icono: Phone,
    titulo: "Teléfono Personal",
    detalle: "+52 556 209 0915",
    href: "tel:+525562090915",
    externo: false,
    iconLib: "lucide",
  },
];

// ============================================================
// Tarjeta de canal de contacto
// ============================================================

const CanalCard = ({ canal }) => {
  const { Icono, titulo, detalle, href, externo, iconLib } = canal;

  // Lucide y simple-icons usan props distintas para el tamaño
  const iconProps =
    iconLib === "lucide"
      ? { size: 15, strokeWidth: 2, "aria-hidden": true }
      : iconLib === "simple-icons"
      ? { size: 15, "aria-hidden": true }
      : {};                         // inline: sin props extra

  return (
    <a
      href={href}
      className="contacto-card"
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${titulo}: ${detalle}`}
    >
      {/* Ícono + texto */}
      <div className="contacto-card-left">
        <div className="contacto-icon-box">
          <Icono {...iconProps} />
        </div>
        <div className="contacto-card-info">
          <p className="contacto-card-titulo">{titulo}</p>
          <p className="contacto-card-detalle">{detalle}</p>
        </div>
      </div>

      {/* Flecha de navegación — ArrowUpRight de lucide-react */}
      <ArrowUpRight
        className="contacto-arrow"
        size={14}
        strokeWidth={2}
        aria-hidden="true"
      />
    </a>
  );
};

// ============================================================
// Sección principal
// ============================================================

const Contacto = () => (
  <section id="contacto" className="contacto-section">
    <div className="contacto-grid">

      {/* Columna izquierda — etiqueta */}
      <div className="contacto-label-col">
        <h2 className="contacto-label">Contacto</h2>
      </div>

      {/* Columna derecha — descripción + tarjetas */}
      <div className="contacto-content">
        <p className="contacto-descripcion">
          ¿Tienes una propuesta de trabajo interesante o quieres colaborar en
          algún proyecto? Conéctate conmigo a través de cualquiera de los
          siguientes canales:
        </p>

        <div className="contacto-cards">
          {canales.map((canal) => (
            <CanalCard key={canal.id} canal={canal} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Contacto;
