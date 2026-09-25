import "./Header.css";
import "./Footer.css";

const Header = () => {
  return (
    <header class="navbar">
      <div class="navbar-container">
        <a href="#" class="navbar-logo">
          AR.
        </a>

        <nav class="navbar-menu">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" class="navbar-button">
          Propuestas
        </a>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© 2026 Axel Romero. Todos los derechos reservados.</p>

        <p className="footer-description">
          Diseño minimalista &amp; responsivo
        </p>
      </div>
    </footer>
  );
};

export default Header;
export { Footer };
