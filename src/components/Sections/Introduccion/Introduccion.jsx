import "./Introduccion.css";
import SecondLayout from "../../SeconLayout";
import StarModel from "../../StarModel/StarModel";
import { scrollToSection } from "../../Navbar/Navbar";

const Introduccion = () => {
  return (
    <SecondLayout>
      <section className="intro-section">

        {/* Columna izquierda — texto */}
        <div className="intro-content">
          <div className="availability-badge">
            <span className="availability-dot"></span>
            <span>Disponible para nuevas oportunidades</span>
          </div>

          <h1 className="intro-title">
            Axel Romero. <br />
            <span className="intro-subtitle">
              Software Engineer &amp; UI Architect.
            </span>
          </h1>

          <p className="intro-description">
            Me encanta construir productos digitales escalables y de alto impacto
            con un enfoque estético impecable, arquitectura limpia y experiencia
            de usuario excepcional.
          </p>

          <div className="intro-actions">
            <a
              href="#contacto"
              className="intro-button intro-button-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection("contacto"); }}
            >
              Contactar ahora
            </a>
            <a
              href="#experiencia"
              className="intro-button intro-button-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection("experiencia"); }}
            >
              Ver trayectoria
            </a>
          </div>
        </div>

        {/* Columna derecha — modelo ASCII 3D */}
        <div className="intro-model">
          <StarModel />
        </div>

      </section>
    </SecondLayout>
  );
};

export default Introduccion;
