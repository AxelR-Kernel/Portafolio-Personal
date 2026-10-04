import { Sun, Moon } from "lucide-react";
import "./Header.css";
import "./Footer.css";

// ============================================================
// Header — recibe `theme` y `onToggleTheme` desde App.jsx
// ============================================================

const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          AR.
        </a>

        {/* Menú de navegación */}
        <nav className="navbar-menu">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Acciones: toggle de tema + botón CTA */}
        <div className="navbar-actions">
          {/* Botón toggle oscuro/claro — Sun y Moon de lucide-react */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            title={isDark ? "Tema claro" : "Tema oscuro"}
          >
            {isDark
              ? <Sun size={16} strokeWidth={2} aria-hidden="true" />
              : <Moon size={16} strokeWidth={2} aria-hidden="true" />
            }
          </button>

          {/* CTA principal */}
          <a href="#contacto" className="navbar-button">
            Propuestas
          </a>
        </div>
      </div>
    </header>
  );
};

// ============================================================
// Footer
// ============================================================

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <p>© 2026 Axel Romero. Todos los derechos reservados.</p>
      <p className="footer-description">
        Diseño minimalista &amp; responsivo
      </p>
    </div>
  </footer>
);

export default Header;
export { Footer };
