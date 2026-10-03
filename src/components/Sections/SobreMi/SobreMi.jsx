import "./SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-grid">

        {/* Columna izquierda — etiqueta de sección */}
        <div className="sobre-mi-label-col">
          <h2 className="sobre-mi-label">Sobre mí</h2>
        </div>

        {/* Columna derecha — contenido */}
        <div className="sobre-mi-content">
          <p className="sobre-mi-text">
            Desarrollador junior con experiencia end-to-end en aplicaciones web:
            desde conceptualización hasta despliegue, trabajando bajo metodología
            Scrum. Certificado en redes y ciberseguridad (Cisco). Apasionado por
            construir soluciones funcionales, eficientes y escalables.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SobreMi;
